<!-- foot/Contact.vue -->
<script setup>
import FooterBanner from './FooterBanner.vue'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
    }
  ]
})

const contactData = {
  title: '你有什么好事情要一起分享的吗',
  descLines: [
    '今天偶遇的晚霞、一本好看的书，或是生活中微小的快乐。只要你愿意',
    '我都很乐意接受你的分享'
  ],
  buttonText: 'contact me',
  email: 'annausa0802@gmail.com',
  githubUrl: 'https://github.com/'
}
</script>

<template>
  <section class="relative z-10 h-screen overflow-hidden bg-[#FAFAFA] font-['Montserrat',sans-serif] flex flex-col justify-between pt-[320px] pb-[36px] px-[56px]">
    <!-- 邀约区块 -->
    <div class="max-w-[780px] shrink-0">
      <!-- 主标题：36px -->
      <h2 class="text-[36px] font-normal text-[#7D615C] tracking-[0.04em]">
        {{ contactData.title }}
      </h2>

      <!-- 引导文案：与标题间距 30px，字号 20px -->
      <div class="mt-[30px] text-[20px] leading-[1.8] text-[#8C706B]">
        <p v-for="(line, index) in contactData.descLines" :key="index">
          {{ line }}
        </p>
      </div>

      <!-- 行动按钮 -->
      <button
        type="button"
        class="mt-[36px] px-[32px] py-[14px] bg-[#EFE6DC] text-[#8C706B] text-[16px] tracking-[0.05em] transition-colors duration-300 hover:bg-[#E5D8C9] cursor-pointer"
      >
        {{ contactData.buttonText }}
      </button>
    </div>

    <!-- 底部双线 SAKURA 区块 -->
    <FooterBanner
      :button-text="contactData.buttonText"
      :email="contactData.email"
      :github-url="contactData.githubUrl"
    />
  </section>
</template>