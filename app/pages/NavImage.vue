<!-- 5张图片效果 -->
<script setup>
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  activeIndex: {
    type: Number,
    default: 0
  }
})

const errorMap = reactive({})

let uidCounter = 0
const slides = ref([{ index: props.activeIndex, uid: uidCounter++ }])

const pvDir = ref(1)
let wordZCounter = 10
const wordZMap = reactive({ [props.activeIndex]: wordZCounter })

watch(
  () => props.activeIndex,
  (newIndex, oldIndex) => {
    const current = slides.value[0]
    if (current && current.index === newIndex) return

    slides.value = [{ index: newIndex, uid: uidCounter++ }]
    pvDir.value = newIndex >= oldIndex ? 1 : -1
    wordZMap[newIndex] = ++wordZCounter
  }
)

// 新图进场：遮罩从 50px 向外展开 + 淡入 + 画面从 1.07 收缩回 1
const onEnter = (el, done) => {
  const media = el.firstElementChild
  const tl = gsap.timeline({ onComplete: done })

  tl.fromTo(
    el,
    { clipPath: 'inset(50px 50px 50px 50px)', opacity: 0 },
    { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.95, ease: 'power3.out' },
    0
  ).to(
    el,
    { opacity: 1, duration: 0.45, ease: 'power2.out' },
    0
  )

  if (media) {
    tl.fromTo(
      media,
      { scale: 1.07 },
      { scale: 1, duration: 0.95, ease: 'power3.out' },
      0
    )
  }
}

// 旧图退场：整体微微缩小后退（0.94 倍）并同步淡出
const onLeave = (el, done) => {
  const media = el.firstElementChild
  gsap.killTweensOf([el, media])

  const tl = gsap.timeline({ onComplete: done })

  tl.to(
    el,
    { opacity: 0, duration: 0.85, ease: 'power2.out' },
    0
  )

  if (media) {
    tl.to(
      media,
      { scale: 0.94, duration: 0.95, ease: 'power3.out' },
      0
    )
  }
}

</script>

<template>
  <div
    class="pointer-events-none absolute left-[61px] bottom-[77px] h-[400px] w-[400px] select-none will-change-[opacity]"
  >
    <!-- 图片裁切容器：单独保留 overflow-hidden，避免裁掉探出边框的文字 -->
    <div class="relative z-20 h-full w-full overflow-hidden">
      <div class="relative z-0 h-full w-full ">
        <TransitionGroup :css="false" @enter="onEnter" @leave="onLeave">
          <div
            v-for="slide in slides"
            :key="slide.uid"
            :style="{ zIndex: slide.uid }"
            class="absolute inset-0 will-change-[clip-path,opacity]"
          >
            <img
              v-if="!errorMap[slide.index]"
              :src="items[slide.index].image"
              :alt="items[slide.index].label"
              @error="errorMap[slide.index] = true"
              class="h-full w-full object-cover"
            />
            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-[#D8D8D6] font-['Google_Sans_Flex'] text-[28px] font-medium text-[#8A6D67]/60"
            >
             0{{ slide.index + 1 }} · {{ items[slide.index].label }}
          </div>
        </div>
       </TransitionGroup>
      </div>

      <!-- 顶层重叠文字：仅在图片边界内显示 #F8F5EE，超出部分自动裁切 -->
      <div class="absolute -top-[56px] left-[290px] z-10 grid">
        <div
          v-for="(item, index) in items"
          :key="`overlay-${item.label || index}`"
          :class="[
            'preview-words-group col-start-1 row-start-1 flex flex-col items-start gap-y-[10px]',
            { 'is-in': activeIndex === index }
          ]"
          :style="{
            '--pv-n': item.words.length,
            '--pv-dir': pvDir,
            zIndex: wordZMap[index] || 1
          }"
        >
          <span
            v-for="(word, wordIndex) in item.words"
            :key="word"
            class="word-mask"
            :style="{ '--i': wordIndex }"
          >
            <span
              class="word font-['Google_Sans_Flex'] text-[80px] font-medium leading-none tracking-normal text-[#F8F5EE]"
            >
              {{ word }}
            </span>
          </span>
        </div>
      </div>

    </div>

    <!-- 右上角三行关键词：面朝下向内平躺，触发后带弧线旋转向上翻出 -->
    <div class="absolute -top-[56px] left-[290px] z-10 grid">
      <div
        v-for="(item, index) in items"
        :key="item.label || index"
        :class="[
          'preview-words-group col-start-1 row-start-1 flex flex-col items-start gap-y-[10px]',
          { 'is-in': activeIndex === index }
        ]"
        :style="{ 
          '--pv-n': item.words.length,
          '--pv-dir': pvDir,
          zIndex: wordZMap[index] || 1 
          }"
      >
        <span
          v-for="(word, wordIndex) in item.words"
          :key="word"
          class="word-mask"
          :style="{ '--i': wordIndex }"
        >
          <span
            class="word font-['Google_Sans_Flex'] text-[80px] font-medium leading-none tracking-normal text-[#8A6D67]"
          >
            {{ word }}
          </span>
        </span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.word-mask {
  display: block;
}

.word {
  display: block;
  white-space: nowrap;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  will-change: transform, opacity;
  opacity: 0;
}

/* 向下悬停（dir=1）正向向上翻出；向上悬停（dir=-1）反向向下翻入，且三行交错顺序同步反转 */
.preview-words-group.is-in .word {
  --o: calc(
    var(--i, 0) * (1 + var(--pv-dir, 1)) / 2 +
    (var(--pv-n, 3) - 1 - var(--i, 0)) * (1 - var(--pv-dir, 1)) / 2
  );
  --w-dl: calc(var(--o) * 0.04s);

  animation:
    word-flip-transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) var(--w-dl) both,
    word-flip-opacity 0.18s ease-out var(--w-dl) both;
}

@keyframes word-flip-transform {
  from {
    transform: perspective(400px)
      translateY(calc(var(--pv-dir, 1) * 36%))
      rotateX(calc(var(--pv-dir, 1) * -90deg))
      scale(0.94);
  }
  to {
    transform: perspective(400px) translateY(0%) rotateX(0deg) scale(1);
  }
}

@keyframes word-flip-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>