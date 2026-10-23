<template>
  <section 
    class="w-full h-screen box-border bg-[#E4DAD4] 
           fixed bottom-0 left-0 z-[-1]"
  >
    <!-- 顶部 Logo 与导航 -->
    <div 
      class="absolute top-[46vh] left-1/2 -translate-x-1/2 
             flex flex-col items-center text-center"
    >
      <p class="font-['Playfair_Display'] text-[48px] font-normal text-[#1a1a1a] m-0 leading-[1.2]">
        Sakura
      </p>
      <div class="flex gap-[32px] mt-[24px]">
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >Home</a>
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >Inner</a>
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >Reading</a>
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >Watching</a>
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >About</a>
        <a 
          href="#" 
          class="font-serif text-[16px] font-medium text-[#1a1a1a] no-underline 
                 transition-opacity duration-200 ease hover:opacity-60"
        >Contact</a>
      </div>
    </div>

    <!-- 中间邮箱 -->
    <p 
      class="absolute top-[72vh] left-1/2 -translate-x-1/2 
             font-['Playfair_Display'] text-[14px] font-semibold text-[#1a1a1a] m-0"
    >
      annausao802@gmail.com
    </p>

    <!-- 底部三列信息 -->
    <div 
      class="absolute bottom-[20px] left-[60px] right-[60px] w-auto 
             grid grid-cols-[1fr_auto_1fr] items-center font-serif text-[14px] text-[#1a1a1a]"
    >
      <p class="justify-self-start m-0">中国 广东 • 14:30 PM</p>
      <a 
        href="#" 
        class="justify-self-center text-[#1a1a1a] no-underline hover:opacity-60"
      >Github</a>
      <p class="justify-self-end m-0">
        灵感来源：<a 
          href="https://www.eugeniagrab.com" 
          target="_blank" 
          class="text-[#1a1a1a] underline hover:opacity-60"
        >https://www.eugeniagrab.com</a>
      </p>
    </div>
  </section>
</template>

<style>
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>