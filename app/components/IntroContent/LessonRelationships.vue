<script setup>
// 04 页面：处理复杂人际关系
</script>

<template>
  <section 
    class="relative z-[2] w-full h-screen 
           bg-[#D2C9C9] flex flex-col box-border overflow-hidden"
  >
    <div class="w-full h-full mt-0 flex flex-col">
      <!-- 图片与右侧文字共同容器（向右偏移 150px，上下居中） -->
      <div 
        class="absolute top-1/2 left-[150px] -translate-y-1/2 
               flex items-stretch gap-[60px]"
      >
        <!-- 左侧图片部分：加上 overflow-hidden 配合内部图片的 scale 实现无损微裁切 -->
        <div class="w-[36.67vw] aspect-[16/9] shrink-0 overflow-hidden">
          <img 
            src="/images/study4.webp" 
            alt="study4" 
            class="w-full h-full object-cover block scale-[1.02] select-none"
          />
        </div>

        <!-- 右侧文字部分 -->
        <div class="relative flex flex-col justify-between">
          <!-- 背景超大数字 04：透明度设为 30% -->
          <span 
            class="absolute -left-[35px] bottom-0 translate-y-[4%] 
                   font-['Playfair_Display_SC'] text-[600px] font-normal 
                   text-white opacity-30 leading-none select-none pointer-events-none z-0"
          >
            04
          </span>

          <!-- 顶部标题 -->
          <p class="relative z-10 font-['Playfair_Display'] text-[40px] font-normal text-black leading-[1.2] m-0">
            处理复杂人际关系
          </p>
          
          <!-- 底部名言与作者包裹整体 -->
          <div class="relative z-10 flex flex-col">
            <p class="font-['Playfair_Display'] text-[20px] font-normal text-black leading-[1.6] m-0">
              我不是一种与特定人的关系，而是一种态度一种决定了一个人与整个世界的关系的性格取向
            </p>
            <p class="font-['Playfair_Display'] text-[20px] italic text-[#9B7D7B] m-0 mt-[16px]">
              —— Erich Fromm
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