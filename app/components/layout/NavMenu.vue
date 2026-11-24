<!-- app/components/layout/NavMenu.vue -->
<script setup lang="ts">
import NavImage from '~/components/layout/NavImage.vue'
import { navItems } from '~/data/common'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { onBeforeEnter, onEnter, onLeave } = useMenuAnim()

const activeIndex = ref(0)
const route = useRoute()

const handleNavClick = (item: typeof navItems[number]) => {
  if (!item.to) return
  if (route.path === item.to) {
    emit('close')
    return
  }
  navigateTo(item.to)
}
</script>

<template>
  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-20 overflow-hidden"
    >
      <!-- 无色轻度磨砂玻璃遮罩 -->
      <div
        class="absolute inset-0 backdrop-blur-[5px] will-change-[opacity]"
      ></div>

      <!-- 左侧预览图组件 -->
      <NavImage
        :items="navItems"
        :active-index="activeIndex"
      />

      <!-- 右侧纯白画布 -->
      <div
        class="absolute right-0 bottom-0 h-[calc(100vh-140px)] w-[calc(50vw+35px)] bg-white pt-[34px] pl-[40px] will-change-[clip-path]"
      >
        <!-- 静态导航项 -->
        <nav
          @mouseleave="activeIndex = 0"
          class="flex flex-col items-start gap-y-[10px]"
        >
          <span
            v-for="(item, index) in navItems"
            :key="item.label"
            class="block overflow-hidden pb-[0.14em] -mb-[0.14em]"
          >
            <span
              @mouseenter="activeIndex = index"
              @click="handleNavClick(item)"
              :class="activeIndex === index ? 'text-[#8A6D67]' : 'text-[#D5D6D0]'"
              class="nav-item-text block font-['Google_Sans_Flex'] text-[96px] font-medium leading-none tracking-normal select-none cursor-pointer transition-colors duration-300 will-change-transform"
            >
              {{ item.label }}
            </span>
          </span>
        </nav>

        <!-- 进度指示器 -->
        <div class="nav-order-indicator mt-[92px] flex flex-col items-start select-none">
          <span class="font-['Google_Sans_Flex'] text-[24px] font-medium leading-none text-[#8A6D67]">
            Order
          </span>
          <div class="relative mt-[6px] flex items-center gap-x-[3px]">
            <!-- 5 个空心圆点轨道 -->
            <span
              v-for="n in 5"
              :key="n"
              class="h-[10px] w-[10px] rounded-full border border-[#8A6D67]"
            ></span>
            <!-- 水平平滑移动的实心指示圆点 -->
            <span
              :style="{ transform: `translateX(calc(${activeIndex} * (100% + 3px)))` }"
              class="pointer-events-none absolute left-0 top-0 h-[10px] w-[10px] rounded-full bg-[#8A6D67] transition-transform duration-300 ease-out"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>