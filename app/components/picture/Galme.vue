<script setup lang="ts">

import { galmeImages as galmeImagesList } from './data/galme'
import type { GalleryItem } from './types'

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
  <!-- 根容器统一定位在 2200px -->
  <div class="absolute left-[2200px] top-0 pointer-events-none">
    
    <!-- galme 标题区块 -->
    <div class="absolute left-[550px] top-[320px] flex flex-col items-start z-10 pointer-events-none whitespace-nowrap">
      <p class="font-['Google_Sans_Flex',sans-serif] text-[96px] font-bold leading-none tracking-tight text-black">
        galme
      </p>
      <p class="mt-[16px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-tight text-black">
        原神
      </p>
      <p class="mt-[10px] font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        二游界的开山鼻祖，用着顶级的配乐和丰富的想象力造就了什么才是真正的手游
      </p>
      <p class="font-['Cormorant_Upright',serif] text-[16px] font-normal leading-normal text-[#7B7C7C]">
        可惜原神在4年前就开始走了下坡路，奇怪的是至今仍未走完
      </p>
    </div>

    <!-- 8 张图片等比自适应渲染 -->
    <div
      v-for="item in galmeImagesList"
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