import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // 1. 注册 GSAP 插件
  gsap.registerPlugin(ScrollTrigger)

  // 2. 初始化 Lenis
  const lenis = new Lenis({
    duration: 2.0,          // 保持你喜欢的 2.0 强阻尼感
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // 3. 完美双向绑定
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
})