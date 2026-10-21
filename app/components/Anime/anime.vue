<!-- 引入css样式 -->
<style scoped>
@import './anime.css';
</style>

<template>
  <section class="anime-section">
    <div class="anime-container">
      <!-- 页面顶部大标题 -->
      <p class="page-title">Currently Watching</p>
      
      <!-- 四宫格卡片列表区域 -->
      <div class="anime-grid">
        
        <!-- 卡片 1：天使降临到我身边 -->
        <div class="anime-card">
          <div class="anime-img-wrap">
            <img src="/images/anime.webp" alt="天使降临到我身边" />
          </div>
          <div class="anime-info-box">
            <div class="anime-header-row">
              <p class="anime-name">天使降临到我身边</p>
              <p class="anime-episodes">共12集</p>
            </div>
            <div class="anime-meta-list">
              <div class="anime-meta-row">
                <p class="meta-label">当前集数</p>
                <p class="meta-value">第5集</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">当前集数进度</p>
                <p class="meta-value">5:55 / 24:00</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">番剧总进度</p>
                <p class="meta-value progress-bar-wrap"><span class="progress-bar"></span></p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">状态</p>
                <p class="meta-value status-offline"><span class="status-dot"></span>离线</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 2：摇曳露营 -->
        <div class="anime-card">
          <div class="anime-img-wrap">
            <img src="/images/anime2.webp" alt="摇曳露营" />
          </div>
          <div class="anime-info-box">
            <div class="anime-header-row">
              <p class="anime-name">摇曳露营</p>
              <p class="anime-episodes">共12集</p>
            </div>
            <div class="anime-meta-list">
              <div class="anime-meta-row">
                <p class="meta-label">当前集数</p>
                <p class="meta-value">第5集</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">当前集数进度</p>
                <p class="meta-value">5:55 / 24:00</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">番剧总进度</p>
                <p class="meta-value progress-bar-wrap"><span class="progress-bar"></span></p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">状态</p>
                <p class="meta-value status-online"><span class="status-dot"></span>在线观看</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 3：时光流逝，饭菜依旧美味 -->
        <div class="anime-card">
          <div class="anime-img-wrap">
            <img src="/images/anime3.webp" alt="时光流逝，饭菜依旧美味" />
          </div>
          <div class="anime-info-box">
            <div class="anime-header-row">
              <p class="anime-name">时光流逝，饭菜依旧美味</p>
              <p class="anime-episodes">共12集</p>
            </div>
            <div class="anime-meta-list">
              <div class="anime-meta-row">
                <p class="meta-label">当前集数</p>
                <p class="meta-value">第5集</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">当前集数进度</p>
                <p class="meta-value">5:55 / 24:00</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">番剧总进度</p>
                <p class="meta-value progress-bar-wrap"><span class="progress-bar"></span></p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">状态</p>
                <p class="meta-value status-offline"><span class="status-dot"></span>离线</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 4：悠哉日常大王 第三季 -->
        <div class="anime-card">
          <div class="anime-img-wrap">
            <img src="/images/anime4.webp" alt="悠哉日常大王 第三季" />
          </div>
          <div class="anime-info-box">
            <div class="anime-header-row">
              <p class="anime-name">悠哉日常大王 第三季</p>
              <p class="anime-episodes">共12集</p>
            </div>
            <div class="anime-meta-list">
              <div class="anime-meta-row">
                <p class="meta-label">当前集数</p>
                <p class="meta-value">第5集</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">当前集数进度</p>
                <p class="meta-value">5:55 / 24:00</p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">番剧总进度</p>
                <p class="meta-value progress-bar-wrap"><span class="progress-bar"></span></p>
              </div>
              <div class="anime-meta-row">
                <p class="meta-label">状态</p>
                <p class="meta-value status-offline"><span class="status-dot"></span>离线</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>