<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const fontId = 'google-fonts-about'
  if (!document.getElementById(fontId)) {
    const link = document.createElement('link')
    link.id = fontId
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Cormorant+Upright:wght@300;400;500;600;700&family=Google+Sans+Flex:wght@100..900&family=Montserrat:wght@100..900&display=swap'
    document.head.appendChild(link)
  }
})
</script>

<template>
  <main class="w-full bg-[#F9F5EE] text-[#181818] selection:bg-[#181818] selection:text-[#F9F5EE]">
    <section class="min-h-screen w-full flex flex-col justify-center pt-20 pb-16 px-12">
      <div class="w-full max-w-[1440px] mx-auto">
        <!-- 主标题 -->
        <p
          class="font-['Google_Sans_Flex',sans-serif] text-center text-[200px] font-light leading-none tracking-[-0.02em] text-[#141414]"
        >
          <span class="font-['Cormorant_Upright',serif] text-[1.08em] font-medium -mr-[0.02em]">S</span>carlet
          <span class="font-['Cormorant_Upright',serif] text-[1.08em] font-medium -mr-[0.02em]">S</span>akura
        </p>

        <!-- 个人简介：距标题 16px (mt-4)，统一使用 Cormorant Upright -->
        <div
          class="mt-4 ml-[54%] flex flex-col gap-6 font-['Cormorant_Upright','PingFang_SC','Noto_Sans_SC',serif] text-[20px] leading-[1.35] tracking-[0.02em] text-[#1C1C1C] font-medium"
        >
          <!-- 第一段：行与行之间无间距 -->
          <p class="flex flex-col gap-0">
            <span>
              只是一个
              <span class="tracking-wider mx-1">AI</span>
              架构师
            </span>
            <span>还在一间普普通通的学校中学习</span>
          </p>

          <!-- 第二段：行与行之间无间距，倾斜词使用 light 字重 -->
          <p class="flex flex-col gap-0">
            <span>
              喜欢捣鼓奇奇怪怪的
              <span class="italic font-light text-[#8C8881] pr-0.5">代码</span>
              ，奇妙的
            </span>
            <span>
              <span class="italic font-light text-[#8C8881] pr-0.5">交互效果</span>
              和
              <span class="italic font-light text-[#8C8881] pr-0.5">动画</span>
              ，也会借鉴学习别人
            </span>
            <span>
              优秀的
              <span class="italic font-light text-[#8C8881]">设计</span>
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- Nuxt 自动导入 components/sections/about/AfterHours.vue -->
    <AfterHours />
    <DevIntro />
    <Project />
    <Weather />
    <TechList />
    <Origin />
    <jiezhi />
    <AboutFooter />
  </main>
</template>