<template>
  <!-- 加上 will-change-transform 开启独立渲染图层，防止回弹时震动 -->
  <div class="relative w-full h-full overflow-hidden bg-black will-change-transform">
    <!-- 背景图片：铺满整个页面 -->
    <img 
      src="/images/end.webp" 
      alt="Ending View" 
      class="absolute inset-0 w-full h-full object-cover block select-none"
    />
    
    <!-- 顶层文案：电影感字幕排版，压在天空云朵上方 -->
    <div class="absolute inset-0 flex flex-col items-center justify-start pt-[22vh] px-6 pointer-events-none">
      <p class="font-['Shippori_Mincho','Shippori_Mincho_B1',serif] text-[26px] md:text-[32px] font-normal text-white/95 text-center leading-[1.6] tracking-[0.05em] m-0 drop-shadow-md">
        As long as you do not lose your nobility,<br>
        the whole world will open up to you
      </p>
    </div>
  </div>
</template>

<script setup>
</script>