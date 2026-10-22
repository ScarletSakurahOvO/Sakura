<template>
  <section class="home-section">
    <!-- 导航栏：全局固定贴顶、毛玻璃模糊背景 -->
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

    <!-- 中间主标题区域 -->
    <div class="hero-container">
      <!-- 第一行容器：包含第一行英文标题 -->
      <div class="hero-row row-top">
        <p class="main-title">
          SKY ALL-KNOWING<span class="question-mark">?</span>
        </p>
      </div>

      <!-- 第二行容器：包含第二行英文 及 两句中文子标题 -->
      <div class="hero-row row-bottom">
        <!-- 左下中文：它不语，但包罗万象 -->
        <p class="cn-sub-left">它不语，但包罗万象</p>
        
        <div class="sub-wrapper">
          <!-- 右上中文：天空是否知晓一切 -->
          <p class="cn-sub-right">天空是否知晓一切</p>
          <p class="sub-title">SILENT YET HOLDING ALL</p>
          
          <!-- 底部三行斜体寄语：内嵌在 sub-wrapper 中以实现对齐 -->
          <div class="hero-quotes">
            <p>Sometimes We all need the courage to face life.</p>
            <p>It takes a gentle heart to carry the weight of hard times</p>
            <p>No matter how slow your progress is, you are still moving forward</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 引入其他页面 -->
  <div>
    <Intro />
    <Intro2 />
    <Intro3 />
    <About />
    <Books />
    <Anime />
  </div>
</template>

<style scoped>
@import './home.css';
</style>