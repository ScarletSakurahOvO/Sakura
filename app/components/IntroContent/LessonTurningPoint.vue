<script setup>
// 03 页面：面对生活转折
</script>

<template>
  <section 
    class="relative z-[2] w-full h-screen 
           bg-[#DFDBDB] flex flex-col box-border overflow-hidden"
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
            src="/images/study3.webp" 
            alt="study3" 
            class="w-full h-full object-cover block"
          />
        </div>

        <!-- 右侧文字部分 -->
        <div class="relative flex flex-col justify-between">
          <!-- 背景超大数字 03：透明度设为 60% -->
          <span 
            class="absolute -left-[35px] bottom-0 translate-y-[4%] 
                   font-['Playfair_Display_SC'] text-[600px] font-normal 
                   text-white opacity-60 leading-none select-none pointer-events-none z-0"
          >
            03
          </span>

          <!-- 顶部标题 -->
          <p class="relative z-10 font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
            面对生活转折
          </p>
          
          <!-- 底部名言与作者包裹整体 -->
          <div class="relative z-10 flex flex-col">
            <p class="font-['Playfair_Display'] text-[20px] font-normal text-black leading-[1.6] m-0">
              树木若想长至天堂，它的根必须扎入地
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