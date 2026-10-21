<template>
  <div class="arrow-container">
    <svg
    class="arrow-svg"
    viewBox="0 0 150 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <!-- 竖线 -->
     <line x1="0" y1="12" x2="140" y2="12" stroke="black" stroke-width="1.5" />
     <!-- 箭头尖角 -->
      <path d="M134 9L140 12L134 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  justify-content: flex-start;
  /* margin-top: 82px;
  padding-left: 60px; */
}

.arrow-svg {
  width: 150px;
  height: 24px;
}
</style>