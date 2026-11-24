// app/composables/useImageAnim.ts
import gsap from 'gsap'

export function useImageAnim() {
  // 新图进场：遮罩从 50px 向外展开 + 淡入 + 画面从 1.07 收缩回 1
  const onEnter = (el: Element, done: () => void) => {
    const media = el.firstElementChild as HTMLElement | null
    const tl = gsap.timeline({ onComplete: done })

    tl.fromTo(
      el,
      { clipPath: 'inset(50px 50px 50px 50px)', opacity: 0 },
      { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.95, ease: 'power3.out' },
      0
    ).to(
      el,
      { opacity: 1, duration: 0.45, ease: 'power2.out' },
      0
    )

    if (media) {
      tl.fromTo(
        media,
        { scale: 1.07 },
        { scale: 1, duration: 0.95, ease: 'power3.out' },
        0
      )
    }
  }

  // 旧图退场：整体微微缩小后退（0.94 倍）并同步淡出
  const onLeave = (el: Element, done: () => void) => {
    const media = el.firstElementChild as HTMLElement | null
    gsap.killTweensOf([el, media])

    const tl = gsap.timeline({ onComplete: done })

    tl.to(
      el,
      { opacity: 0, duration: 0.85, ease: 'power2.out' },
      0
    )

    if (media) {
      tl.to(
        media,
        { scale: 0.94, duration: 0.95, ease: 'power3.out' },
        0
      )
    }
  }

  return { onEnter, onLeave }
}