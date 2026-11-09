import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'

export default defineNuxtPlugin(() => {
  // 1. 初始化 Lenis 实例
  const lenis = new Lenis({
    duration: 1.2, // 滚动缓动时长，数值越大越顺滑
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动曲线
    smoothWheel: true,
  })

  // 2. 核心：用 GSAP 的 ticker 同步驱动 Lenis，避免双重帧循环导致的动画撕裂
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  // 3. 关闭 GSAP ticker 的延迟平滑，保证拖拽与滚动无迟滞
  gsap.ticker.lagSmoothing(0)

  // 4. 将实例注入全局，后续可通过 useNuxtApp().$lenis 调用
  return {
    provide: {
      lenis,
    },
  }
})