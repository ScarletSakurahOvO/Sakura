<template>
  <!-- 1. 将高度从 h-[550px] 下调至 h-[543px]，使米色块顶边刚好落在图片斜切起点 -->
  <section
    class="relative z-10 w-full h-[541px] flex items-end select-none font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif]"
  >
    <!-- 左侧：米色板块 -->
    <div class="w-[538px] h-full shrink-0 bg-[#F9F5EE] pl-[136px] flex flex-col justify-center">
      <!-- 双层错位主标题 -->
      <div class="relative inline-block leading-none">
        <span
          aria-hidden="true"
          class="absolute top-[6px] left-[8px] text-[64px] font-medium tracking-[0.04em] text-[#DFD5CD]"
        >
          节制
        </span>
        <h2 class="relative text-[64px] font-medium tracking-[0.04em] text-[#8A6D67]">
          节制
        </h2>
      </div>

      <!-- 副标题 -->
      <p class="mt-[18px] text-[12px] font-normal tracking-[0.02em] text-[#333333]">
        这是我的七美德之首，也是我的做事风格
      </p>
    </div>

    <!-- 中间：Figma 导出的切角图片条（162 × 765） -->
    <img
      src="/images/about/about6.webp"
      alt="节制"
      class="w-[162px] h-[765px] shrink-0 block"
    />

    <!-- 右侧：纯白画布 -->
    <div
      class="flex-1 h-[765px] bg-white pl-[240px] pt-[222px] text-[24px] font-normal leading-[1.5] tracking-[0.02em] text-[#2C2C2C]"
    >
      <div class="space-y-[52px] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] font-light">
        <p>
          <span class="block">
            <span>很简单的事情我都会尝试去做</span>
          </span>
          <span class="block">
            <span>但事情一旦开始就会变得很复杂</span>
          </span>
        </p>

        <p>
          <span class="block">
            <span>但至少我会去尝试</span>
          </span>
          <span class="block">
            <span>然后将多余的东西去掉</span>
          </span>
          <span class="block">
            <span>可能对我来说内容太多了，放一些回去就好啦，化繁为简</span>
          </span>
        </p>

        <p>
          <span class="block">
            <span>我喜欢把事情做的非常简单</span>
          </span>
          <span class="block">
            <span>清晰有规划地去做</span>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>