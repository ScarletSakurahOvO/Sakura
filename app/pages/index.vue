<script setup>
// 不需要写任何 import 语句，Nuxt 会自动导入 components 文件夹下的组件！
</script>

<template>
  <section class="home-section">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="logo">Sakura</div>
      <ul class="nav-links">
        <li><a href="#">Intro</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">Currently Reading</a></li>
        <li><a href="#">Currently Watching</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <!-- 主标题区域 -->
    <div class="hero-container">
      <div class="hero-row row-top">
        <p class="main-title">
          SKY ALL-KNOWING<span class="question-mark">?</span>
        </p>
      </div>

      <div class="hero-row row-bottom">
        <p class="cn-sub-left">它不语，但包罗万象</p>
        
        <div class="sub-wrapper">
          <p class="cn-sub-right">天空是否知晓一切</p>
          <p class="sub-title">SILENT YET HOLDING ALL</p>
          
          <div class="hero-quotes">
            <p>Sometimes We all need the courage to face life.</p>
            <p>It takes a gentle heart to carry the weight of hard times</p>
            <p>No matter how slow your progress is, you are still moving forward</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 直接使用组件标签即可 -->
  <main class="page-container">
    <Intro />
    <Intro2 />
    <Intro3 />
    <About />
    <Books />
    <Anime />
    <Contact />
    <Foot />
  </main>
</template>

<style scoped>
@import './home.css';

.page-container {
  width: 100%;
  position: relative;
}
</style>