<template>
  <!-- 整体容器 -->
  <section class="w-full h-screen bg-[#FEFBFB] overflow-hidden relative">
    
    <!-- 第 01 页内容 -->
    <div class="relative w-full h-full flex flex-col overflow-hidden">
      
      <!-- 顶部标题区域（已移除 Arrow 组件） -->
      <div class="flex items-center mt-[82px] pl-[60px] shrink-0 z-10">
        <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0">
          What I have learned
        </p>
      </div>

      <!-- 中部图文区域 -->
      <div class="absolute top-1/2 left-[150px] -translate-y-1/2 flex items-stretch gap-[60px]">
        <div class="w-[36.67vw] aspect-[16/9] shrink-0">
          <img 
            src="/images/study.webp" 
            alt="study" 
            class="w-full h-full object-cover block"
          />
        </div>

        <div class="relative flex flex-col justify-between">
          <span 
            class="absolute -left-[35px] bottom-0 translate-y-[4%] 
                   font-['Playfair_Display_SC'] text-[600px] font-normal 
                   text-white leading-none select-none pointer-events-none z-0"
          >
            01
          </span>
          <p class="relative z-10 font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
            应对焦虑
          </p>
          <div class="relative z-10 flex flex-col">
            <p class="font-['Playfair_Display'] text-[20px] font-normal text-black leading-[1.6] m-0">
              一个有趣的悖论是：当我真正接受自己的现状时改变就发生了
            </p>
            <p class="font-['Playfair_Display'] text-[20px] italic text-[#9B7D7B] m-0 mt-[16px]">
              —— Carl Rogers
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>