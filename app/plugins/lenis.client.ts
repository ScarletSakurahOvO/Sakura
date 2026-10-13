// app/plugins/lenis.client.ts
import Lenis from 'lenis' // 如果你安装的是老版本，这里可能是 '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // 注册 GSAP 滚动插件
  gsap.registerPlugin(ScrollTrigger)

  // 初始化 Lenis
  const lenis = new Lenis({
    duration: 1.2, // 滚动的持续时间，数值越大越顺滑/缓慢
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
    smoothWheel: true, // 开启鼠标滚轮平滑
  })

  // 关键步：每次 Lenis 滚动时，告诉 GSAP 更新它的 ScrollTrigger 位置
  lenis.on('scroll', ScrollTrigger.update)

  // 关键步：让 GSAP 的内置时钟来驱动 Lenis，保证动画丝滑同步
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  // 关闭 GSAP 的延迟平滑，避免与 Lenis 冲突
  gsap.ticker.lagSmoothing(0)

  // 提供到全局，这样你以后在任何组件里都能通过 $lenis 访问到它（比如用来暂停滚动）
  return {
    provide: {
      lenis
    }
  }
})