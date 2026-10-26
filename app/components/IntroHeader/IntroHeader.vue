<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Arrow from './arrow.vue'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const containerRef = ref<HTMLElement | null>(null)
const line1Text = '这是我第一次将心理学风格融入我的网站'
const line2Text = '关于我对周围环境的理解'

let ctx: gsap.Context | null = null

onMounted(() => {
  const trigger = containerRef.value
  if (!trigger) return

  ctx = gsap.context(() => {
    const charsLine1 = trigger.querySelectorAll('.char-line-1')
    const charsLine2 = trigger.querySelectorAll('.char-line-2')
    const body1 = trigger.querySelector('.body-1')
    const body23 = trigger.querySelectorAll('.body-2-3')
    
    const arrowLines = trigger.querySelectorAll('.arrow-line')
    const arrowHeads = trigger.querySelectorAll('.arrow-head')

    // 1. 标题动画：保持原来的触发逻辑（露出 50% 时播放，往上滚时 3 倍速回收）
    const tween1 = gsap.fromTo(
      charsLine1,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power2.out',
        paused: true,
        overwrite: 'auto',
      }
    )

    const tween2 = gsap.fromTo(
      charsLine2,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.04,
        ease: 'power2.out',
        paused: true,
        overwrite: 'auto',
      }
    )

    ScrollTrigger.create({
      trigger: trigger,
      start: 'top 50%',
      onEnter: () => {
        tween1.timeScale(1).play()
        tween2.timeScale(1).play()
      },
      onLeaveBack: () => {
        tween1.timeScale(3).reverse()
        tween2.timeScale(3).reverse()
      },
    })

    // 2. 正文与箭头描边动画（通过增大 duration，让滑动显示的过渡变得非常慢、非常细腻）
    const scrollTl = gsap.timeline({
      defaults: { ease: 'power2.out', overwrite: 'auto' },
      scrollTrigger: {
        trigger: trigger,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true, 
      },
    })

    // 第一句正文：将 duration 调大至 2.5，让它随着滚动极其缓慢地淡入
    if (body1) {
      scrollTl.fromTo(
        body1,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 },
        '+=0.1'
      )
    }

    // 第一个箭头（画线过程变慢）
    if (arrowLines[0] && arrowHeads[0]) {
      scrollTl.fromTo(
        arrowLines[0],
        { strokeDasharray: 142, strokeDashoffset: 142 },
        { strokeDashoffset: 0, duration: 2.5 },
        '+=0.2'
      )
      scrollTl.fromTo(
        arrowHeads[0],
        { strokeDasharray: 20, strokeDashoffset: 20 },
        { strokeDashoffset: 0, duration: 1.0 },
        '-=0.5'
      )
    }

    // 第二、三句正文：大幅增加 duration 和 stagger，让它们错落有致地缓慢显现
    if (body23.length) {
      scrollTl.fromTo(
        body23,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5, stagger: 0.6 },
        '+=0.2'
      )
    }

    // 第二个箭头（画线过程变慢）
    if (arrowLines[1] && arrowHeads[1]) {
      scrollTl.fromTo(
        arrowLines[1],
        { strokeDasharray: 142, strokeDashoffset: 142 },
        { strokeDashoffset: 0, duration: 2.5 },
        '+=0.2'
      )
      scrollTl.fromTo(
        arrowHeads[1],
        { strokeDasharray: 20, strokeDashoffset: 20 },
        { strokeDashoffset: 0, duration: 1.0 },
        '-=0.5'
      )
    }
  }, trigger)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section 
    ref="containerRef"
    class="w-full h-screen bg-[#F9F5EE] 
           flex flex-col justify-center items-center box-border select-none"
  >
    <!-- 第一行文字（独立字符遮罩结构） -->
    <div class="text-center">
      <h2 class="text-[36px] text-black font-['Playfair_Display'] m-0 flex justify-center flex-wrap">
        <span 
          v-for="(char, index) in line1Text" 
          :key="'line1-' + index"
          class="inline-block overflow-hidden py-1"
        >
          <span class="char-line-1 inline-block will-change-transform">
            {{ char }}
          </span>
        </span>
      </h2>
    </div>

    <!-- 第二行文字（独立字符遮罩结构） -->
    <div class="text-center mt-[20px]">
      <h2 class="text-[36px] text-[#8C7472] font-['Playfair_Display'] m-0 flex justify-center flex-wrap">
        <span 
          v-for="(char, index) in line2Text" 
          :key="'line2-' + index"
          class="inline-block overflow-hidden py-1"
        >
          <span class="char-line-2 inline-block will-change-transform">
            {{ char }}
          </span>
        </span>
      </h2>
    </div>

    <!-- 第一句正文 -->
    <div class="text-center mt-[20px]">
      <p class="body-1 text-[14px] text-black font-['Playfair_Display'] will-change-[transform,opacity,filter]">
        关于我的情绪、人际关系和生活方式
      </p>
    </div>

    <!-- 第一个箭头组件 -->
    <Arrow />

    <!-- 第二句正文 -->
    <div class="text-center mt-[60px]">
      <p class="body-2-3 text-[14px] text-black font-['Playfair_Display'] will-change-[transform,opacity,filter]">
        我经常需要应对焦虑、迷茫或人生的过渡阶段
      </p>
    </div>

    <!-- 第三句正文 -->
    <div class="text-center mt-[20px]">
      <p class="body-2-3 text-[14px] text-black font-['Playfair_Display'] will-change-[transform,opacity,filter]">
        学习心理学不仅增强了我的自我意识，也助力了我的个人成长
      </p>
    </div>

    <!-- 第二个箭头组件 -->
    <Arrow />
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>