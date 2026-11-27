<script setup lang="ts">
import { afterHoursImages } from '@/data/after'
</script>

<template>
  <!-- 高度由 1330px 收紧至 1270px，减少底部多余留白 -->
  <section class="relative w-full min-w-[1440px] h-[1363px] bg-[#F3F3F2] text-[#141414]">
    <!-- 1. 右上双图组：总高 410px，top-[145px] 使底边（494px）距标题（554px）严格为 60px -->
    <div class="absolute top-[145px] right-[96px] w-[610px]">
      <!-- 主图（左上） -->
      <figure class="relative z-10 w-[492px] h-[267px] overflow-hidden bg-[#E5E5E3]">
        <img
          :src="afterHoursImages.topPrimary.src"
          :alt="afterHoursImages.topPrimary.alt"
          class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </figure>

      <!-- 辅图（右下交叠） -->
      <figure
        class="relative z-20 ml-auto -mt-[64px] w-[310px] h-[207px] overflow-hidden bg-[#DCDCD9]"
      >
        <img
          :src="afterHoursImages.topSecondary.src"
          :alt="afterHoursImages.topSecondary.alt"
          class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </figure>
    </div>

    <!-- 2. 中央大字号标题 -->
    <div class="absolute top-[554px] left-1/2 -translate-x-1/2 whitespace-nowrap">
      <p
        class="text-center text-[160px] leading-none tracking-[-0.02em] text-[#111111] select-none"
      >
        <!-- After：单独使用 Cormorant Upright -->
        <span class="font-['Cormorant_Upright',serif] font-medium text-[1.06em] mr-[0.18em]">
          <span>After</span>
        </span>

        <!-- Hours：单独使用 Google Sans Flex -->
        <span class="font-['Google_Sans_Flex',sans-serif] font-light">
          <span>Hours</span>
        </span>
      </p>
    </div>

    <!-- 3. 左下双图组 -->
    <div class="absolute top-[794px] left-[60px] w-[610px]">
      <!-- 主图（左上） -->
      <figure class="relative z-20 w-[456px] h-[284px] overflow-hidden bg-[#E5E5E3]">
        <img
          :src="afterHoursImages.bottomPrimary.src"
          :alt="afterHoursImages.bottomPrimary.alt"
          class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </figure>

      <!-- 辅图（右下交叠） -->
      <figure
        class="relative z-10 ml-auto -mt-[56px] w-[316px] h-[196px] overflow-hidden bg-[#DCDCD9]"
      >
        <img
          :src="afterHoursImages.bottomSecondary.src"
          :alt="afterHoursImages.bottomSecondary.alt"
          class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </figure>
    </div>

    <!-- 4. 右下随笔文案 -->
    <div class="absolute top-[734px] right-[96px] w-[610px]">
      <p class="font-['Cormorant_Upright','PingFang_SC','Noto_Sans_SC',serif] text-[16px] tracking-[0.04em] text-[#1C1C1C] font-medium">
        <span class="block">在学业之外的时间</span>
        <span class="block">我都会在 kazumi 或者是 bilibili 上</span>
        <span class="block">去追我喜欢的番，看看故事里的人物和我们过着哪些不一样的生活</span>
      </p>
    </div>
  </section>
</template>