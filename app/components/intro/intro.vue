<script setup>
import Arrow from './arrow.vue';
</script>

<template>
  <section 
    class="w-full h-screen bg-[#F9F5EE] 
           flex flex-col justify-center items-center box-border"
  >
    <!-- 第一行文字 -->
    <div class="text-center">
      <p class="text-[36px] text-black font-['Playfair_Display']">
        这是我第一次将心理学风格融入我的网站
      </p>
    </div>

    <!-- 第二行文字 -->
    <div class="text-center mt-[20px]">
      <p class="text-[36px] text-[#8C7472] font-['Playfair_Display']">
        关于我对周围环境的理解
      </p>
    </div>

    <!-- 第三行文字 -->
    <div class="text-center mt-[20px]">
      <p class="text-[14px] text-black font-['Playfair_Display']">
        关于我的情绪、人际关系和生活方式
      </p>
    </div>

    <!-- 第一个箭头组件 -->
    <Arrow />

    <div class="text-center mt-[60px]">
      <p class="text-[14px] text-black font-['Playfair_Display']">
        我经常需要应对焦虑、迷茫或人生的过渡阶段
      </p>
    </div>

    <div class="text-center mt-[20px]">
      <p class="text-[14px] text-black font-['Playfair_Display']">
        学习心理学不仅增强了我的自我意识，也助力了我的个人成长
      </p>
    </div>

    <!-- 第二个箭头组件 -->
    <Arrow />
  </section>
</template>

<style>
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>