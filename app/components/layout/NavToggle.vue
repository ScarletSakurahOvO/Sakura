<!-- app/components/layout/NavToggle.vue -->
<script setup lang="ts">
withDefaults(defineProps<{
  open?: boolean
}>(), {
  open: false
})

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button
    type="button"
    @click="$emit('toggle')"
    class="absolute left-1/2 top-[60px] -translate-x-1/2 z-30 flex items-center gap-x-[8px] font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none cursor-pointer hover:opacity-60 transition-opacity"
  >
    <!-- 左侧 SVG 图标：三条完全等宽等粗的横线 -> 扁平 X -->
    <svg
      viewBox="0 0 16 12"
      class="h-[12px] w-[16px] shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <rect
        x="0"
        y="1"
        width="16"
        height="1"
        fill="currentColor"
        style="transform-box: fill-box; transform-origin: center;"
        :class="open ? 'translate-y-[4.5px] rotate-[24deg]' : ''"
        class="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
      />
      <rect
        x="0"
        y="5.5"
        width="16"
        height="1"
        fill="currentColor"
        style="transform-box: fill-box; transform-origin: center;"
        :class="open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'"
        class="transition-all duration-300 ease-out will-change-transform"
      />
      <rect
        x="0"
        y="10"
        width="16"
        height="1"
        fill="currentColor"
        style="transform-box: fill-box; transform-origin: center;"
        :class="open ? '-translate-y-[4.5px] -rotate-[24deg]' : ''"
        class="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
      />
    </svg>

    <!-- 右侧文字：固定宽度防止居中位移抖动，保持遮罩向上嵌出 -->
    <span class="inline-grid w-[46px] text-left overflow-hidden pb-[0.14em] -mb-[0.14em]">
      <Transition
        enter-from-class="translate-y-[120%] opacity-0"
        enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        enter-to-class="translate-y-0 opacity-100"
        leave-from-class="translate-y-0 opacity-100"
        leave-active-class="transition-all duration-300 ease-out"
        leave-to-class="-translate-y-[120%] opacity-0"
      >
        <span
          :key="open ? 'close' : 'menu'"
          class="col-start-1 row-start-1 block will-change-transform"
        >
          {{ open ? 'Close' : 'Menu' }}
        </span>
      </Transition>
    </span>
  </button>
</template>