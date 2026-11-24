<!-- app/components/layout/AppHeader.vue -->
<script setup lang="ts">
import NavToggle from '~/components/layout/NavToggle.vue'
import { siteBrand, languageOptions } from '~/data/common'

defineProps<{
  menuOpen: boolean
}>()

defineEmits<{
  toggleMenu: []
}>()
</script>

<template>
  <header>
    <!-- 全站固定 Logo -->
    <div class="fixed left-[60px] top-[60px] z-30">
      <p class="font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none">
        {{ siteBrand.title }}
      </p>
      <div class="mt-[8px] h-[2px] w-[33px] bg-black"></div>
      <p class="mt-[8px] font-['Cormorant_Upright'] text-[16px] font-normal leading-none tracking-wide text-[#5E3D3B] select-none uppercase">
        {{ siteBrand.subtitle }}
      </p>
    </div>

    <!-- 全站中间汉堡菜单按钮 -->
    <NavToggle :open="menuOpen" @toggle="$emit('toggleMenu')" />

    <!-- 全站语言切换区域 -->
    <nav class="fixed right-[158px] top-[60px] z-30 flex items-center gap-x-[5px] font-['Cormorant_Upright'] text-[20px] font-normal leading-none tracking-normal text-black select-none uppercase">
      <span
        v-for="(lang, index) in languageOptions"
        :key="lang"
        class="cursor-pointer hover:opacity-60 transition-opacity"
      >
        {{ lang }}{{ index < languageOptions.length - 1 ? ' /' : '' }}
      </span>
    </nav>
  </header>
</template>