<!-- 引入css样式 -->
 <style scoped>
@import './intro2.css';
</style>

<!-- 引入箭头组件 -->
<script setup>
import Arrow from './arrow.vue'
</script>

<template>
  <section class="intro2-section">
    <div class="intro2-container">
      <div class="intro2-header-wrapper">
        <!-- 引入箭头 -->
        <Arrow />

        <!-- 箭头指向文字 -->
        <p class="section-title">What I have learned</p>
      </div>

      <!-- 图片与右侧文字共同容器 -->
      <div class="intro2-content-area">
        <!-- 左侧图片部分 -->
        <div class="image-wrapper">
          <img src="/images/study.webp" alt="study" class="study-image">
        </div>

        <!-- 右侧文字部分 -->
        <div class="text-content">
          <!-- 顶部标题 -->
          <p class="content-title">应对焦虑</p>
          
          <!-- 底部名言与作者的包裹整体 -->
          <div class="quote-group">
            <p class="quote-text">
              一个有趣的悖论是：当我真正接受自己的现状时改变就发生了
            </p>
            <p class="quote-author">—— Carl Rogers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>