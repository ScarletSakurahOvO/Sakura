<script setup>

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;600;700&family=Montserrat:wght@400;500&display=swap'
    }
  ]
})
</script>

<template>
  <main class="w-full bg-[#F9F5EE]">
    <!-- 第一屏：Hero 区域 -->
    <section class="sticky top-0 h-screen w-full z-0 overflow-hidden">
      <!-- logo样式 -->
      <div class="absolute left-[60px] top-[60px]">
        <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none">
          Scarlet Sakura
        </p>
        <div class="mt-[8px] h-[2px] w-[33px] bg-black"></div>
        <p class="mt-[8px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-wide text-[#5E3D3B] select-none uppercase">
          ANIME
        </p>
      </div>

      <!-- 中间汉堡菜单 -->
      <button
        type="button"
        class="absolute left-1/2 top-[60px] -translate-x-1/2 flex items-center gap-x-[8px] font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none cursor-pointer hover:opacity-60 transition-opacity"
      >
        <span class="flex h-[11px] w-[16px] flex-col justify-between">
          <span class="h-[1px] w-full bg-black"></span>
          <span class="h-[1px] w-full bg-black"></span>
          <span class="h-[1px] w-full bg-black"></span>
        </span>
        <span>Menu</span>
      </button>

      <!-- 语言切换区域 -->
      <nav class="absolute right-[158px] top-[60px] flex items-center gap-x-[5px] font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none uppercase">
        <span class="cursor-pointer hover:opacity-60 transition-opacity">EN /</span>
        <span class="cursor-pointer hover:opacity-60 transition-opacity">CN /</span>
        <span class="cursor-pointer hover:opacity-60 transition-opacity">JA</span>
      </nav>

      <!-- 页面主标题区域 -->
      <div class="absolute left-[60px] top-[150px] flex flex-col items-start">
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
      <div class="absolute left-[60px] top-[490px] flex flex-col items-start">
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
        <div class="absolute inset-0 border border-[#906E6C] pointer-events-none z-0"></div>
        <div class="absolute left-[24px] top-[24px] h-[459px] w-[750px] overflow-hidden bg-neutral-100 shadow-sm z-10">
          <img
            src="/images/hero/hero.webp"
            alt="Hero Illustration"
            class="h-full w-full object-cover select-none"
          />
        </div>
      </div>

      <!-- 左下角标语文案 -->
      <p class="absolute left-[60px] bottom-[106px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
        为了没有眼泪的明天
      </p>

      <!-- 右下角图片信息与时间 -->
      <div class="absolute right-[158px] bottom-[106px] flex flex-col items-end font-['Montserrat'] text-[16px] font-normal leading-none tracking-normal text-[#5E3D3B] select-none uppercase">
        <p>FIG. 01 — YURU CAMP</p>
        <p class="mt-[8px]">00:02:25 CST</p>
      </div>

    </section>
  </main>
</template>