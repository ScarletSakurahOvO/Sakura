<!-- app/pages/index.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { heroData } from '~/data/home'

const frameRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

// 挂载首页主视觉与后方线框的 2D 鼠标视差动画
useHomeAnim(cardRef, frameRef)
</script>

<template>
  <main class="w-full bg-[#F9F5EE]">
    <!-- 第一屏：Hero 区域 -->
    <section class="sticky top-0 h-screen w-full z-0 overflow-hidden">
      <!-- 页面主标题区域 -->
      <div class="absolute left-[60px] top-[150px] flex flex-col items-start">
        <p
          v-for="(line, index) in heroData.titleLines"
          :key="index"
          :class="index === 1 ? 'ml-[4px]' : ''"
          class="font-['Cormorant_Upright'] text-[96px] font-normal leading-none tracking-normal text-black select-none"
        >
          {{ line }}
        </p>
        <p class="mt-[10px] ml-[8px] font-['Cormorant_Upright'] text-[15px] font-normal leading-none tracking-wider text-[#5E3D3B] select-none uppercase">
          {{ heroData.subtitle }}
        </p>
      </div>

      <!-- 介绍文区域 -->
      <div class="absolute left-[60px] top-[490px] flex flex-col items-start">
        <p class="font-['Cormorant_Upright'] text-[15px] font-normal leading-none tracking-wider text-[#5E3D3B] select-none uppercase">
          {{ heroData.aboutLabel }}
        </p>
        <p
          v-for="(line, index) in heroData.aboutLines"
          :key="index"
          class="mt-[10px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none"
        >
          {{ line }}
        </p>
      </div>

      <!-- 右侧主视觉插画与错位线框区域（原 TiltCard 结构直接写回） -->
      <div class="absolute right-[158px] top-[150px]">
        <div class="relative h-[459px] w-[750px]">
          <!-- 后方线框：反方向 2D 视差位移 -->
          <div
            ref="frameRef"
            class="absolute inset-0 border border-[#906E6C] pointer-events-none z-0 will-change-transform"
          ></div>

          <!-- 前方插画容器：正向 2D 视差位移 -->
          <div
            ref="cardRef"
            class="absolute left-[24px] top-[24px] h-[459px] w-[750px] overflow-hidden bg-neutral-100 shadow-sm z-10 will-change-transform"
          >
            <img
              :src="heroData.heroImage.src"
              :alt="heroData.heroImage.alt"
              class="h-full w-full object-cover select-none"
            />
          </div>
        </div>
      </div>

      <!-- 左下角标语文案 -->
      <p class="absolute left-[60px] bottom-[106px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-normal text-black select-none">
        {{ heroData.slogan }}
      </p>

      <!-- 右下角图片信息与时间 -->
      <div class="absolute right-[158px] bottom-[106px] flex flex-col items-end font-['Montserrat'] text-[16px] font-normal leading-none tracking-normal text-[#5E3D3B] select-none uppercase">
        <p>{{ heroData.caption.figure }}</p>
        <p class="mt-[8px]">{{ heroData.caption.timestamp }}</p>
      </div>
    </section>
  </main>
</template>