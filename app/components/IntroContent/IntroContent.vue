<script setup>
import Arrow from './arrow.vue'
</script>

<template>
  <!-- 整体容器：mb-[80vh] 让 foot 页面展现 80%，content 覆盖其顶部 20% -->
  <section class="w-full h-screen bg-[#F7F4EE] overflow-hidden relative z-[2] mb-[80vh] grid grid-rows-[auto_1fr_auto]">
    
    <!-- 顶部标题区域：箭头置于标题左侧 -->
    <header class="pt-[60px] pl-[60px] md:pl-[80px] z-10 flex items-center gap-[24px]">
      <Arrow />
      <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0 tracking-wide">
        What I have learned
      </p>
    </header>

    <!-- 中部图文核心区域：Grid 垂直居中 -->
    <main class="grid items-center px-[60px] md:px-[80px] lg:px-[120px] 2xl:px-[150px]">
      <!-- 左右双列 Grid：列高由 16:9 图片决定，两列轨道天然等高 -->
      <div class="grid grid-cols-[auto_1fr] items-stretch gap-[50px] lg:gap-[70px] xl:gap-[90px] w-full max-w-[1650px]">
        
        <!-- 左侧图片列（16:9 固定比例） -->
        <div class="w-[42vw] max-w-[760px] aspect-[16/9] overflow-hidden">
          <img 
            src="/images/study.webp" 
            alt="study" 
            class="w-full h-full object-cover block"
          />
        </div>

        <!-- 右侧文字列：Grid 双行两端对齐，高度锁定且受 padding 保护不超界 -->
        <div class="grid grid-rows-[auto_auto] content-between h-full py-[12px] xl:py-[18px]">
          
          <!-- 上半部分：数字与标题（向上微移对齐顶部边界） -->
          <div class="grid gap-[16px]">
            <!-- 序号：100px Montserrat -->
            <p class="font-['Montserrat'] text-[100px] font-light text-[#DED9D0] leading-none select-none tracking-tight m-0">
              01
            </p>
            <!-- 标题：40px Playfair Display -->
            <p class="font-['Playfair_Display'] text-[40px] font-normal text-[#1a1a1a] leading-tight m-0">
              应对焦虑
            </p>
          </div>

          <!-- 下半部分：名句与作者（向下微移对齐底部边界） -->
          <div class="grid gap-[16px]">
            <!-- 名句：20px Playfair Display -->
            <p class="font-['Playfair_Display'] text-[20px] font-normal text-[#222222] leading-[1.6] m-0">
              一个有趣的悖论是：当我真正接受自己的现状时改变就发生了
            </p>
            
            <!-- 作者及装饰分割线：20px Playfair Display -->
            <div class="grid grid-flow-col auto-cols-max items-center gap-3">
              <span class="w-[48px] h-[1px] bg-[#9B7D7B] inline-block"></span>
              <p class="font-['Playfair_Display'] text-[20px] font-normal text-[#9B7D7B] tracking-wide m-0">
                Carl Rogers
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>

    <!-- 底部占位保持上下对称平衡 -->
    <footer class="h-[60px] pointer-events-none"></footer>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>