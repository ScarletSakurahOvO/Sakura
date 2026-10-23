<template>
  <section 
    class="w-full min-h-screen bg-[#F9F5EE] box-border 
           px-[80px] pt-[80px] pb-[40px] overflow-x-hidden"
  >
    <div class="w-full flex flex-col">
      <!-- 页面顶部大标题 -->
      <p 
        class="font-['Playfair_Display'] text-[96px] font-normal text-black 
               m-0 mb-[50px] leading-[1.1] whitespace-nowrap"
      >
        Currently Reading
      </p>

      <!-- 书籍列表区域 -->
      <div class="flex flex-col w-full">
        <!-- 书籍条目 1 -->
        <div class="flex justify-between items-center border-t border-[#2c2c2c] py-[45px] px-0 last:border-b last:border-[#2c2c2c]">
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black m-0 shrink-0">
            《思考，快与慢》
          </p>
          <p class="text-[14px] leading-[1.6] text-[#2c2c2c] m-0 max-w-[480px] text-left">
            诺贝尔经济学奖得主丹尼尔·卡尼曼的经典之作，深度剖析人类大脑的“直觉快思考”与“理性慢思考”，帮助我们识别认知偏见、做出更明智的决策。
          </p>
        </div>

        <!-- 书籍条目 2 -->
        <div class="flex justify-between items-center border-t border-[#2c2c2c] py-[45px] px-0 last:border-b last:border-[#2c2c2c]">
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black m-0 shrink-0">
            《活出生命的意义》
          </p>
          <p class="text-[14px] leading-[1.6] text-[#2c2c2c] m-0 max-w-[480px] text-left">
            心理学家维克多·弗兰克尔基于集中营经历所著，讲述如何在极其绝望的境遇中寻找意义与力量，是一本关于坚韧与自我救赎的心灵圣经。
          </p>
        </div>

        <!-- 书籍条目 3 -->
        <div class="flex justify-between items-center border-t border-[#2c2c2c] py-[45px] px-0 last:border-b last:border-[#2c2c2c]">
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black m-0 shrink-0">
            《被讨厌的勇气》
          </p>
          <p class="text-[14px] leading-[1.6] text-[#2c2c2c] m-0 max-w-[480px] text-left">
            以对话形式诠释阿德勒个体内心理学，提出了“课题分离”与自我接纳的概念，颠覆传统思维，赋予人们甩掉心理包袱、勇敢做自己的自由。
          </p>
        </div>

        <!-- 书籍条目 4 -->
        <div class="flex justify-between items-center border-t border-[#2c2c2c] py-[45px] px-0 last:border-b last:border-[#2c2c2c]">
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black m-0 shrink-0">
            《蛤蟆先生去看心理医生》
          </p>
          <p class="text-[14px] leading-[1.6] text-[#2c2c2c] m-0 max-w-[480px] text-left">
            借由童话角色的心理咨询之旅，通俗易懂地讲解交流分析心理学，引导读者探索自我情绪的来源，学会接纳自己并达成心理上的独立与成长。
          </p>
        </div>

        <!-- 书籍条目 5 -->
        <div class="flex justify-between items-center border-t border-[#2c2c2c] py-[45px] px-0 last:border-b last:border-[#2c2c2c]">
          <p class="font-['Playfair_Display'] text-[40px] font-normal text-black m-0 shrink-0">
            《影响力》
          </p>
          <p class="text-[14px] leading-[1.6] text-[#2c2c2c] m-0 max-w-[480px] text-left">
            社会心理学名著，揭示了互惠、承诺、社会认同等顺从心理背后的核心机制，不仅能帮助我们防范商业说服套路，也能提升自身沟通与说服力。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>