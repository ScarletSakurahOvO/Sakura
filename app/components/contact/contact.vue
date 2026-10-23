<script setup>
import Arrow from './arrow.vue'
</script>

<template>
  <section class="contact-section">
    <!-- 双列 Grid 布局内容 -->
    <div class="contact-grid">
      <div class="left-column">
        <h2 class="contact-title">Contact me</h2>
        <div class="intro-grid">
          <div class="arrow-cell">
            <Arrow />
          </div>
          <div class="text-cell">
            <p class="intro-text">感谢你能看到这里</p>
          </div>
        </div>
        <div class="left-desc">
          <p>期待收到你的留言！</p>
          <p>无论是优秀动漫、网站建议，</p>
          <p>还是随便聊聊，都欢迎留言给我。</p>
        </div>
      </div>

      <div class="right-column">
        <form class="contact-form">
          <div class="form-item">
            <label class="form-label">你的名字 / <span class="en-label">your name</span></label>
            <input type="text" class="form-input" />
          </div>

          <div class="form-item">
            <label class="form-label">你的邮箱 / <span class="en-label">your email</span></label>
            <input type="email" class="form-input" />
          </div>

          <div class="form-item">
            <label class="form-label">有什么想和我一起聊聊的 / <span class="en-label">Anything you'd like to talk about?</span></label>
            <input type="text" class="form-input" />
          </div>

          <div class="form-footer">
            <p class="contact-tip">收到留言后，我会尽快在 24 小时内回复你。</p>
            <button type="submit" class="send-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import './contact.css';
</style>