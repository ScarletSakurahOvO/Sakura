<script setup>
import Arrow from './arrow.vue';
</script>

<template>
  <section class="contact-section">
    <!-- 页面主要布局结构（双列 Grid 布局） -->
    <div class="contact-grid">
      <!-- 左侧内容列 -->
      <div class="left-column">
        <p class="contact-title">Contact me</p>
        
        <div class="intro-grid">
          <div class="arrow-cell">
            <Arrow />
          </div>
          <div class="text-cell">
            <p class="intro-text">感谢你能看到这里</p>
          </div>
        </div>

        <!-- 新增：左侧补充说明文字（左侧与标题文字对齐，底部与第二条表单线对齐） -->
        <div class="left-desc">
          <p>期待收到你的留言！</p>
          <p>无论是优秀动漫、网站建议，</p>
          <p>还是随便聊聊，都欢迎留言给我。</p>
        </div>
      </div>

      <!-- 右侧表单收集区域 -->
      <div class="right-column">
        <form class="contact-form" @submit.prevent>
          <!-- 名字输入项 -->
          <div class="form-item">
            <label class="form-label">
              你的名字 <span class="en-label">/ your name</span>
            </label>
            <input type="text" class="form-input" />
          </div>

          <!-- 邮箱输入项 -->
          <div class="form-item">
            <label class="form-label">
              你的邮箱 <span class="en-label">/ your email</span>
            </label>
            <input type="email" class="form-input" />
          </div>

          <!-- 留言内容输入项 -->
          <div class="form-item">
            <label class="form-label">
              有什么想和我一起聊聊的 <span class="en-label">/ Anything you'd like to talk about?</span>
            </label>
            <input type="text" class="form-input" />
          </div>

          <!-- 底部行：将提示语和按钮放在同一个 Grid 容器中，实现完美水平居中对齐 -->
          <div class="form-footer">
            <p class="contact-tip">I will contact you within 24 hours.</p>
            <button type="button" class="send-btn">发送</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import './contact.css';
</style>