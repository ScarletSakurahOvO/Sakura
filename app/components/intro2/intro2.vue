<script setup>
import Arrow2 from './arrow_2.vue';
</script>

<template>
  <section 
    class="relative z-[2] w-full min-h-screen 
           bg-[#FEFBFB] flex flex-col box-border"
  >
    <div class="w-full h-full mt-0 flex flex-col">
      <!-- 顶部标题与箭头 -->
      <div 
        class="flex items-center gap-[120px] 
               mt-[82px] pl-[60px] shrink-0"
      >
        <!-- 引入横向箭头组件 -->
        <Arrow2 />

        <!-- 箭头指向文字 -->
        <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0">
          What I have learned
        </p>
      </div>

      <!-- 图片与右侧文字共同容器 -->
      <div 
        class="absolute top-1/2 left-[60px] -translate-y-1/2 
               flex items-stretch gap-[60px]"
      >
        <!-- 左侧图片部分 -->
        <div class="w-[36.67vw] aspect-[16/9] shrink-0">
          <img 
            src="/images/study.webp" 
            alt="study" 
            class="w-full h-full object-cover block"
          />
        </div>

        <!-- 右侧文字部分 -->
        <div class="flex flex-col justify-between">
          <!-- 顶部标题 -->
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
            应对焦虑
          </p>
          
          <!-- 底部名言与作者包裹整体 -->
          <div class="flex flex-col">
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
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>