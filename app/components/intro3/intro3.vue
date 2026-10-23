<script setup>
import Arrow from './arrow.vue';
</script>

<template>
  <section 
    class="relative w-full min-h-[calc(100vh+140px)] h-auto 
           bg-[#F9F5EE] flex flex-col box-border"
  >
    <!-- 主容器 -->
    <div 
      class="w-full flex-1 mt-0 
             grid grid-cols-[60px_auto_120px_auto_1fr] box-border"
  >
      <!-- 标题与箭头区域 -->
      <div class="col-start-2 col-end-5 flex items-center gap-[120px] mt-[72px] shrink-0">
        <!-- 引入箭头 -->
        <Arrow />
        <!-- 箭头指向文字 -->
        <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0">
          What I'm looking for
        </p>
      </div>

      <!-- 下半部分内容的主体区域 -->
      <div class="col-start-4 mt-[85px] mb-[30px] relative">
        <!-- 竖线 -->
        <div class="w-[1px] h-[435px] bg-[#5E3D3B]"></div>

        <!-- 右侧文本内容区域 -->
        <div class="absolute top-0 left-[40px] w-[600px] flex flex-col gap-[28px]">
          <h2 class="font-['Playfair_Display'] text-[48px] font-normal text-[#5E3D3B] m-0 mb-[8px]">
            更好地理解自己
          </h2>
          
          <p class="font-['Playfair_Display'] text-[16px] text-[#1a1a1a] leading-[1.6] m-0">
            发掘自身优势的同时，也认清自己的短板
          </p>
          
          <p class="font-['Playfair_Display'] text-[16px] text-[#1a1a1a] leading-[1.6] m-0">
            做好我自己的网站，向大家更好地展示我自己
          </p>
          
          <p class="font-['Playfair_Display'] text-[16px] text-[#1a1a1a] leading-[1.6] m-0">
            将心理学融入我的个人网站，把它作为一种“隐形工具”来设计结构<br>
            和用户体验。
          </p>
          
          <p class="font-['Playfair_Display'] text-[16px] text-[#1a1a1a] leading-[1.6] m-0">
            我想利用认知心理学来优化视觉层级和留白，从而减轻访问者在浏览<br>
            和阅读时的认知负荷
          </p>
          
          <p class="font-['Playfair_Display'] text-[16px] text-[#1a1a1a] leading-[1.6] m-0">
            通过利用色彩心理学和精妙的微交互，我希望引起情感共鸣并提供掌控感<br>
            同时，应用行为学能让我简化用户路径并建立信任感
          </p>
        </div>
      </div>

      <!-- 技术栈整体包裹容器 -->
      <div class="col-start-2 col-end-6 flex flex-col mt-auto mb-[30px] box-border">
        <!-- 第一行技术栈展示区 -->
        <div class="grid grid-cols-4 gap-[40px] mb-[30px] box-border">
          <!-- Nuxt3 项 -->
          <div class="relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">N</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">nuxt3</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">一个很好的前端框架</div>
              </div>
            </div>
          </div>

          <!-- Vue 项 -->
          <div class="relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">V</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">vue</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">我最喜欢的html框架</div>
              </div>
            </div>
          </div>

          <!-- CSS 项 -->
          <div class="relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">C</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">css</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">每个网站都离不开的样式</div>
              </div>
            </div>
          </div>

          <!-- TypeScript 项 -->
          <div class="relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">T</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">TypeScript</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">vue最好的搭档</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二行技术栈展示区（精准错位在间隙中） -->
        <div class="grid grid-cols-7 gap-0 mt-[20px] box-border">
          <!-- Node.js 项 -->
          <div class="col-start-2 relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">N</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">node.js</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">挺简单的一个后端语言</div>
              </div>
            </div>
          </div>

          <!-- GSAP 项 -->
          <div class="col-start-4 relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">G</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">gsap</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">这是一个很好的动画库</div>
              </div>
            </div>
          </div>

          <!-- Lenis 项 -->
          <div class="col-start-6 relative flex flex-col gap-[8px]">
            <div class="font-['Playfair_Display'] text-[48px] font-normal text-[#E6DFDA] leading-none">L</div>
            <div class="flex items-stretch h-[45px] gap-[16px]">
              <div class="w-[1px] h-full bg-[#E6DFDA] shrink-0"></div>
              <div class="flex flex-col justify-between h-full">
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#5E3D3B] m-0 leading-none">lenis</div>
                <div class="font-['Playfair_Display'] text-[16px] font-normal text-[#1a1a1a] m-0 leading-none whitespace-nowrap">网页滑动如德芙般丝滑</div>
              </div>
            </div>
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