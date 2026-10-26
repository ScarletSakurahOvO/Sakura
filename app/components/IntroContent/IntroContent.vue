<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Arrow from './arrow.vue';
import LessonConfusion from './LessonConfusion.vue';
import LessonTurningPoint from './LessonTurningPoint.vue';
import LessonRelationships from './LessonRelationships.vue';
import LessonSelfAwareness from './LessonSelfAwareness.vue';
import EndEnding from './end.vue'; // 引入结束页组件

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger);

// 定义 DOM 引用
const containerRef = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);

let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    // 将 02-06 页全部放入动画数组
    const cards = [card2.value, card3.value, card4.value, card5.value, card6.value];

    // 1. 初始化：让待滑入的卡片在初始状态下全部位于屏幕正下方
    gsap.set(cards, { yPercent: 100 });

    // 2. 创建滚动时间轴与 ScrollTrigger 联动
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top top',
        end: '+=500%',          // 5 张卡片依次覆盖，保持 500% 的精准行程
        scrub: true,            // 100% 实时跟随 Lenis 的滚动与惯性
        pin: true,
        pinType: 'transform',              
        anticipatePin: 1,       // 优化固定瞬间的流畅度
        invalidateOnRefresh: true, // 尺寸刷新时重新计算，防止错位
        fastScrollEnd: true,      // 快速滚动时平滑结束
        preventOverlaps: true     // 防止多个滚动触发器冲突导致的抖动
      }
    });

    // 3. 依次让 02, 03, 04, 05 以及最后的 end.vue 从底部平滑滑入并覆盖
    cards.forEach((card) => {
      tl.to(card, {
        yPercent: 0,
        ease: 'none',           // 保持匀速映射，由底层 Lenis 统一接管所有惯性与减速
        duration: 1
      });
    });

  }, containerRef.value);
});

// 组件卸载时清理动画上下文
onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <!-- 移除了外层的 will-change-transform，避免与 pinSpacer 的定位计算冲突 -->
  <section ref="containerRef" class="relative w-full h-screen bg-[#FEFBFB] overflow-hidden">
    
    <!-- 视口容器：absolute 铺满全屏，由外层 GSAP pin 统一固定 -->
    <div class="absolute inset-0 w-full h-screen overflow-hidden">
      
      <!-- 第 01 页 (z-[1])：作为稳固的底图最先展示 -->
      <div class="absolute inset-0 w-full h-full flex flex-col z-[1]">
        <!-- 顶部标题与箭头 -->
        <div class="flex items-center gap-[120px] mt-[82px] pl-[60px] shrink-0 z-10">
          <Arrow />
          <p class="font-['Playfair_Display'] text-[32px] font-normal text-black m-0">
            What I have learned
          </p>
        </div>

        <!-- 图片与右侧文字共同容器 -->
        <div class="absolute top-1/2 left-[150px] -translate-y-1/2 flex items-stretch gap-[60px]">
          <!-- 左侧图片部分 -->
          <div class="w-[36.67vw] aspect-[16/9] shrink-0">
            <img 
              src="/images/study.webp" 
              alt="study" 
              class="w-full h-full object-cover block"
            />
          </div>

          <!-- 右侧文字部分 -->
          <div class="relative flex flex-col justify-between">
            <span 
              class="absolute -left-[35px] bottom-0 translate-y-[4%] 
                     font-['Playfair_Display_SC'] text-[600px] font-normal 
                     text-white leading-none select-none pointer-events-none z-0"
            >
              01
            </span>
            <p class="relative z-10 font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
              应对焦虑
            </p>
            <div class="relative z-10 flex flex-col">
              <p class="font-['Playfair_Display'] text-[20px] font-normal text-black leading-[1.6] m-0">
                一个有趣的悖论是：当我真正接受自己的现状时改变就发生了
              </p>
              <p class="font-['Playfair_Display'] text-[20px] italic text-[#9B7D7B] m-0 mt-[16px]">
                —— Carl Rogers
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第 02 页组件 -->
      <div ref="card2" class="absolute inset-0 w-full h-full z-[2]">
        <LessonConfusion />
      </div>

      <!-- 第 03 页组件 -->
      <div ref="card3" class="absolute inset-0 w-full h-full z-[3]">
        <LessonTurningPoint />
      </div>

      <!-- 第 04 页组件 -->
      <div ref="card4" class="absolute inset-0 w-full h-full z-[4]">
        <LessonRelationships />
      </div>

      <!-- 第 05 页组件 -->
      <div ref="card5" class="absolute inset-0 w-full h-full z-[5]">
        <LessonSelfAwareness />
      </div>

      <!-- 第 06 页组件（结束页：end.vue） -->
      <div ref="card6" class="absolute inset-0 w-full h-full z-[6]">
        <EndEnding />
      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>