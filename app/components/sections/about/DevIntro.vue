<script setup lang="ts">
</script>

<template>
  <!-- 全宽独立定位画布：背景 #B4A7A7，字体 #EAE5E5，统一使用 Google Sans Flex（中文回退无衬线黑体） -->
  <section
    class="relative w-full min-w-[1440px] min-h-screen bg-[#B4A7A7] text-[#EAE5E5] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] select-none"
  >
    <!-- 1. 顶部居中引导语 -->
    <div class="absolute top-[168px] left-1/2 -translate-x-1/2 whitespace-nowrap">
      <p class="text-[20px] font-normal tracking-[0.02em] text-[#EAE5E5]/90">
        <span>
          <span>I don't really know how to design, but I...</span>
        </span>
      </p>
    </div>

    <!-- 2. 第一组：Web Development + 短分割线 + 关键词 -->
    <div class="absolute top-[276px] left-[320px]">
      <h2 class="text-[120px] font-medium leading-none tracking-[-0.02em] text-[#EAE5E5]">
        <span>
          <span>Web Development</span>
        </span>
      </h2>

      <!-- 标题下方短横线 -->
      <div class="mt-[22px] w-[563px] h-[2px] bg-[#EAE5E5]/75"></div>

      <!-- 关键词标签 -->
      <div
        class="mt-[16px] flex items-center gap-[22px] text-[13px] font-normal tracking-[0.06em] text-[#EAE5E5]/90"
      >
        <span>独立</span>
        <span>AI</span>
        <span>架构</span>
      </div>
    </div>

    <!-- 3. 第二组：development + 短分割线 + 关键词（与上方保持同一 left-[320px] 左对齐） -->
    <div class="absolute top-[548px] left-[320px]">
      <p class="text-[120px] font-medium leading-none tracking-[-0.02em] text-[#EAE5E5]">
        <span>
          <span>development</span>
        </span>
      </p>

      <!-- 标题下方短横线 -->
      <div class="mt-[22px] w-[563px] h-[2px] bg-[#EAE5E5]/75"></div>

      <!-- 关键词标签 -->
      <div
        class="mt-[16px] flex items-center gap-[22px] text-[13px] font-normal tracking-[0.06em] text-[#EAE5E5]/90"
      >
        <span>今天</span>
        <span>明天</span>
        <span>未来</span>
      </div>
    </div>
  </section>
</template>