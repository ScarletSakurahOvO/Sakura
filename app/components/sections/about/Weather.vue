<script setup lang="ts">
</script>

<template>
  <section
    class="w-full min-w-[1440px] min-h-screen bg-[#F7F3EB] text-[#141414] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] pt-[180px] pb-[140px]"
  >
    <!-- 1. 顶部标题行：与下方 1024px 线框右边缘对齐，小字在主标题左侧 -->
    <div class="w-[1024px] ml-[60px] flex items-baseline justify-end">
      <span class="mr-[8px] text-[13px] font-medium text-[#1C1C1C]">
        <span>(我所期待的)</span>
      </span>
      <h2 class="text-[64px] font-normal leading-none tracking-[-0.02em] text-[#111111]">
        <span>
          <span>Development</span>
        </span>
      </h2>
    </div>

    <!-- 2. 中间主区域：左侧 1024x410 线框（左边缘 ml-[158px] 对齐 Logo）+ 右侧插画 -->
    <div class="mt-[44px] ml-[60px] flex items-start">
      <!-- 天气折线图主线框：沿用音乐卡片的 1024x410 尺寸与 44px 内边距 -->
      <div
        class="w-[1024px] h-[410px] shrink-0 border-2 border-[#8A6D67] p-[44px] flex items-center justify-center"
      >
        <!-- 内部折线图占位容器（后续接入真实天气折线图组件时直接替换此 div） -->
        <div class="w-full h-full bg-[#D5D7DA] flex items-center justify-center">
          <span class="text-[48px] font-normal tracking-[0.02em] text-[#111111] select-none">
            接口天气折线图
          </span>
        </div>
      </div>

      <!-- 右侧装饰文案与 weather.webp 透明插画（顶部与主线框上边框齐平） -->
      <div class="flex-1 pr-[60px] flex flex-col items-center justify-center select-none">
        <p class="text-[16px] font-medium tracking-[0.02em] text-[#5A3E36]">
          (就喜欢研究点天气) ovo
        </p>
        <img
          src="/images/about/weather.webp"
          alt="weather"
          class="mt-[10px] w-[220px] h-auto object-contain"
        />
      </div>
    </div>

    <!-- 3. 卡片下方极简随笔说明：与 1024px 线框右边缘对齐 -->
    <p
      class="mt-[22px] w-[1024px] ml-[60px] text-right text-[16px] text-[#1C1C1C] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] font-medium"
    >
      <span>
        <span class="block">正在把当下的每一次尝试，慢慢沉淀为通往未来的底气</span>
      </span>
      <span>
        <span class="block">不急于一时抵达终点，只希望明天的自己，比今天更接近理想中的模样</span>
      </span>
    </p>
  </section>
</template>