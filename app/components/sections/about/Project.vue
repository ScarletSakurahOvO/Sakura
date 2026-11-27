<script setup lang="ts">
import { currentTrack } from '@/data/music'
</script>

<template>
  <section
    class="w-full min-w-[1440px] min-h-screen bg-[#F7F3EB] text-[#141414] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] pt-[180px] pb-[140px]"
  >
    <!-- 右边缘与顶部导航栏 right-[158px] 保持对齐 -->
    <div class="w-fit ml-auto mr-[158px]">
      <!-- 1. 顶部标题与右侧小字备注（直接写在模板中） -->
      <div class="flex items-baseline">
        <h2 class="text-[64px] font-normal leading-none tracking-[-0.02em] text-[#111111]">
          <span>
            <span>Web Development</span>
          </span>
        </h2>
        <span class="ml-[8px] text-[13px] font-medium text-[#1C1C1C]">
          <span>(我还在掌握的)</span>
        </span>
      </div>

      <!-- 2. Spotify 听歌状态主卡片：1024x410，上下左右统一 44px 对称内边距 -->
      <div
        class="mt-[44px] w-[1024px] h-[410px] border-2 border-[#8A6D67] p-[44px] flex items-center"
      >
        <!-- 左侧：错位线框 + 专辑封面（总尺寸 322x322，上下留白各 44px） -->
        <div class="relative w-[322px] h-[322px] shrink-0">
          <!-- 后层细线框（左上露边） -->
          <div class="w-[304px] h-[304px] border-2 border-[#8A6D67]"></div>

          <!-- 前层封面容器（向右下偏移 18px 形成交叠） -->
          <div
            class="absolute top-[18px] left-[18px] w-[304px] h-[304px] bg-[#D5D7DA] overflow-hidden"
          >
            <img
              v-if="currentTrack.cover"
              :src="currentTrack.cover"
              :alt="currentTrack.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- 右侧：与封面等高（h-[322px]），上下两端对齐还原设计稿基线 -->
        <div class="flex-1 h-[322px] ml-[48px] flex flex-col justify-between">
          <!-- 顶部行：歌名/歌手 + 右上角 Spotify 在线指示灯 -->
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-[36px] font-normal leading-none tracking-[-0.01em] text-[#111111]">
                {{ currentTrack.title }}
              </h3>
              <p class="mt-[14px] text-[24px] font-normal leading-none text-[#1C1C1C]">
                {{ currentTrack.artist }}
              </p>
            </div>

            <!-- Spotify 状态徽标 -->
            <div class="mt-[4px] mr-[8px] flex items-center gap-[12px] select-none">
              <span class="text-[18px] font-normal text-[#111111]">
                {{ currentTrack.platform }}
              </span>
              <span
                class="w-[11px] h-[11px] rounded-full"
                :class="currentTrack.isOnline ? 'bg-[#38B858]' : 'bg-[#9E9E9E]'"
              ></span>
              <span class="text-[14px] font-normal text-[#1C1C1C]">
                {{ currentTrack.status }}
              </span>
            </div>
          </div>

          <!-- 底部：演职员分割线列表（底边与左侧灰色封面底边平齐） -->
          <div class="w-[280px] border-t border-[#4A4442]">
            <div
              v-for="item in currentTrack.credits"
              :key="item.label"
              class="flex items-center justify-between py-[10px] border-b border-[#4A4442]"
            >
              <span class="text-[15px] text-[#1C1C1C]">{{ item.label }}</span>
              <span class="text-[13px] text-[#333333]">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. 卡片下方极简随笔说明（直接写在模板中） -->
      <p class="mt-[22px] text-[16px] text-[#1C1C1C] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] font-medium">
        <span>
          <span class="block">我喜欢边听音乐边打造出一个干净、简洁的网站</span>
        </span>
        <span>
          <span class="block">保持极简，给页面留出呼吸感，保证让每一个内容按照应有的方式运行</span>
        </span>
      </p>
    </div>
  </section>
</template>