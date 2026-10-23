<template>
  <section 
    class="w-full min-h-screen bg-[#F9F5EE] box-border 
           pt-[40px] px-[80px] pb-[80px] overflow-x-hidden"
  >
    <div class="w-full flex flex-col">
      <!-- 页面顶部大标题 -->
      <p 
        class="font-['Playfair_Display'] text-[96px] font-normal text-black 
               m-0 mb-[50px] leading-[1.1] whitespace-nowrap"
      >
        Currently Watching
      </p>
      
      <!-- 四宫格卡片列表区域 -->
      <div class="grid grid-cols-2 gap-[40px] w-full">
        
        <!-- 卡片 1：天使降临到我身边 -->
        <div class="bg-[#ECE7DF] flex flex-col box-border overflow-hidden">
          <div class="w-full aspect-[16/9] overflow-hidden">
            <img 
              src="/images/anime.webp" 
              alt="天使降临到我身边" 
              class="w-full h-full object-cover block"
            />
          </div>
          <div class="p-[24px_28px] flex flex-col gap-[16px]">
            <div class="flex justify-between items-center border-b border-[#2c2c2c] pb-[14px]">
              <p class="text-[20px] font-medium text-black m-0">天使降临到我身边</p>
              <p class="text-[16px] text-[#2c2c2c] m-0">共12集</p>
            </div>
            <div class="flex flex-col gap-[12px]">
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数</p>
                <p class="text-[#555555] m-0">第5集</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数进度</p>
                <p class="text-[#555555] m-0">5:55 / 24:00</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">番剧总进度</p>
                <p class="text-[#555555] m-0 w-[120px] h-[6px] bg-[#d4cec4] rounded-[3px] overflow-hidden flex">
                  <span class="w-[40%] h-full bg-[#b0a89d]"></span>
                </p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">状态</p>
                <p class="text-[#555555] m-0 flex items-center">
                  <span class="inline-block w-[6px] h-[6px] rounded-full mr-[6px] bg-[#888888]"></span>离线
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 2：摇曳露营 -->
        <div class="bg-[#ECE7DF] flex flex-col box-border overflow-hidden">
          <div class="w-full aspect-[16/9] overflow-hidden">
            <img 
              src="/images/anime2.webp" 
              alt="摇曳露营" 
              class="w-full h-full object-cover block"
            />
          </div>
          <div class="p-[24px_28px] flex flex-col gap-[16px]">
            <div class="flex justify-between items-center border-b border-[#2c2c2c] pb-[14px]">
              <p class="text-[20px] font-medium text-black m-0">摇曳露营</p>
              <p class="text-[16px] text-[#2c2c2c] m-0">共12集</p>
            </div>
            <div class="flex flex-col gap-[12px]">
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数</p>
                <p class="text-[#555555] m-0">第5集</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数进度</p>
                <p class="text-[#555555] m-0">5:55 / 24:00</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">番剧总进度</p>
                <p class="text-[#555555] m-0 w-[120px] h-[6px] bg-[#d4cec4] rounded-[3px] overflow-hidden flex">
                  <span class="w-[40%] h-full bg-[#b0a89d]"></span>
                </p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">状态</p>
                <p class="text-[#555555] m-0 flex items-center">
                  <span class="inline-block w-[6px] h-[6px] rounded-full mr-[6px] bg-[#52c41a]"></span>在线观看
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 3：时光流逝，饭菜依旧美味 -->
        <div class="bg-[#ECE7DF] flex flex-col box-border overflow-hidden">
          <div class="w-full aspect-[16/9] overflow-hidden">
            <img 
              src="/images/anime3.webp" 
              alt="时光流逝，饭菜依旧美味" 
              class="w-full h-full object-cover block"
            />
          </div>
          <div class="p-[24px_28px] flex flex-col gap-[16px]">
            <div class="flex justify-between items-center border-b border-[#2c2c2c] pb-[14px]">
              <p class="text-[20px] font-medium text-black m-0">时光流逝，饭菜依旧美味</p>
              <p class="text-[16px] text-[#2c2c2c] m-0">共12集</p>
            </div>
            <div class="flex flex-col gap-[12px]">
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数</p>
                <p class="text-[#555555] m-0">第5集</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数进度</p>
                <p class="text-[#555555] m-0">5:55 / 24:00</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">番剧总进度</p>
                <p class="text-[#555555] m-0 w-[120px] h-[6px] bg-[#d4cec4] rounded-[3px] overflow-hidden flex">
                  <span class="w-[40%] h-full bg-[#b0a89d]"></span>
                </p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">状态</p>
                <p class="text-[#555555] m-0 flex items-center">
                  <span class="inline-block w-[6px] h-[6px] rounded-full mr-[6px] bg-[#888888]"></span>离线
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 4：悠哉日常大王 第三季 -->
        <div class="bg-[#ECE7DF] flex flex-col box-border overflow-hidden">
          <div class="w-full aspect-[16/9] overflow-hidden">
            <img 
              src="/images/anime4.webp" 
              alt="悠哉日常大王 第三季" 
              class="w-full h-full object-cover block"
            />
          </div>
          <div class="p-[24px_28px] flex flex-col gap-[16px]">
            <div class="flex justify-between items-center border-b border-[#2c2c2c] pb-[14px]">
              <p class="text-[20px] font-medium text-black m-0">悠哉日常大王 第三季</p>
              <p class="text-[16px] text-[#2c2c2c] m-0">共12集</p>
            </div>
            <div class="flex flex-col gap-[12px]">
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数</p>
                <p class="text-[#555555] m-0">第5集</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">当前集数进度</p>
                <p class="text-[#555555] m-0">5:55 / 24:00</p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">番剧总进度</p>
                <p class="text-[#555555] m-0 w-[120px] h-[6px] bg-[#d4cec4] rounded-[3px] overflow-hidden flex">
                  <span class="w-[40%] h-full bg-[#b0a89d]"></span>
                </p>
              </div>
              <div class="flex justify-between items-center text-[14px]">
                <p class="text-[#333333] m-0">状态</p>
                <p class="text-[#555555] m-0 flex items-center">
                  <span class="inline-block w-[6px] h-[6px] rounded-full mr-[6px] bg-[#888888]"></span>离线
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
/* 引入 Google Fonts 的 Playfair Display 字体 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>