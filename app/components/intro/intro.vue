<!-- 引入css样式 -->
 <style scoped>
 @import './intro.css';
</style>

<!-- 引入箭头组件 -->
 <script setup>
 import Arrow from './arrow.vue';
</script>

<template>
  <section class="intro-section">
    <!-- 第一行文字 -->
    <div class="intro-box">
      <p class="main-title">这是我第一次将心理学风格融入我的网站</p>
    </div>

    <!-- 第二行文字 -->
    <div class="intro-subtitle-box">
      <p class="main-subtitle">关于我对周围环境的理解</p>
    </div>

    <!-- 第三行文字 -->
    <div class="intro-subtitle-box">
      <p class="main-thrtitle">关于我的情绪、人际关系和生活方式</p>
    </div>

    <!-- 第一个箭头组件 -->
     <Arrow />

     <div class="intro-thrtitle-box">
      <p class="main-fortitle">我经常需要应对焦虑、迷茫或人生的过渡阶段</p>
     </div>

     <div class="intro-subtitle-box">
      <p class="main-fivtitle">学习心理学不仅增强了我的自我意识，也助力了我的个人成长</p>
     </div>

     <!-- 第二个箭头组件 -->
      <Arrow />
  </section>
</template>