<script setup lang="ts">

import type { GalleryItem } from './types'
import { tokyoImages as tokyoImagesList } from './data/tokyo'

// 向父组件 Picture.vue 抛出预览事件（携带图片对象与屏幕几何位置）
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
  <!-- 根容器统一定位在 4400px（第三岛起点） -->
  <div class="absolute left-[4400px] top-0 pointer-events-none">
    
    <!-- 1. Tokyo 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <!-- 英文大标题 -->
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        Tokyo
      </p>
      
      <!-- 中文副标题 -->
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        东京
      </p>
      
      <!-- 3 行介绍长句（保持 whitespace-nowrap 舒展单行排版） -->
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        它最吸引我的并不是大城市的喧嚣，而是自然与极端琐碎的日常在这里无缝拼接
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        无论白天被怎样的事情推着走，夜晚走进那扇便利店的门和房间里一盏昏黄的台灯
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        一天的疲惫都随之挥去，这也是我所向往的生活
      </p>
    </div>

    <!-- 2. 图片列表容器（下一步写入） -->
     <div
      v-for="item in tokyoImagesList"
      :key="item.id"
      class="absolute overflow-hidden bg-[#E5E5E5] transition-shadow duration-300 hover:shadow-lg pointer-events-auto cursor-pointer"
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