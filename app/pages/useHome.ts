import { ref, watch, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function useHome() {
  // 定义图片引用的 ref
  const imageRef = ref<HTMLImageElement | null>(null)

  let xTo: gsap.QuickToFunc | null = null
  let yTo: gsap.QuickToFunc | null = null

  // 鼠标移动处理函数
  const handleMouseMove = (e: MouseEvent) => {
    // 如果动画器还没初始化好，直接跳过
    if (!xTo || !yTo) return
    
    const { innerWidth, innerHeight } = window
    const xPercent = e.clientX / innerWidth - 0.5
    const yPercent = e.clientY / innerHeight - 0.5

    xTo(-xPercent * 40)
    yTo(-yPercent * 40)
  }

  // 使用 watch 监听 ref，确保 DOM 元素一挂载就立刻初始化 GSAP，解决时机不对的问题
  watch(imageRef, (el) => {
    if (el) {
      xTo = gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" })
      yTo = gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" })
    }
  })

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    imageRef
  }
}