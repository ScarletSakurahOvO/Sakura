<script setup>
import Arrow from './arrow.vue';
</script>

<template>
  <section 
    class="w-full min-h-screen box-border bg-[#F9F5EE] 
           pt-[68px] px-[60px] pb-[40px] relative z-[2] mb-[60vh]"
  >
    <!-- 双列 Grid 布局内容 -->
    <div class="grid grid-cols-[500px_1fr] gap-x-[250px]">
      <div class="flex flex-col">
        <h2 class="font-['Playfair_Display'] text-[96px] font-normal text-[#1a1a1a] m-0 tracking-[1px] whitespace-nowrap leading-[1.1]">
          Contact me
        </h2>
        <div class="grid grid-cols-[220px_1fr] items-center mt-[25px]">
          <div class="flex items-center">
            <Arrow />
          </div>
          <div class="flex items-center">
            <p class="font-serif text-[20px] text-[#1a1a1a] m-0 leading-[24px]">
              感谢你能看到这里
            </p>
          </div>
        </div>
        <div class="mt-[72px] ml-[220px] text-[16px] font-serif text-[#1a1a1a] leading-[1.6]">
          <p class="m-0">期待收到你的留言！</p>
          <p class="m-0">无论是优秀动漫、网站建议，</p>
          <p class="m-0">还是随便聊聊，都欢迎留言给我。</p>
        </div>
      </div>

      <div class="pt-[130px]">
        <form class="flex flex-col">
          <div class="flex flex-col w-[405px]">
            <label class="text-[16px] text-[#1a1a1a] mb-[25px] font-serif leading-[24px]">
              你的名字 / <span class="font-['Playfair_Display'] font-normal">your name</span>
            </label>
            <input type="text" class="w-full border-none border-b border-[#1a1a1a] bg-transparent outline-none pb-[8px] text-[16px] text-[#1a1a1a] box-border" />
          </div>

          <div class="flex flex-col w-[405px] mt-[40px]">
            <label class="text-[16px] text-[#1a1a1a] mb-[25px] font-serif leading-[24px]">
              你的邮箱 / <span class="font-['Playfair_Display'] font-normal">your email</span>
            </label>
            <input type="email" class="w-full border-none border-b border-[#1a1a1a] bg-transparent outline-none pb-[8px] text-[16px] text-[#1a1a1a] box-border" />
          </div>

          <div class="flex flex-col w-[405px] mt-[40px]">
            <label class="text-[16px] text-[#1a1a1a] mb-[80px] font-serif leading-[24px]">
              有什么想和我一起聊聊的 / <span class="font-['Playfair_Display'] font-normal">Anything you'd like to talk about?</span>
            </label>
            <input type="text" class="w-full border-none border-b border-[#1a1a1a] bg-transparent outline-none pb-[8px] text-[16px] text-[#1a1a1a] box-border" />
          </div>

          <div class="grid grid-cols-[405px_auto] items-center gap-[40px] mt-[80px]">
            <p class="w-[405px] text-right text-[16px] text-[#5E3D3B] font-serif m-0">
              收到留言后，我会尽快在 24 小时内回复你。
            </p>
            <button 
              type="submit" 
              class="w-[130px] h-[130px] rounded-full bg-[#8C7370] text-white border-none 
                     text-[18px] font-serif cursor-pointer flex items-center justify-center shrink-0"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>