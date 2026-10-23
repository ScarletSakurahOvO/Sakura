<script setup>
// 引入箭头组件
import Arrow from './arrow2.vue';
</script>

<template>
  <section 
    class="w-full min-h-screen bg-[#F9F5EE] box-border 
           overflow-y-auto pb-[100px]"
  >
    <div class="w-full flex flex-col">
      <!-- 顶部页面标题区域 -->
      <div 
        class="flex items-center gap-[120px] 
               mt-[82px] pl-[60px] shrink-0"
      >
        <Arrow />
        <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0">
          about
        </p>
      </div>

      <!-- 中间整体内容区域（宽度 420px 并水平居中） -->
      <div class="flex flex-col items-center w-[420px] mx-auto mt-[40px] mb-0">
        <img 
          src="/images/about.webp" 
          alt="about" 
          class="w-[420px] h-auto block" 
        />
        <h2 class="font-['Playfair_Display'] text-[48px] font-normal text-black mt-[16px] mb-0 text-center">
          Sakura
        </h2>

        <!-- 第一区块：AI全栈开发 -->
        <div 
          class="grid grid-cols-[auto_1fr] gap-x-[30px] 
                 self-start w-[560px] mt-[70px]"
        >
          <div class="col-start-1 row-start-1 flex items-center">
            <Arrow />
          </div>
          <h3 
            class="col-start-2 row-start-1 font-['Playfair_Display'] 
                   text-[20px] font-normal text-black m-0 self-center"
          >
            AI全栈开发
          </h3>
          <div class="col-start-2 row-start-2 mt-[24px] flex flex-col gap-[20px]">
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              融合认知心理学与现代 Web 交互，降低访客信息获取成本，打造极简顺畅的视觉体验。
            </p>
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              借助色彩心理学与细腻微交互，在数字化交互中注入人文温度，建立深层信任与情感共鸣。
            </p>
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              以 AI 全栈开发能力为技术底座，将复杂的内容与数据流转化为直观、高效的智能化落地产品。
            </p>
          </div>
        </div>

        <!-- 第二区块：我的爱好 -->
        <div 
          class="grid grid-cols-[auto_1fr] gap-x-[30px] 
                 self-start w-[560px] mt-[70px]"
        >
          <div class="col-start-1 row-start-1 flex items-center">
            <Arrow />
          </div>
          <h3 
            class="col-start-2 row-start-1 font-['Playfair_Display'] 
                   text-[20px] font-normal text-black m-0 self-center"
          >
            我的爱好
          </h3>
          <div class="col-start-2 row-start-2 mt-[24px] flex flex-col gap-[20px]">
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              日常状态是快乐宅家追番——遇到好剧的话，你要和我一起看吗？
            </p>
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              游戏时间基本献给了米哈游的《原神》，算是个资深旅行者。
            </p>
            <p class="text-[14px] leading-[1.8] text-[#2c2c2c] m-0 text-left">
              看出来了对吧？我是个重度二次元！所以顺理成章地，我也非常喜欢动画
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