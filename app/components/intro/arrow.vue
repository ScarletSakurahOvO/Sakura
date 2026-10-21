<template>
  <div class="arrow-container">
    <svg
    class="arrow-svg"
    viewBox="0 0 24 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <!-- 竖线 -->
     <line x1="12" y1="0" x2="12" y2="142" stroke="black" stroke-width="1.5" />
     <!-- 箭头尖角 -->
      <path d="M9 136L12 142L15 136" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.arrow-svg {
  width: 24px;
  height: 150px;
}
</style>