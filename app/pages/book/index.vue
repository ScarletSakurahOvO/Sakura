<!-- app/pages/book/index.vue -->
<script setup lang="ts">
import { bookList } from '~/data/book'
import { useBookAnim } from '~/composables/useBookAnim'

const { setCardRef, setCoverRef, handleWheel } = useBookAnim(bookList.length)
</script>

<template>
  <main
    class="relative h-screen w-full overflow-hidden bg-[#F9F5EE]"
    @wheel.prevent="handleWheel"
  >
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