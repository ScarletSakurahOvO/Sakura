<script setup>
import Picture from '~/components/picture/Picture.vue'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;600;700&display=swap'
    }
  ]
})
</script>

<template>
  <main class="w-full bg-[#FFFFFF]">
    <!-- 第一屏：Hero 区域（使用 relative min-h-screen 撑满并独立首屏空间） -->
    <section class="sticky top-0 h-screen w-full z-0 overflow-hidden">
      <!-- logo样式 -->
      <div class="absolute left-[60px] top-[60px]">
        <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none">
          Scarlet Sakura
        </p>

        <!-- logo线条，长度为一个“Scar” -->
        <div class="mt-[8px] h-[2px] w-[33px] bg-black"></div>

        <!-- 副logo标题 -->
        <p class="mt-[8px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-wide text-[#5E3D3B] select-none uppercase">
          ANIME
        </p>
      </div>

      <!-- 导航栏区域 -->
      <nav class="absolute right-[158px] top-[60px] flex items-center gap-x-[20px]">
        <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none uppercase cursor-pointer">
          ABOUT
        </p>

        <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none uppercase cursor-pointer">
          STUDY
        </p>

        <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none uppercase cursor-pointer">
          MUSIC
        </p>
      </nav>

      <!-- 页面主标题区域 -->
      <div class="absolute left-[276px] top-[150px] flex flex-col items-start">
        <p class="font-['Cormorant_Upright'] text-[96px] font-normal leading-none tracking-normal text-black select-none">
          ScarletSa
        </p>

        <p class="ml-[4px] font-['Cormorant_Upright'] text-[96px] font-normal leading-none tracking-normal text-black select-none">
          kura
        </p>

        <p class="mt-[10px] ml-[8px] font-['Cormorant_Upright'] text-[15px] font-normal leading-none tracking-wider text-[#5E3D3B] select-none uppercase">
          A N I M E
        </p>
      </div>

      <!-- 介绍文区域 -->
      <div class="absolute left-[284px] top-[490px] flex flex-col items-start">
        <p class="font-['Cormorant_Upright'] text-[15px] font-normal leading-none tracking-wider text-[#5E3D3B] select-none uppercase">
          ABOUT WEBSITE
        </p>

        <p class="mt-[10px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
          通过吸收不同的网页设计与排版和利用AI的协作
        </p>

        <p class="mt-[10px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
          从热爱的动漫一路延伸到琐碎的生活日常
        </p>

        <p class="mt-[10px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
          构建一个属于自己的表达空间
        </p>

        <p class="mt-[10px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
          只按自己的步调，慢慢认真地往前走
        </p>
      </div>

      <!-- 右侧主视觉插画与错位线框区域 -->
      <div class="absolute right-[158px] top-[150px] h-[459px] w-[750px]">
        <!-- 1. 底层基准装饰线框（750x459px，对齐左侧标题与介绍文） -->
        <div class="absolute inset-0 border border-[#906E6C] pointer-events-none z-0"></div>

        <!-- 2. 上层错位图片（750x459px，向右下等距错位 24px，左/顶间距完全一致） -->
        <div class="absolute left-[24px] top-[24px] h-[459px] w-[750px] overflow-hidden bg-neutral-100 shadow-sm z-10">
          <img
            src="/images/hero.webp"
            alt="Hero Illustration"
            class="h-full w-full object-cover select-none"
          />
        </div>
      </div>
    </section>

    <!-- 第二屏：Picture 模块（独立排布在第一屏下方） -->
    <Picture />
  </main>
</template>