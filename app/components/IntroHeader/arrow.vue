<!-- components/IntroHeader/arrow.vue -->
<template>
  <div class="flex justify-center mt-[60px]">
    <svg
      class="w-[24px] h-[150px]"
      viewBox="0 0 24 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 竖线 -->
      <line 
        class="arrow-line" 
        x1="12" y1="0" x2="12" y2="142" 
        stroke="#8C7472" 
        stroke-width="1.5" 
      />
      <!-- 箭头尖角 -->
      <path 
        class="arrow-head" 
        d="M9 136L12 142L15 136" 
        stroke="#8C7472" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
      />
    </svg>
  </div>
</template>