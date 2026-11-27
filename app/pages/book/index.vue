<!-- app/pages/book/index.vue -->
<script setup lang="ts">
import { bookList } from '~/data/book'
import { useBookAnim } from '~/composables/useBookAnim'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
    }
  ]
})

const { setCardRef, setCoverRef, leftContentRef, displayIndex, handleWheel } = useBookAnim(
  bookList.length
)

const currentBook = computed(() => bookList[displayIndex.value] ?? bookList[0])
</script>

<template>
  <main
    class="relative h-screen w-full overflow-hidden bg-[#F9F5EE]"
    @wheel.prevent="handleWheel"
  >

    <div
      ref="leftContentRef"
      class="absolute left-[60px] top-[140px] z-10 font-['Montserrat']"
    >
      <!-- 左侧标题 -->
      <p class="text-[64px] font-normal leading-none text-black">
        {{ currentBook?.title }}
      </p>

      <!-- 左侧自勉 -->
      <p class="mt-[18px] max-w-[440px] text-[20px] font-normal leading-normal text-black">
        {{ currentBook?.intro }}
      </p>

      <!-- 左侧状态 -->
      <div class="mt-[60px] grid grid-cols-[auto_1fr] items-center gap-x-[40px] gap-y-[32px]">
        <span class="text-[20px] font-normal leading-none text-[#969695]">类型</span>
        <div class="flex items-center gap-x-[12px] text-[20px] font-normal leading-none text-black">
          <span v-for="tag in currentBook?.tags" :key="tag">{{ tag }}</span>
        </div>

        <span class="text-[20px] font-normal leading-none text-[#969695]">阅读时间</span>
        <span class="text-[20px] font-normal leading-none text-black">
          {{ currentBook?.readDate }}
        </span>

        <span class="text-[20px] font-normal leading-none text-[#969695]">进度</span>
        <div class="flex items-center gap-x-[8px]">
          <div class="h-[15px] w-[137px] border border-[#856B64]">
            <div
              class="h-full bg-[#856B64] transition-all duration-300"
              :style="{ width: `${currentBook?.progress ?? 0}%` }"
            ></div>
          </div>
          <span class="text-[15px] font-normal leading-none text-[#969695]">
            {{ currentBook?.progress ?? 0 }}%
          </span>
        </div>
      </div>

      <!-- 左侧个人理解 -->
      <div
        v-if="currentBook?.excerpt?.some(Boolean)"
        class="mt-[47px] text-[20px] font-normal leading-normal text-black"
      >
        <p v-for="(line, index) in currentBook?.excerpt" :key="index">
          {{ line }}
        </p>
      </div>
    </div>

    <div
      class="pointer-events-none absolute -bottom-[480px] right-[235px] h-[760px] w-[550px] origin-top-left -rotate-[50deg]"
    >
      <!-- 合体后的单张书籍展示画布 -->
      <div
        v-for="(book, index) in bookList"
        :key="book.id"
        :ref="(el) => setCardRef(el, index)"
        style="clip-path: inset(0 100% 0 0)"
        class="absolute left-0 top-0 flex h-[760px] w-[550px] items-center justify-center bg-[#E3E2DF] will-change-transform"
      >
        <img
          :ref="(el) => setCoverRef(el, index)"
          :src="book.cover"
          :alt="book.title"
          draggable="false"
          style="clip-path: inset(0 0 100% 0)"
          class="h-[680px] w-[470px] select-none object-cover"
        />
      </div>
    </div>
  </main>
</template>