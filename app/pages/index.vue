<script setup lang="ts">
// 页面逻辑与动效后续按步骤添加
</script>

<template>
  <!-- 首屏 Hero 区域：固定一屏高度，图片自适应全屏覆盖 -->
  <section class="relative w-full h-screen overflow-hidden bg-[#F7F4EE]">
    <!-- 铺满全屏的主图 -->
    <img 
      src="/images/hero.avif" 
      alt="Sky and cat" 
      class="w-full h-full object-cover object-center select-none pointer-events-none"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />

    <!-- 顶部导航栏 -->
    <header class="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 md:px-8 py-6 select-none">
      <span class="text-[48px] font-['Montserrat'] font-light text-white tracking-wide leading-none">
        SAKURA
      </span>

      <button class="text-[48px] font-['Montserrat'] font-light text-white tracking-wide leading-none cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-0 p-0">
        meun
      </button>
    </header>

    <!-- 主标题区域：第一行顶部精准对齐导航底边线 -->
    <div class="absolute top-[72px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center select-none pointer-events-none">
      <p class="m-0 text-[64px] font-['Montserrat'] font-light text-white tracking-[0.08em] leading-[1.15]">
        SKY
      </p>
      <p class="m-0 text-[64px] font-['Montserrat'] font-light text-white tracking-[0.08em] leading-[1.15]">
        KNOWING
      </p>
      <!-- 第三行：Moon Dance 极细手写体 ALL -->
      <p class="m-0 text-[64px] font-['Moon_Dance',cursive] text-white tracking-[0.05em] leading-[1.1]">
        ALL
      </p>
    </div>
  </section>

  <!-- 页面后续正文内容区域 -->
  <main class="w-full relative">
    <About />
    <IntroQuote />
    <Books />
    <IntroContent />
    <Foot />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Moon+Dance&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>