<script setup>

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;600;700&display=swap'
    }
  ]
})

</script>

<template>
  <!-- section 保持干净：只负责视口尺寸、背景底色和 Flex 排版 -->
  <section class="relative min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center">
    
    <!-- 间距完全由头像自己决定：使用 mt 控制距顶，不再依赖父级的 pt -->
    <div class="w-[300px] h-[300px] mt-[80px] overflow-hidden shadow-md">
      <img
        src="/images/cat.webp"
        alt="Avatar"
        class="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>

    <!-- 文本内容 -->
    <!-- 打招呼语 -->
    <p class="mt-[60px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      Hi，我是Sakura
    </p>

    <!-- 正文部分 -->
    <p class="mt-[10px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      从2026年开始加入到前/后端的学习中，掌握了前端开发的基础知识
    </p>

    <p class="mt-[10px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      后，开始了网页的设计，开发出一个带有自己风格的网站。在AI的
    </p>

    <p class="mt-[10px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      协助下开发前端的同时也在认真学习后端。闲暇时喜欢看番，是《
    </p>

    <p class="mt-[10px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      摇曳露营》的忠实观众，我的头像是一只可爱的小猫
    </p>

    <p class="mt-[10px] text-center text-[30px] font-['Cormorant_Upright',serif] text-[#1a1a1a] select-none">
      希望能添加一份从容与松弛
    </p>

  </section>
</template>