<template>
  <section
    class="relative z-10 w-full bg-[#FFFFFF] text-[#906E6C] px-[84px] pt-[360px] pb-[48px] select-none font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif]"
  >
    <!-- 1. 左侧邀约文案与按钮区 -->
    <div>
      <h2 class="text-[38px] font-normal leading-[1.3] tracking-[0.02em]">
        你有什么好事情要一起分享的吗
      </h2>

      <p class="mt-[30px] text-[20px] font-normal leading-[1.35] tracking-[0.02em] text-[#906E6C]">
        <span class="block">
          <span>今天偶遇的晚霞、一本好看的书，或是生活中微小的快乐。只要你愿意</span>
        </span>
        <span class="block">
          <span>我都很乐意接受你的分享</span>
        </span>
      </p>

      <a
        href="mailto:annausa0802@gmail.com"
        class="mt-[36px] inline-flex items-center justify-center px-[38px] py-[16px] bg-[#F5EBDF] text-[19px] font-normal tracking-[0.02em] text-[#906E6C] transition-colors hover:bg-[#EDE2D4]"
      >
        contact me
      </a>
    </div>

    <!-- 2. 双横线夹持的超大 SAKURA 标识 -->
    <div class="mt-[40px]">
      <!-- 上方横线 -->
      <div class="w-full h-[2px] bg-[#8A6D67]"></div>

      <!-- 字母容器（字母间距 62px，底部裁剪与下横线齐平） -->
      <div class="pt-[36px] overflow-hidden">
        <div
          class="flex items-end justify-center gap-[62px] translate-y-[4px] text-[250px] font-regular leading-[0.75] text-[#8A6D67] font-['Montserrat',sans-serif]"
        >
          <span>S</span>
          <span class="inline-block -rotate-180 translate-y-[4px]">V</span>
          <span>K</span>
          <span>U</span>
          <span>R</span>
          <span class="inline-block -rotate-180 translate-y-[4px]">V</span>
        </div>
      </div>

      <!-- 下方横线 -->
      <div class="w-full h-[2px] bg-[#8A6D67]"></div>
    </div>

    <!-- 3. 底部三栏联系方式 -->
    <div class="mt-[18px] flex items-center justify-between text-[#906E6C] text-[16px] font-['Montserrat',sans-serif] font-regular tracking-[0.02em] ">
      <a href="mailto:annausa0802@gmail.com" class="transition-opacity hover:opacity-70">
        contact me
      </a>
      <a href="mailto:annausa0802@gmail.com" class="transition-opacity hover:opacity-70">
        annausa0802@gmail.com
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-opacity hover:opacity-70"
      >
        GitHub
      </a>
    </div>
  </section>
</template>