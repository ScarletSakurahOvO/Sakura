<script setup>
// 引入箭头组件
import Arrow from './arrow2.vue';
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <!-- 顶部页面标题区域 -->
      <div class="about-header">
        <Arrow />
        <p class="section-title">about</p>
      </div>

      <!-- 中间整体内容区域（宽度 420px 并水平居中） -->
      <div class="profile-box">
        <img src="/images/about.webp" alt="about" class="about-image" />
        <h2 class="profile-name">Sakura</h2>

        <!-- 第一区块：AI全栈开发 -->
        <div class="intro-block">
          <div class="intro-arrow">
            <Arrow />
          </div>
          <h3 class="intro-title">AI全栈开发</h3>
          <div class="intro-content">
            <p>融合认知心理学与现代 Web 交互，降低访客信息获取成本，打造极简顺畅的视觉体验。</p>
            <p>借助色彩心理学与细腻微交互，在数字化交互中注入人文温度，建立深层信任与情感共鸣。</p>
            <p>以 AI 全栈开发能力为技术底座，将复杂的内容与数据流转化为直观、高效的智能化落地产品。</p>
          </div>
        </div>

        <!-- 第二区块：我的爱好 -->
        <div class="intro-block">
          <div class="intro-arrow">
            <Arrow />
          </div>
          <h3 class="intro-title">我的爱好</h3>
          <div class="intro-content">
            <p>日常状态是快乐宅家追番——遇到好剧的话，你要和我一起看吗？</p>
            <p>游戏时间基本献给了米哈游的《原神》，算是个资深旅行者。</p>
            <p>看出来了对吧？我是个重度二次元！所以顺理成章地，我也非常喜欢动画</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import './about.css';
</style>