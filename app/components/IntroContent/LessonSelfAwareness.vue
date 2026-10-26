<script setup>
// 05 页面：提升自我认知
</script>

<template>
  <section 
    class="relative z-[2] w-full h-screen 
           bg-[#B4A7A7] flex flex-col box-border overflow-hidden"
  >
    <div class="w-full h-full mt-0 flex flex-col">
      <!-- 图片与右侧文字共同容器（向右偏移 150px，上下居中） -->
      <div 
        class="absolute top-1/2 left-[150px] -translate-y-1/2 
               flex items-stretch gap-[60px]"
      >
        <!-- 左侧图片部分 -->
        <div class="w-[36.67vw] aspect-[16/9] shrink-0">
          <img 
            src="/images/study5.webp" 
            alt="study5" 
            class="w-full h-full object-cover block"
          />
        </div>

        <!-- 右侧文字部分 -->
        <div class="relative flex flex-col justify-between">
          <!-- 背景超大数字 05：透明度设为 30% -->
          <span 
            class="absolute -left-[35px] bottom-0 translate-y-[4%] 
                   font-['Playfair_Display_SC'] text-[600px] font-normal 
                   text-white opacity-30 leading-none select-none pointer-events-none z-0"
          >
            05
          </span>

          <!-- 顶部标题 -->
          <p class="relative z-10 font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
            提升自我认知
          </p>
          
          <!-- 底部名言与作者包裹整体 -->
          <div class="relative z-10 flex flex-col">
            <p class="font-['Playfair_Display'] text-[20px] font-normal text-black leading-[1.6] m-0">
              直到你将潜意识意识化，否则它会引导你的人生并称之为命运
            </p>
            <p class="font-['Playfair_Display'] text-[20px] italic text-[#9B7D7B] m-0 mt-[16px]">
              —— Carl Jung
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>