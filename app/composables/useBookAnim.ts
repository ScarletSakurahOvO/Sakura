// app/composables/useBookAnim.ts
import { ref, watch, onMounted, onUnmounted, type ComponentPublicInstance, type WatchStopHandle } from 'vue'
import gsap from 'gsap'

export function useBookAnim(itemCount: number) {
  const CARD_WIDTH = 550
  const CARD_GAP = 20
  const STEP = CARD_WIDTH + CARD_GAP // 单张画布步进距离：570px
  const TOTAL_WIDTH = STEP * itemCount // 循环总周长
  const MIN_BOUND = -2 * STEP // 屏幕外回收边界：-1140px
  const SCROLL_SPEED = 1.1 // 滚轮跟手灵敏度
  const LERP_FACTOR = 0.14 // 跟随顺滑度（0.08 ~ 0.25 之间）

  const cardRefs = ref<(HTMLElement | null)[]>([])
  const coverRefs = ref<(HTMLElement | null)[]>([])
  const isPageTransitioning = useState('isPageTransitioning', () => false)

  let targetOffset = 0
  let currentOffset = 0
  let isCanvasRevealing = true
  let revealTl: gsap.core.Timeline | null = null
  let stopTransitionWatch: WatchStopHandle | null = null

  // 收集灰色画布外层节点
  const setCardRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    if (el instanceof HTMLElement) {
      cardRefs.value[index] = el
    }
  }

  // 收集内部书封图片节点
  const setCoverRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    if (el instanceof HTMLElement) {
      coverRefs.value[index] = el
    }
  }

  const updateCardsPosition = () => {
    cardRefs.value.forEach((el, index) => {
      if (!el) return
      const rawX = index * STEP + currentOffset
      const wrappedX =
        ((((rawX - MIN_BOUND) % TOTAL_WIDTH) + TOTAL_WIDTH) % TOTAL_WIDTH) + MIN_BOUND
      el.style.transform = `translate3d(${wrappedX}px, 0, 0)`
    })
  }

  const handleWheel = (e: WheelEvent) => {
    // 入场动画未结束前拦截滚轮事件，避免卡片位移错乱
    if (isCanvasRevealing) return
    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX
    targetOffset -= delta * SCROLL_SPEED
  }

  const tick = () => {
    const diff = targetOffset - currentOffset
    if (Math.abs(diff) > 0.05) {
      currentOffset += diff * LERP_FACTOR
      updateCardsPosition()
    } else if (diff !== 0) {
      currentOffset = targetOffset
      updateCardsPosition()
    }
  }

  // 执行两段式串行入场动画：先完成灰色画布延伸，再启动书籍封面延伸
  const playRevealAnimation = () => {
    const cards = cardRefs.value.filter((el): el is HTMLElement => el !== null)
    const covers = coverRefs.value.filter((el): el is HTMLElement => el !== null)

    revealTl = gsap.timeline({
      onComplete: () => {
        isCanvasRevealing = false
      }
    })

    // 第一阶段：灰色画布从局部左侧向右侧（视觉往右上方）延伸显示
    revealTl.fromTo(
      cards,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.85,
        ease: 'power3.out'
      }
    )

    // 第二阶段：画布完全展开后，书籍封面从局部顶部向底部（视觉往右下方）延伸显示
    revealTl.fromTo(
      covers,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.50,
        ease: 'power3.out'
      }
    )
  }

  onMounted(() => {
    updateCardsPosition()
    gsap.ticker.add(tick)

    // 若正处于路由切换转场中，等待全局页面完全铺开后再启动入场动画；直接刷新则立即播放
    if (isPageTransitioning.value) {
      stopTransitionWatch = watch(isPageTransitioning, (transitioning) => {
        if (!transitioning) {
          stopTransitionWatch?.()
          stopTransitionWatch = null
          playRevealAnimation()
        }
      })
    } else {
      playRevealAnimation()
    }
  })

  onUnmounted(() => {
    stopTransitionWatch?.()
    revealTl?.kill()
    const targets = [...cardRefs.value, ...coverRefs.value].filter(
      (el): el is HTMLElement => el !== null
    )
    if (targets.length) {
      gsap.killTweensOf(targets)
    }
    gsap.ticker.remove(tick)
  })

  return {
    setCardRef,
    setCoverRef,
    handleWheel
  }
}