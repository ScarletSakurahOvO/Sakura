// app/composables/useMenuAnim.ts
import gsap from 'gsap'

export function useMenuAnim() {
  // 进场前：白画布收拢在右侧边缘，左侧预览图略微收紧等待舒展
  const onBeforeEnter = (el: Element) => {
    const [backdrop, preview, panel] = Array.from(el.children) as HTMLElement[]
    if (!backdrop || !preview || !panel) return

    const navTexts = panel.querySelectorAll('.nav-item-text')
    const orderIndicator = panel.querySelector('.nav-order-indicator')

    gsap.set(backdrop, { opacity: 0 })
    gsap.set(preview, { opacity: 0, x: 36, scale: 0.96 })
    gsap.set(panel, { clipPath: 'inset(0% 0% 0% 100%)' })
    gsap.set(navTexts, { yPercent: 120, opacity: 0 })
    gsap.set(orderIndicator, { opacity: 0 })
  }

  // 打开：白画布从右边缘向左延伸铺展，掠过 "Home" 右侧时导航项与指示器同步呼出
  const onEnter = (el: Element, done: () => void) => {
    const [backdrop, preview, panel] = Array.from(el.children) as HTMLElement[]
    if (!backdrop || !preview || !panel) {
      done()
      return
    }

    const navTexts = Array.from(panel.querySelectorAll('.nav-item-text')) as HTMLElement[]
    const orderIndicator = panel.querySelector('.nav-order-indicator')

    gsap.killTweensOf([backdrop, preview, panel, ...navTexts, orderIndicator])

    // 计算 "Home" 右侧距离画布左边缘的距离（pl-[40px] + Home 文字宽度）
    const homeRightOffset = (navTexts[0]?.offsetWidth || 265) + 40
    const panelWidth = panel.offsetWidth || (window.innerWidth * 0.5 + 35)
    const remainingRatio = Math.min(0.85, Math.max(0.15, homeRightOffset / panelWidth))

    // 根据 panel 的 power3.out 曲线反推出延伸边到达该位置的时间点
    const triggerTime = 1.05 * (1 - Math.cbrt(remainingRatio))

    const tl = gsap.timeline({ onComplete: done })

    tl.to(backdrop, {
      opacity: 1,
      duration: 1.05,
      ease: 'power3.out'
    }, 0)

    tl.to(preview, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.05,
      ease: 'power3.out'
    }, 0)

    tl.to(panel, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.05,
      ease: 'power3.out'
    }, 0)

    tl.to(navTexts, {
      yPercent: 0,
      opacity: 1,
      duration: 0.65,
      ease: 'power3.out'
    }, triggerTime)

    tl.to(orderIndicator, {
      opacity: 1,
      duration: 0.65,
      ease: 'power3.out'
    }, triggerTime)
  }

  // 关闭：导航项与指示器先行淡出 + 白画布向右收拢回边缘 + 预览图与遮罩同步淡出
  const onLeave = (el: Element, done: () => void) => {
    const [backdrop, preview, panel] = Array.from(el.children) as HTMLElement[]
    if (!backdrop || !preview || !panel) {
      done()
      return
    }

    const navTexts = Array.from(panel.querySelectorAll('.nav-item-text'))
    const orderIndicator = panel.querySelector('.nav-order-indicator')

    gsap.killTweensOf([backdrop, preview, panel, ...navTexts, orderIndicator])

    const tl = gsap.timeline({ onComplete: done })

    tl.to([...navTexts, orderIndicator], {
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out'
    }, 0)

    tl.to(panel, {
      clipPath: 'inset(0% 0% 0% 100%)',
      duration: 1.05,
      ease: 'power3.inOut'
    }, 0)

    tl.to(preview, {
      opacity: 0,
      x: 24,
      scale: 0.97,
      duration: 1.05,
      ease: 'power3.inOut'
    }, 0)

    tl.to(backdrop, {
      opacity: 0,
      duration: 1.05,
      ease: 'power3.inOut'
    }, 0)
  }

  return { onBeforeEnter, onEnter, onLeave }
}