<!-- 引入交互动画,其他页面 -->
 <script setup lang="ts">
 import { useHome } from './useHome'
 import intro from '~/components/intro/intro.vue';

 //使用我们写好的组合函数
 const { imageRef } = useHome()
</script>

<!-- 引入css样式 -->
 <style scoped>
 @import './home.css';
</style>

<template>
  <section>
    <!-- 首页覆盖图片 -->
     <div class="home-section">
      <img ref="imageRef" src="/images/home.webp" alt="home" class="home-image">
     </div>

     <!-- 左上角logo -->
      <div class="logo">Sakura</div>

      <!-- 右上角导航栏 -->
       <nav class="nav-links">
        <ul>
          <li><a href="#">Intro</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">Currently Reading</a></li>
          <li><a href="#">Currently Watching</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
       </nav>

       <!-- 左下角标题 -->
        <div class="home-text">
          <p class="quote-title">Sometimes</p>
          <p class="quote-subtitle">We all need the courage to face life</p>
        </div>
  </section>

  <!-- 引入其他页面 -->
   <div>
    <Intro />
   </div>
</template>