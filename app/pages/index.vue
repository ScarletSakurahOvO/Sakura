<script setup>
// 不需要写任何 import 语句，Nuxt 会自动导入 components 文件夹下的组件！
</script>

<template>
  <section 
    class="w-full min-h-screen bg-[#F9F5EE] 
           pt-[90px] px-[60px] pb-[40px] 
           flex flex-col justify-between box-border"
  >
    <!-- 导航栏 -->
    <nav 
      class="fixed top-0 left-0 right-0 w-full z-[1000] 
             flex justify-between items-center 
             bg-transparent backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] 
             px-[60px] py-[15px] box-border"
    >
      <div class="text-[36px] font-['Playfair_Display'] text-[#1a1a1a] font-normal">
        Sakura
      </div>
      <ul class="list-none flex gap-[40px] m-0 p-0">
        <li>
          <a 
            href="#" 
            class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] 
                   transition-opacity duration-200 ease hover:opacity-60"
          >Intro</a>
        </li>
        <li>
          <a 
            href="#" 
            class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] 
                   transition-opacity duration-200 ease hover:opacity-60"
          >about</a>
        </li>
        <li>
          <a 
            href="#" 
            class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] 
                   transition-opacity duration-200 ease hover:opacity-60"
          >Currently Reading</a>
        </li>
        <li>
          <a 
            href="#" 
            class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] 
                   transition-opacity duration-200 ease hover:opacity-60"
          >Currently Watching</a>
        </li>
        <li>
          <a 
            href="#" 
            class="text-[18px] font-['Playfair_Display'] no-underline text-[#1a1a1a] 
                   transition-opacity duration-200 ease hover:opacity-60"
          >Contact</a>
        </li>
      </ul>
    </nav>

    <!-- 主标题区域 -->
    <div class="grid grid-cols-[180px_1fr] my-auto pb-[40px] w-full box-border">
      <div class="col-start-2 row-start-1 relative">
        <p class="font-['Playfair_Display_SC'] text-[80px] font-normal text-[#1a1a1a] tracking-[1px] m-0 flex items-baseline">
          SKY ALL-KNOWING
          <span class="font-['Playfair_Display'] text-[20px] font-normal text-[#1a1a1a] ml-[8px] relative top-[-38px]">?</span>
        </p>
      </div>

      <div class="col-start-2 row-start-2 relative mt-[-30px]">
        <p class="absolute left-0 top-[60px] text-[20px] font-serif text-[#1a1a1a] m-0 whitespace-nowrap z-[2]">
          它不语，但包罗万象
        </p>
        
        <div class="relative ml-[250px] inline-block">
          <p class="absolute right-0 top-[-60px] text-[20px] font-serif text-[#1a1a1a] m-0 whitespace-nowrap">
            天空是否知晓一切
          </p>
          <p class="font-['Playfair_Display_SC'] text-[80px] font-normal text-[#5E3D3B] tracking-[1px] m-0 whitespace-nowrap">
            SILENT YET HOLDING ALL
          </p>
          
          <div class="relative left-[68px] mt-[22px] whitespace-nowrap">
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              Sometimes We all need the courage to face life.
            </p>
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              It takes a gentle heart to carry the weight of hard times
            </p>
            <p class="font-['Playfair_Display'] italic text-[20px] text-[#1a1a1a] mb-[6px] mt-0 mx-0 leading-[1.4]">
              No matter how slow your progress is, you are still moving forward
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 直接使用组件标签即可 -->
  <main class="w-full relative">
    <Intro />
    <Intro2 />
    <Intro3 />
    <About />
    <Books />
    <Anime />
    <Contact />
    <Foot />
  </main>
</template>

<style>
/* 仅保留 Google Fonts 引入 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>