<script setup lang="ts">
import { ref, nextTick } from 'vue'
import gsap from 'gsap'
import { usePicture } from './usePicture'
import Anime from './Anime.vue'
import Galme from './Galme.vue'
import Tokyo from './Tokyo.vue'
import type { GalleryItem } from './types'

const {
  stageRef,
  viewportRef,
  chunkList,
  isDragging,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp
} = usePicture()

// --- 弹窗与动效相关状态 ---
const activeItem = ref<GalleryItem | null>(null)
const originRect = ref<DOMRect | null>(null)
const isClosing = ref(false)

// --- DOM 节点引用 ---
const overlayRef = ref<HTMLElement | null>(null)
const previewImgRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const cursorRef = ref<HTMLElement | null>(null)

// --- 音频实例管理 ---
let currentAudio: HTMLAudioElement | null = null

// 1. 光标跟随：0.28s 阻尼平滑延迟跟随
const onOverlayPointerMove = (e: MouseEvent) => {
  if (!cursorRef.value) return
  gsap.to(cursorRef.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.28,
    ease: 'power2.out',
    overwrite: 'auto'
  })
}

// 2. 打开弹窗：FLIP 无缝起飞 + 角色台词播放 + 时序淡入文字
const openPreview = async (payload: { item: GalleryItem; rect: DOMRect }) => {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }

  if (payload.item.audio) {
    currentAudio = new Audio(payload.item.audio)
    currentAudio.play().catch(() => {})
  }

  activeItem.value = payload.item
  originRect.value = payload.rect

  await nextTick()
  if (!overlayRef.value || !previewImgRef.value || !infoRef.value) return

  if (cursorRef.value) {
    gsap.set(cursorRef.value, {
      xPercent: -50,
      yPercent: -50,
      x: payload.rect.left + payload.rect.width / 2,
      y: payload.rect.top + payload.rect.height / 2
    })
  }

  const targetRect = previewImgRef.value.getBoundingClientRect()
  const deltaX = payload.rect.left - targetRect.left
  const deltaY = payload.rect.top - targetRect.top
  const scale = payload.rect.width / targetRect.width

  const tl = gsap.timeline()

  tl.fromTo(overlayRef.value, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0)

  tl.fromTo(
    previewImgRef.value,
    {
      x: deltaX,
      y: deltaY,
      scale: scale,
      transformOrigin: 'top left'
    },
    {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out'
    },
    0
  )

  tl.fromTo(
    infoRef.value,
    {
      opacity: 0,
      y: 10
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }
  )
}

// 3. 关闭弹窗：语音平滑淡出 + 文字隐去 + 图片缩回原位
const closePreview = () => {
  if (isClosing.value || !activeItem.value || !previewImgRef.value || !overlayRef.value) return
  isClosing.value = true

  if (currentAudio) {
    const audioToFade = currentAudio
    gsap.to(audioToFade, {
      volume: 0,
      duration: 0.3,
      onComplete: () => {
        audioToFade.pause()
      }
    })
    currentAudio = null
  }

  const tl = gsap.timeline({
    onComplete: () => {
      activeItem.value = null
      isClosing.value = false
    }
  })

  if (infoRef.value) {
    tl.to(infoRef.value, { opacity: 0, duration: 0.15, ease: 'power2.in' }, 0)
  }

  if (originRect.value) {
    const targetRect = previewImgRef.value.getBoundingClientRect()
    const deltaX = originRect.value.left - targetRect.left
    const deltaY = originRect.value.top - targetRect.top
    const scale = originRect.value.width / targetRect.width

    tl.to(previewImgRef.value, {
      x: deltaX,
      y: deltaY,
      scale: scale,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.inOut'
    }, 0.05)
  }

  tl.to(overlayRef.value, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.1)
}
</script>

<template>
  <div class="relative w-full h-[140vh]">
    <div
      ref="viewportRef"
      class="sticky top-0 z-10 w-full h-screen overflow-hidden select-none bg-[#FAFAFA]"
      :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
    >
    <!-- 无限循环画布九宫格 -->
    <div ref="stageRef" class="absolute left-0 top-0 will-change-transform">
      <div
        v-for="chunk in chunkList"
        :key="chunk.id"
        class="absolute left-0 top-0 will-change-transform"
        :style="{ width: '6600px', height: '1600px' }"
      >
        <Anime @preview="openPreview" />
        <Galme @preview="openPreview" />
        <Tokyo @preview="openPreview" />
      </div>
    </div>

    <!-- 全屏纯透明毛玻璃遮罩与 Lightbox 居中容器 -->
    <div
      v-if="activeItem"
      ref="overlayRef"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md cursor-none select-none"
      @pointermove="onOverlayPointerMove"
      @click="closePreview"
    >
      <div class="relative flex flex-col items-center max-w-[85vw] max-h-[85vh]">
        <img
          ref="previewImgRef"
          :src="activeItem.src"
          :alt="activeItem.title"
          class="max-w-[70vw] max-h-[65vh] w-auto h-auto object-contain shadow-2xl rounded-sm will-change-transform"
        />

         <div
          ref="infoRef"
          class="mt-6 flex flex-col items-center text-center opacity-0 pointer-events-none"
         >
            <p class="text-[#906E6C] text-[26px] font-bold tracking-wide font-['Google_Sans_Flex',sans-serif]">
              {{ activeItem.title }}
            </p>
            <p class="mt-[5px] text-[#906E6C] text-[24px] font-light max-w-lg leading-relaxed font-['Google_Sans_Flex',sans-serif]">
              {{ activeItem.desc }}
            </p>
          </div>
        </div>

        <div
          ref="cursorRef"
          class="pointer-events-none fixed left-0 top-0 z-[60] text-[#906E6C] text-[16px] font-semibold tracking-[0.25em] whitespace-nowrap uppercase select-none drop-shadow-sm font-sans"
        >
          go back
        </div>
      </div>
    </div>
  </div>
</template>