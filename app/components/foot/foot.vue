<template>
  <section 
    class="w-full h-screen box-border bg-[#ECECEC] font-['Montserrat']
           fixed bottom-0 left-0 z-[-1] flex flex-col justify-end px-[60px] md:px-[80px] pb-[60px]"
  >
    <!-- 上方内容区：左对齐顶齐横线起点 -->
    <div class="w-full flex flex-col items-start mb-[36px]">
      <!-- 标题：40px，Montserrat，主题色 -->
      <h2 class="font-['Montserrat'] text-[40px] font-normal text-[#8C7472] leading-tight mb-[20px] select-none">
        你有什么好事一起分享吗
      </h2>

      <!-- 正文：20px，Montserrat，两行文本 -->
      <div class="font-['Montserrat'] text-[20px] font-light text-[#222222] leading-[1.6] mb-[28px]">
        <p>一个新想法，一首最近常听的歌，或者单纯打个招呼。</p>
        <p>Drop a thought, share a track, or just say hi</p>
      </div>

      <!-- 操作按钮：调整为 185*64，背景色 #F8F5EE，字号 24px，全居中 -->
      <a 
        href="mailto:annausa0802@gmail.com"
        class="w-[185px] h-[64px] bg-[#F8F5EE] flex items-center justify-center 
               text-[24px] font-light text-[#8C7472] select-none 
               hover:opacity-80 transition-opacity duration-200"
      >
        contact me
      </a>
    </div>

    <!-- 第一条横线（上分割线：延展贯穿） -->
    <div class="w-full h-[1.5px] bg-[#8C7472]"></div>

    <!-- SAKURA 字母主视觉区域：约束在 78% 宽度的视线区，间距均等，底部与线条精准咬合 -->
    <div class="w-full flex justify-center items-end mb-[-29px] select-none pointer-events-none">
      <div class="w-[78%] flex justify-between items-end">
        
        <!-- 字母 S：独立容器与实体 -->
        <div class="overflow-hidden flex items-end">
          <span class="inline-block font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            S
          </span>
        </div>

        <!-- 字母 A（V 翻转 180°）：外层槽位整体下沉 4px，底边严丝合缝压线 -->
        <div class="overflow-hidden flex items-end translate-y-[4px]">
          <span class="inline-block rotate-180 font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            V
          </span>
        </div>

        <!-- 字母 K：独立容器与实体 -->
        <div class="overflow-hidden flex items-end">
          <span class="inline-block font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            K
          </span>
        </div>

        <!-- 字母 U：独立容器与实体 -->
        <div class="overflow-hidden flex items-end">
          <span class="inline-block font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            U
          </span>
        </div>

        <!-- 字母 R：独立容器与实体 -->
        <div class="overflow-hidden flex items-end">
          <span class="inline-block font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            R
          </span>
        </div>

        <!-- 字母 A（V 翻转 180°）：外层槽位整体下沉 4px，底边严丝合缝压线 -->
        <div class="overflow-hidden flex items-end translate-y-[4px]">
          <span class="inline-block rotate-180 font-['Montserrat'] text-[200px] font-normal text-[#8C7472] leading-none">
            V
          </span>
        </div>

      </div>
    </div>

    <!-- 第二条横线（下分割线：字母平底紧贴此线） -->
    <div class="w-full h-[1.5px] bg-[#8C7472] relative z-10"></div>

    <!-- 底部核心联系方式栏：三等分网格，左右紧贴横线端点，邮箱正中对齐，全量应用 Montserrat -->
    <div class="w-full grid grid-cols-3 items-center pt-[12px] font-['Montserrat'] text-[13px] text-[#8C7472]">
      
      <!-- 左侧：与横线左端对齐 -->
      <div class="text-left font-['Montserrat'] font-light tracking-[0.08em] uppercase select-none">
        CONTACT ME
      </div>

      <!-- 中间：严格绝对居中 -->
      <div class="text-center">
        <a 
          href="mailto:annausa0802@gmail.com" 
          class="font-['Montserrat'] font-light tracking-[0.04em] hover:opacity-70 transition-opacity duration-200"
        >
          annausa0802@gmail.com
        </a>
      </div>

      <!-- 右侧：与横线右端对齐 -->
      <div class="text-right">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="font-['Montserrat'] font-light tracking-[0.04em] hover:opacity-70 transition-opacity duration-200"
        >
          GitHub
        </a>
      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

/* 全局兜底：确保链接与子标签强制优先使用 Montserrat，中文字体继承系统无衬线字体 */
section, section * {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}
</style>