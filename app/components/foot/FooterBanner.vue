<!-- foot/FooterBanner.vue -->
<script setup>
defineProps({
  buttonText: {
    type: String,
    default: 'contact me'
  },
  email: {
    type: String,
    required: true
  },
  githubUrl: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <footer class="w-full shrink-0">
    <!-- 双线字标容器：两条横线间距 276px -->
    <div class="w-full h-[250px] border-t border-b border-[#8C6D67] flex items-end justify-center overflow-hidden">
      <!-- 横线内文字：250px、字间距 60px、Montserrat、底部与横线零距离贴合 -->
      <div
        class="flex items-baseline justify-center gap-[60px] font-['Montserrat',sans-serif] text-[250px] font-normal leading-[0.71] text-[#8C6D67] select-none"
        aria-label="SAKURA"
      >
        <span>S</span>
        <span class="inline-block rotate-180 translate-y-[4px]">V</span>
        <span>K</span>
        <span>U</span>
        <span>R</span>
        <span class="inline-block rotate-180 translate-y-[4px]">V</span>
      </div>
    </div>

    <!-- 底部三栏信息 -->
    <div class="mt-[16px] flex items-center justify-between text-[15px] text-[#8E736E]">
      <button type="button" class="hover:text-[#5E3D3B] transition-colors cursor-pointer">
        {{ buttonText }}
      </button>

      <a :href="`mailto:${email}`" class="hover:text-[#5E3D3B] transition-colors">
        {{ email }}
      </a>

      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-[#5E3D3B] transition-colors"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>