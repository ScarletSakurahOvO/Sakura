<!-- 鼠标视差效果 -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const frameRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

// 可调参数：插画正向位移幅度（像素）与线框反向位移幅度（像素）
const CARD_OFFSET = 6
const FRAME_OFFSET = 9

let ctx: gsap.Context | null = null
let handleMouseMove: ((e: MouseEvent) => void) | null = null
let handleMouseLeave: (() => void) | null = null

onMounted(() => {
  if (!cardRef.value || !frameRef.value) return

  ctx = gsap.context(() => {
    // 1. 前景插画：跟随鼠标方向做微幅 2D 平面视差位移
    const cardXTo = gsap.quickTo(cardRef.value!, 'x', {
      duration: 0.65,
      ease: 'power3.out'
    })
    const cardYTo = gsap.quickTo(cardRef.value!, 'y', {
      duration: 0.65,
      ease: 'power3.out'
    })

    // 2. 后方线框：与插画保持同款 2D 视差逻辑，向相反方向移动
    const frameXTo = gsap.quickTo(frameRef.value!, 'x', {
      duration: 0.85,
      ease: 'power3.out'
    })
    const frameYTo = gsap.quickTo(frameRef.value!, 'y', {
      duration: 0.85,
      ease: 'power3.out'
    })

    // 3. 监听全屏鼠标移动，归一化到 [-1, 1]
    handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2

      // 插画随鼠标方向移动
      cardXTo(x * CARD_OFFSET)
      cardYTo(y * CARD_OFFSET)

      // 线框向反方向移动
      frameXTo(-x * FRAME_OFFSET)
      frameYTo(-y * FRAME_OFFSET)
    }

    // 4. 鼠标离开窗口时柔和回正
    handleMouseLeave = () => {
      cardXTo(0)
      cardYTo(0)
      frameXTo(0)
      frameYTo(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
  })
})

onUnmounted(() => {
  if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove)
  if (handleMouseLeave) document.removeEventListener('mouseleave', handleMouseLeave)
  ctx?.revert()
})
</script>

<template>
  <!-- 外层容器：纯 2D 视差舞台 -->
  <div class="relative h-[459px] w-[750px]">
    <!-- 后方线框：反方向 2D 视差位移 -->
    <div
      ref="frameRef"
      class="absolute inset-0 border border-[#906E6C] pointer-events-none z-0 will-change-transform"
    ></div>

    <!-- 前方插画容器：正向 2D 视差位移 -->
    <div
      ref="cardRef"
      class="absolute left-[24px] top-[24px] h-[459px] w-[750px] overflow-hidden bg-neutral-100 shadow-sm z-10 will-change-transform"
    >
      <slot />
    </div>
  </div>
</template>