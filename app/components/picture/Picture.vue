<script setup lang="ts">

import { usePicture } from './usePicture'
import Anime from './Anime.vue'
import Galme from './Galme.vue'
import Tokyo from './Tokyo.vue'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@700;800&display=swap'
    }
  ]
})

// 引入动效与拖拽逻辑
const {
  stageRef,
  viewportRef,
  chunkList,
  isDragging,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp
} = usePicture()

</script>

<template>
  <section class="relative z-10 min-h-screen w-full bg-[#FFFFFF] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
    <!-- 摄像机视口：裁切多余边界，隐藏原生滚动条 -->
    <div 
    ref="viewportRef"
    class="relative h-screen w-full overflow-hidden select-none touch-none"
    :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp">
      
      <!-- 虚拟舞台（后续拖拽与 GSAP 整体移动该容器） -->
      <div ref="stageRef" class="relative h-full w-full will-change-transform">
        <!-- 3*3九宫格瓦片平铺容器 -->
        <div
          v-for="chunk in chunkList"
          :key="chunk.id"
          class="absolute left-0 top-0 pointer-events-none will-change-transform"
       >
          <!-- 1. Anime 标题区块（保持原有排版） -->
          <Anime />

          <!-- 2. galme 标题区块（向右偏移 2400px） -->
          <Galme />

          <!-- 3. Tokyo 标题区块（向右偏移 4400px） -->
          <Tokyo />
        </div>
      </div>

    </div>
  </section>
</template>