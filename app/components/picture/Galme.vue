<script setup lang="ts">
// 8 张图片均匀散布：消除过度膨胀，各图高低错落
const galmeImagesList = [
  // --- 展区核心组（5 张） ---
  { id: 1, src: '/images/galme1.webp', x: 60,   y: 80,  w: 260 }, // 左侧偏上（温迪）
  { id: 2, src: '/images/galme2.webp', x: 960,  y: -180,  w: 290 }, // 正上立绘（钟离：等比自适应，避开标题）
  { id: 3, src: '/images/galme3.webp', x: 1360, y: 260,  w: 340 }, // 右侧主图（雷电将军）
  { id: 4, src: '/images/galme4.webp', x: 340,  y: 760,  w: 340 }, // 正下横图（纳西妲）
  { id: 5, src: '/images/galme5.webp', x: 960,  y: 800,  w: 360 }, // 右下横图（芙宁娜）

  // --- 边缘过渡跳板组（3 张） ---
  { id: 6, src: '/images/galme6.webp', x: 1680, y: 860,  w: 300 }, // 右下路跳板（通向下个切片）
  { id: 7, src: '/images/galme7.webp', x: 1740, y: -50,  w: 280 }, // 右上路跳板（通向下个切片）
  { id: 8, src: '/images/galme8.webp', x: -190, y: 490,  w: 230 }  // 左中路跳板（少女立绘：恰好处于两岛正中视线区）
]
</script>

<template>
  <!-- 根容器统一定位在 2200px -->
  <div class="absolute left-[2200px] top-0 pointer-events-none">
    
    <!-- galme 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        galme
      </p>
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        原神
      </p>
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        二游界的开山鼻祖，用着顶级的配乐和丰富的想象力造就了什么才是真正的手游
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        可惜原神在4年前就开始走了下坡路，奇怪的是至今仍未走完
      </p>
    </div>

    <!-- 8 张图片等比自适应渲染 -->
    <div
      v-for="item in galmeImagesList"
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
        :alt="'Galme ' + item.id"
        class="block w-full h-auto object-contain pointer-events-none"
        loading="lazy"
      />
    </div>

  </div>
</template>