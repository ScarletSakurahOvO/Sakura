<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 在客户端环境注册 GSAP 插件
if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// DOM 引用定义
const heroSectionRef = ref<HTMLElement | null>(null)
const title1Ref = ref<HTMLElement | null>(null)
const title2Ref = ref<HTMLElement | null>(null)
const subTitle1Ref = ref<HTMLElement | null>(null)
const subTitle2Ref = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const trigger = heroSectionRef.value
  if (!trigger) return

  ctx = gsap.context(() => {
    // 1. 第一行大标题 (向右位移 100px)
    if (title1Ref.value) {
      gsap.to(title1Ref.value, {
        x: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 2. 左侧子标题 "它不语，但包罗万象" (保持向左，速度调低至 -50px)
    if (subTitle1Ref.value) {
      gsap.to(subTitle1Ref.value, {
        x: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 3. 第二行大标题 (向左位移 -100px)
    if (title2Ref.value) {
      gsap.to(title2Ref.value, {
        x: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 4. 右侧子标题 "天空是否知晓一切" (保持向右，速度调低至 50px)
    if (subTitle2Ref.value) {
      gsap.to(subTitle2Ref.value, {
        x: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, trigger)
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <section 
    ref="heroSectionRef"
    class="w-full min-h-screen bg-[#F9F5EE] 
           pt-[90px] px-[60px] pb-[40px] 
           flex flex-col justify-between box-border overflow-hidden
           select-none cursor-default"
  >
    <!-- 导航栏 -->
    <nav 
      class="fixed top-0 left-0 right-0 w-full z-[1000] 
             flex justify-between items-center 
             bg-transparent backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] 
             px-[60px] py-[15px] box-border"
    >
      <div class="text-[36px] font-['Playfair_Display'] text-[#1a1a1a] font-normal">
        Sakura
      </div>
      <ul class="list-none flex gap-[40px] m-0 p-0">
        <li>
          <a href="#" class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] transition-opacity duration-200 ease hover:opacity-60 cursor-pointer">Intro</a>
        </li>
        <li>
          <a href="#" class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] transition-opacity duration-200 ease hover:opacity-60 cursor-pointer">about</a>
        </li>
        <li>
          <a href="#" class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] transition-opacity duration-200 ease hover:opacity-60 cursor-pointer">Currently Reading</a>
        </li>
        <li>
          <a href="#" class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] transition-opacity duration-200 ease hover:opacity-60 cursor-pointer">Currently Watching</a>
        </li>
        <li>
          <a href="#" class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] transition-opacity duration-200 ease hover:opacity-60 cursor-pointer">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- 主标题区域 -->
    <div class="grid grid-cols-[180px_1fr] my-auto pb-[40px] w-full box-border">
      <!-- 第一行区域 -->
      <div class="col-start-2 row-start-1 relative">
        <p 
          ref="title1Ref"
          class="font-['Playfair_Display_SC'] text-[80px] font-normal text-[#1a1a1a] tracking-[1px] m-0 flex items-baseline inline-block whitespace-nowrap will-change-transform"
        >
          SKY ALL-KNOWING
          <span class="font-['Playfair_Display'] text-[20px] font-normal text-[#1a1a1a] ml-[8px] relative top-[-38px]">?</span>
        </p>
      </div>

      <!-- 第二行区域 -->
      <div class="col-start-2 row-start-2 relative mt-[-30px]">
        <!-- 左侧子标题 -->
        <p 
          ref="subTitle1Ref"
          class="absolute left-0 top-[60px] text-[20px] font-serif text-[#1a1a1a] m-0 whitespace-nowrap z-[2] inline-block will-change-transform"
        >
          它不语，但包罗万象
        </p>
        
        <div class="relative ml-[250px] inline-block">
          <!-- 右侧子标题 -->
          <p 
            ref="subTitle2Ref"
            class="absolute right-0 top-[-60px] text-[20px] font-serif text-[#1a1a1a] m-0 whitespace-nowrap z-[2] inline-block will-change-transform"
          >
            天空是否知晓一切
          </p>
          
          <p 
            ref="title2Ref"
            class="font-['Playfair_Display_SC'] text-[80px] font-normal text-[#5E3D3B] tracking-[1px] m-0 whitespace-nowrap inline-block will-change-transform"
          >
            SILENT YET HOLDING ALL
          </p>
          
          <div class="relative left-[68px] mt-[22px] whitespace-nowrap">
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              Sometimes We all need the courage to face life.
            </p>
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              It takes a gentle heart to carry the weight of hard times
            </p>
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              No matter how slow your progress is, you are still moving forward
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class="w-full relative">
    <IntroHeader />
    <IntroContent />
    <IntroQuote />
    <About />
    <Books />
    <Anime />
    <Contact />
    <Foot />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>