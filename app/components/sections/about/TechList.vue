<template>
  <section
    class="w-full h-screen bg-[#B4A7A7] text-[#EAE5E5] font-['Google_Sans_Flex','PingFang_SC','Noto_Sans_SC',sans-serif] select-none overflow-hidden"
  >
    <!-- 直接用 pt-[44vh] 让第一行（主视线焦点）落在浏览器视口正中央，其余三行自然向下延伸 -->
    <div class="w-full px-[60px] pt-[44vh] flex items-start justify-between">
      <!-- 第一列 -->
      <div class="relative ml-[120px]">
        <span class="absolute right-full mr-[28px] top-[0px] flex items-center text-white">
          <Triangle class="w-[70px] h-[70px]" />
        </span>

        <ul
          class="flex flex-col items-center gap-y-[32px] text-[64px] font-medium leading-none tracking-[0.02em]"
        >
          <li class="text-white">
            <span>网格与界面</span>
          </li>
          <li class="text-[#EAE5E5]/55">
            <span>排版</span>
          </li>
          <li class="text-[#EAE5E5]/55">
            <span>数据联动</span>
          </li>
          <li class="text-[#EAE5E5]/55">
            <span>NUXT框架</span>
          </li>
        </ul>
      </div>

      <!-- 第二列：与“网格与界面”字头齐平 -->
      <p class="-mt-[4px] text-[16px] font-normal text-white/95">
        <span class="block">我常用的设计和开发方式</span>
        <span class="block">将我脑海中的想法展示在网页中</span>
      </p>

      <!-- 第三列：与前两列字头齐平 -->
      <span class="mt-[1px] text-[16px] font-normal leading-none tracking-[0.02em] text-white/90">
        My Thoughts
      </span>
    </div>
  </section>
</template>