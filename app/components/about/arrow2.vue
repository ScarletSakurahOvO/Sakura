<template>
  <div class="arrow-container">
    <svg
      class="arrow-svg"
      viewBox="0 0 106 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 竖线 -->
      <line x1="0" y1="12" x2="100" y2="12" stroke="black" stroke-width="1.5" />
      <!-- 箭头尖角 -->
      <path d="M94 9L100 12L94 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  justify-content: flex-start;
}

.arrow-svg {
  width: 106px;
  height: 24px;
}
</style>