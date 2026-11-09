<script setup lang="ts">
// Tokyo 展区 8 张图片：5 张在屏核心图严格对应设计稿，3 张视外过渡跳板图负责全向衔接
const tokyoImagesList = [
  // --- 展区核心组（5 张，对应画布 3 设计稿） ---
  { id: 1, src: '/images/tokyo1.webp', x: 60,   y: 30,  w: 260 }, // 左中竖图（压左边框，与标题拉开 230px 间距）
  { id: 2, src: '/images/tokyo2.webp', x: 880,  y: -150, w: 380 }, // 右上横图（大幅上提探出上边框，避开头顶）
  { id: 3, src: '/images/tokyo3.webp', x: 1420, y: 240,  w: 320 }, // 右侧大竖图（右翼压舱，留出单行介绍长句末尾通道）
  { id: 4, src: '/images/tokyo4.webp', x: 120,  y: 760,  w: 400 }, // 左下横图（下沉出底边框，与左中图错落）
  { id: 5, src: '/images/tokyo5.webp', x: 960,  y: 800,  w: 360 }, // 右下横图（中下沉底，与左下横图保持 440px 走廊）

  // --- 边缘过渡跳板组（3 张，消除漫游盲区与留白） ---
  { id: 6, src: '/images/room1.webp',  x: -260, y: 440,  w: 240 }, // 西侧跳板（中路接引 Galme 展区，无缝过渡）
  { id: 7, src: '/images/room2.webp',  x: 1780, y: -70,  w: 270 }, // 东北跳板（右上高位探出，通向下个切片）
  { id: 8, src: '/images/room3.webp',  x: 1660, y: 800,  w: 300 }  // 东南跳板（右下低位沉底，通向下个切片）
]
</script>

<template>
  <!-- 根容器统一定位在 4400px（第三岛起点） -->
  <div class="absolute left-[4400px] top-0 pointer-events-none">
    
    <!-- 1. Tokyo 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <!-- 英文大标题 -->
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        Tokyo
      </p>
      
      <!-- 中文副标题 -->
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        东京
      </p>
      
      <!-- 3 行介绍长句（保持 whitespace-nowrap 舒展单行排版） -->
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        它最吸引我的并不是大城市的喧嚣，而是自然与极端琐碎的日常在这里无缝拼接
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        无论白天被怎样的事情推着走，夜晚走进那扇便利店的门和房间里一盏昏黄的台灯
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        一天的疲惫都随之挥去，这也是我所向往的生活
      </p>
    </div>

    <!-- 2. 图片列表容器（下一步写入） -->
     <div
      v-for="item in tokyoImagesList"
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
        :alt="'Tokyo ' + item.id"
        class="block w-full h-auto object-contain pointer-events-none"
        loading="lazy"
      />
    </div>

  </div>
</template>