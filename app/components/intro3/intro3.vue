<!-- 引入css样式 -->
<style scoped>
@import './intro3.css';
</style>

<!-- 引入箭头组件 -->
<script setup>
import Arrow from './arrow.vue';
</script>

<template>
  <section class="intro3-section">
    <!-- 主容器 -->
    <div class="intro3-container">
      <div class="intro3-header-wrapper">
        <!-- 引入箭头 -->
        <Arrow />
        <!-- 箭头指向文字 -->
        <p class="section-title">What I'm looking for</p>
      </div>

      <!-- 下半部分内容的主体区域 -->
      <div class="content-body">
        <!-- 竖线保持在原有的网格位置 -->
        <div class="vertical-line"></div>

        <!-- 右侧文本内容区域 -->
        <div class="text-content-wrapper">
          <h2 class="content-heading">更好地理解自己</h2>
          
          <p class="content-desc">发掘自身优势的同时，也认清自己的短板</p>
          
          <p class="content-desc">做好我自己的网站，向大家更好地展示我自己</p>
          
          <p class="content-desc">
            将心理学融入我的个人网站，把它作为一种“隐形工具”来设计结构<br>
            和用户体验。
          </p>
          
          <p class="content-desc">
            我想利用认知心理学来优化视觉层级和留白，从而减轻访问者在浏览<br>
            和阅读时的认知负荷
          </p>
          
          <p class="content-desc">
            通过利用色彩心理学和精妙的微交互，我希望引起情感共鸣并提供掌控感<br>
            同时，应用行为学能让我简化用户路径并建立信任感
          </p>
        </div>
      </div>

      <!-- 技术栈整体包裹容器 -->
      <div class="tech-stack-wrapper">
        <!-- 第一行技术栈展示区 -->
        <div class="tech-row-1">
          <!-- Nuxt3 项 -->
          <div class="tech-item">
            <div class="tech-watermark">N</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">nuxt3</div>
                <div class="tech-desc">一个很好的前端框架</div>
              </div>
            </div>
          </div>

          <!-- Vue 项 -->
          <div class="tech-item">
            <div class="tech-watermark">V</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">vue</div>
                <div class="tech-desc">我最喜欢的html框架</div>
              </div>
            </div>
          </div>

          <!-- CSS 项 -->
          <div class="tech-item">
            <div class="tech-watermark">C</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">css</div>
                <div class="tech-desc">每个网站都离不开的样式</div>
              </div>
            </div>
          </div>

          <!-- TypeScript 项 -->
          <div class="tech-item">
            <div class="tech-watermark">T</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">TypeScript</div>
                <div class="tech-desc">vue最好的搭档</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二行技术栈展示区（精准错位在间隙中） -->
        <div class="tech-row-2">
          <!-- Node.js 项 -->
          <div class="tech-item tech-node">
            <div class="tech-watermark">N</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">node.js</div>
                <div class="tech-desc">挺简单的一个后端语言</div>
              </div>
            </div>
          </div>

          <!-- GSAP 项 -->
          <div class="tech-item tech-gsap">
            <div class="tech-watermark">G</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">gsap</div>
                <div class="tech-desc">这是一个很好的动画库</div>
              </div>
            </div>
          </div>

          <!-- Lenis 项 -->
          <div class="tech-item tech-lenis">
            <div class="tech-watermark">L</div>
            <div class="tech-info">
              <div class="tech-vertical-line"></div>
              <div class="tech-text-group">
                <div class="tech-name">lenis</div>
                <div class="tech-desc">网页滑动如德芙般丝滑</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>