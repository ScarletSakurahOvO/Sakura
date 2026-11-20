<!-- 菜单呼出页 -->
<script setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'
import NavImage from './NavImage.vue'

defineProps({
  open: Boolean
})

// 进场前：白画布收拢在右侧边缘（clipPath 裁切至 0 宽），左侧预览图略微收紧等待舒展
const onBeforeEnter = (el) => {
  const [backdrop, preview, panel] = el.children
  const navTexts = panel.querySelectorAll('.nav-item-text')
  const orderIndicator = panel.querySelector('.nav-order-indicator')

  gsap.set(backdrop, { opacity: 0 })
  gsap.set(preview, { opacity: 0, x: 36, scale: 0.96 })
  gsap.set(panel, { clipPath: 'inset(0% 0% 0% 100%)' })
  gsap.set(navTexts, { yPercent: 120, opacity: 0 })
  gsap.set(orderIndicator, { opacity: 0 })
}

// 打开：白画布从右边缘向左延伸铺展，掠过 "Home" 右侧时导航项与指示器同步呼出
const onEnter = (el, done) => {
  const [backdrop, preview, panel] = el.children
  const navTexts = panel.querySelectorAll('.nav-item-text')
  const orderIndicator = panel.querySelector('.nav-order-indicator')
  gsap.killTweensOf([backdrop, preview, panel, ...navTexts, orderIndicator])

  // 计算 "Home" 右侧距离画布左边缘的距离（pl-[40px] + Home 文字宽度）
  const homeRightOffset = (navTexts[0]?.offsetWidth || 265) + 40
  const panelWidth = panel.offsetWidth || (window.innerWidth * 0.5 + 35)
  const remainingRatio = Math.min(0.85, Math.max(0.15, homeRightOffset / panelWidth))
  // 根据 panel 的 power3.out 曲线反推出延伸边到达该位置的时间点
  const triggerTime = 1.05 * (1 - Math.cbrt(remainingRatio))

  const tl = gsap.timeline({ onComplete: done })
  tl.to(backdrop, {
    opacity: 1,
    duration: 1.05,
    ease: 'power3.out'
  }, 0)
  tl.to(preview, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1.05,
    ease: 'power3.out'
  }, 0)
  tl.to(panel, {
    clipPath: 'inset(0% 0% 0% 0%)',
    duration: 1.05,
    ease: 'power3.out'
  }, 0)
  tl.to(navTexts, {
    yPercent: 0,
    opacity: 1,
    duration: 0.65,
    ease: 'power3.out'
  }, triggerTime)
  tl.to(orderIndicator, {
    opacity: 1,
    duration: 0.65,
    ease: 'power3.out'
  }, triggerTime)
}

// 关闭：导航项与指示器先行淡出 + 白画布向右收拢回边缘 + 预览图与遮罩同步淡出
const onLeave = (el, done) => {
  const [backdrop, preview, panel] = el.children
  const navTexts = panel.querySelectorAll('.nav-item-text')
  const orderIndicator = panel.querySelector('.nav-order-indicator')
  gsap.killTweensOf([backdrop, preview, panel, ...navTexts, orderIndicator])

  const tl = gsap.timeline({ onComplete: done })
  tl.to([...navTexts, orderIndicator], {
    opacity: 0,
    duration: 0.45,
    ease: 'power2.out'
  }, 0)
  tl.to(panel, {
    clipPath: 'inset(0% 0% 0% 100%)',
    duration: 1.05,
    ease: 'power3.inOut'
  }, 0)
  tl.to(preview, {
    opacity: 0,
    x: 24,
    scale: 0.97,
    duration: 1.05,
    ease: 'power3.inOut'
  }, 0)
  tl.to(backdrop, {
    opacity: 0,
    duration: 1.05,
    ease: 'power3.inOut'
  }, 0)
}

const navItems = [
  {
    label: 'Home',
    image: '/images/hero/hero2.webp',
    words: ['Origin', 'Haven', 'Space']
  },
  {
    label: 'Book',
    image: '/images/hero/hero3.webp',
    words: ['Chapter', 'Margin', 'Trace']
  },
  {
    label: 'Picture',
    image: '/images/hero/hero4.webp',
    words: ['Canvas', 'Pixels', 'Breeze']
  },
  {
    label: 'About',
    image: '/images/hero/hero5.webp',
    words: ['Passions', 'Stories', 'Ideals']
  },
  {
    label: 'Contact',
    image: '/images/hero/hero6.webp',
    words: ['Letter', 'Voice', 'Hello']
  }
]

const activeIndex = ref(0)
const currentItem = computed(() => navItems[activeIndex.value])

</script>

<template>
  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-20 overflow-hidden"
    >
      <!-- 无色轻度磨砂玻璃遮罩 -->
      <div
        class="absolute inset-0 backdrop-blur-[5px] will-change-[opacity]"
      ></div>

      <!-- 左侧 500×500 图片预览组件 -->
      <NavImage
        :items="navItems"
        :active-index="activeIndex"
      />

      <!-- 原有的纯白画布（仅补充 ref 与右下角定位） -->
      <div
        class="absolute right-0 bottom-0 h-[calc(100vh-140px)] w-[calc(50vw+35px)] bg-white pt-[34px] pl-[40px] will-change-[clip-path]"
      >
       <!-- 静态导航项 -->
        <nav
          @mouseleave="activeIndex = 0"
          class="flex flex-col items-start gap-y-[10px]"
        >
          <span
            v-for="(item, index) in navItems"
            :key="item.label"
            class="block overflow-hidden pb-[0.14em] -mb-[0.14em]"
          >
            <span
              @mouseenter="activeIndex = index"
              :class="activeIndex === index ? 'text-[#8A6D67]' : 'text-[#D5D6D0]'"
              class="nav-item-text block font-['Google_Sans_Flex'] text-[96px] font-medium leading-none tracking-normal select-none cursor-pointer transition-colors duration-300 will-change-transform"
            >
              {{ item.label }}
            </span>
          </span>
        </nav>

        <!-- 进度指示器 -->
        <div class="nav-order-indicator mt-[92px] flex flex-col items-start select-none">
          <span class="font-['Google_Sans_Flex'] text-[24px] font-medium leading-none text-[#8A6D67]">
            Order
          </span>
          <div class="relative mt-[6px] flex items-center gap-x-[3px]">
            <!-- 5 个空心圆点轨道 -->
            <span
              v-for="n in 5"
              :key="n"
              class="h-[10px] w-[10px] rounded-full border border-[#8A6D67]"
            ></span>

            <!-- 水平平滑移动的实心指示圆点 -->
            <span
              :style="{ transform: `translateX(calc(${activeIndex} * (100% + 3px)))` }"
              class="pointer-events-none absolute left-0 top-0 h-[10px] w-[10px] rounded-full bg-[#8A6D67] transition-transform duration-300 ease-out"
            ></span>
          </div>
        </div>
        
      </div>
    </div>
  </Transition>
</template>