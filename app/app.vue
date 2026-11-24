<!-- app/app.vue -->
<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import NavMenu from '~/components/layout/NavMenu.vue'

const isMenuOpen = ref(false)
const route = useRoute()
const { isPageTransitioning, pageTransition } = usePageAnim()

// 路由切换时自动关闭菜单，并标记全局页面转场开始
watch(() => route.path, () => {
  isMenuOpen.value = false
  isPageTransitioning.value = true
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;600;700&family=Google+Sans+Flex:wght@500&family=Montserrat:wght@400;500&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <!-- 全站顶部栏（Logo + 菜单按钮 + 语言切换） -->
    <AppHeader
      :menu-open="isMenuOpen"
      @toggle-menu="isMenuOpen = !isMenuOpen"
    />

    <!-- 全站菜单呼出层 -->
    <NavMenu
      :open="isMenuOpen"
      @close="isMenuOpen = false"
    />

    <!-- 当前路由页面内容 -->
    <NuxtPage :transition="pageTransition" />
  </div>
</template>