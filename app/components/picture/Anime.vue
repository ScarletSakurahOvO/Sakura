<script setup lang="ts">

import { animeImages } from './data/anime'
import type { GalleryItem } from './types'

// 更新事件定义：除了图片数据 item，还携带点击时刻的视口几何位置 rect
const emit = defineEmits<{
  (e: 'preview', payload: { item: GalleryItem; rect: DOMRect }): void
}>()

// 点击时提取当前图片卡片的屏幕绝对包围盒
const onImageClick = (e: MouseEvent, item: GalleryItem) => {
  const el = e.currentTarget as HTMLElement
  emit('preview', {
    item,
    rect: el.getBoundingClientRect()
  })
}
</script>

<template>
  <div class="absolute left-0 top-0 pointer-events-none">
    
    <!-- 1. Anime 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        Anime
      </p>
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        摇曳露营
      </p>
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        这部番没有半点剧情冲突，看着就像在寒冬里捧着喝了一大口热汤，平淡又治愈
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        最大的魔力就是能让人由衷感叹一句：“活着真舒服啊。”
      </p>
    </div>

    <!-- 2. 7 张非对称画廊图片 -->
    <!-- 修改前：v-for 绑定的旧数组，没有点击事件 -->
    <!-- 修改后： -->
    <div
      v-for="item in animeImages"
      :key="item.id"
      class="absolute overflow-hidden bg-[#E5E5E5] transition-all duration-300 hover:shadow-lg pointer-events-auto cursor-pointer"
      :style="{
      left: `${item.x}px`,
      top: `${item.y}px`,
      width: `${item.w}px`,
     }"
      @click="onImageClick($event, item)"
    >
    <img
      :src="item.src"
      :alt="item.title"
      class="block w-full h-auto object-contain pointer-events-none"
      loading="lazy"
    />
</div>
  </div>
</template>