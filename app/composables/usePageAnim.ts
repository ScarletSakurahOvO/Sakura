//app/composables/usePageAnim.ts
import gsap from 'gsap'

export function usePageAnim() {
  const isPageTransitioning = useState('isPageTransitioning', () => false)

  // 进场前：新页面先以 86% 比例、全透明状态叠在旧页面上方
  const onBeforeEnter = (el: Element) => {
    isPageTransitioning.value = true
    gsap.killTweensOf(el)
    gsap.set(el, {
      position: 'fixed',
      inset: 0,
      zIndex: 2,
      scale: 0.86,
      opacity: 0,
      transformOrigin: 'center center',
      willChange: 'transform, opacity'
    })
  }

  // 进场：先缓慢微微淡入显现轮廓（0 ~ 0.7s），随后从中心舒展张开至 100%（0.65s ~ 1.7s）
  const onEnter = (el: Element, done: () => void) => {
    gsap.killTweensOf(el)
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(el, {
          clearProps: 'position,inset,zIndex,transform,opacity,transformOrigin,willChange'
        })
        isPageTransitioning.value = false
        done()
      }
    })

    tl.to(el, {
      opacity: 0.22,
      duration: 0.7,
      ease: 'power2.out'
    }, 0)

    tl.to(el, {
      scale: 1,
      opacity: 1,
      duration: 1.05,
      ease: 'power3.out'
    }, 0.65)
  }

  // 离场：旧页面缓慢向中心缩小至 95% 露出白底，并定格保持到新页面完全铺开
  const onLeave = (el: Element, done: () => void) => {
    gsap.killTweensOf(el)
    gsap.set(el, {
      position: 'fixed',
      inset: 0,
      zIndex: 1,
      transformOrigin: 'center center',
      willChange: 'transform'
    })

    const tl = gsap.timeline({ onComplete: done })
    tl.to(el, {
      scale: 0.95,
      duration: 0.7,
      ease: 'power2.out'
    }, 0)
    tl.to({}, { duration: 1.0 })
  }

  const pageTransition = {
    mode: 'default' as const,
    css: false,
    onBeforeEnter,
    onEnter,
    onLeave
  }

  return {
    isPageTransitioning,
    pageTransition
  }
}