<script setup lang="ts">
// 7 张图片均匀散布：核心区围绕标题，边缘图延伸为过渡走廊
const imagesList = [
  // --- 展区核心组（5 张） ---
  { id: 1, src: '/images/anime1.webp', x: 180,  y: -80, w: 230 }, // 左上立绘（抚子）
  { id: 2, src: '/images/anime2.webp', x: 860,  y: -150, w: 360 }, // 正上横图（缆车）
  { id: 3, src: '/images/anime3.webp', x: -80,  y: 420, w: 260 }, // 最左侧横图（左侧回环过渡）
  { id: 4, src: '/images/anime4.webp', x: 440,  y: 780, w: 380 }, // 正下横图（月夜）
  { id: 5, src: '/images/anime5.webp', x: 1300, y: 220, w: 330 }, // 右侧主图（吃零食）

  // --- 东侧过渡跳板组（2 张，与 Galme 交界） ---
  { id: 6, src: '/images/anime6.webp', x: 1520, y: 760, w: 320 }, // 右下路跳板（下沉托底）
  { id: 7, src: '/images/anime7.webp', x: 1780, y: -80, w: 270 }  // 右上路跳板（高位探出）
]
</script>

<template>
  <div class="absolute left-0 top-0 pointer-events-none">
    
    <!-- 1. Anime 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        Anime
      </p>
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        摇曳露营
      </p>
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        这部番没有半点剧情冲突，看着就像在寒冬里捧着喝了一大口热汤，平淡又治愈
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        最大的魔力就是能让人由衷感叹一句：“活着真舒服啊。”
      </p>
    </div>

    <!-- 2. 7 张非对称画廊图片 -->
    <div
      v-for="item in imagesList"
      :key="item.id"
      class="absolute overflow-hidden bg-[#E5E5E5] transition-shadow duration-300 hover:shadow-lg pointer-events-auto"
      :style="{
        left: `${item.x}px`,
        top: `${item.y}px`,
        width: `${item.w}px`,
      }"
    >
      <img
        :src="item.src"
        :alt="'Anime ' + item.id"
        class="block w-full h-auto object-contain pointer-events-none"
        loading="lazy"
      />
    </div>

  </div>
</template>