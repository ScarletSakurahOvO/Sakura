// app/composables/useHomeAnim.ts
import gsap from 'gsap'

export function useHomeAnim(
  cardRef: Ref<HTMLElement | null>,
  frameRef: Ref<HTMLElement | null>
) {
  let moveCardX: gsap.QuickToFunc | null = null
  let moveCardY: gsap.QuickToFunc | null = null
  let moveFrameX: gsap.QuickToFunc | null = null
  let moveFrameY: gsap.QuickToFunc | null = null

  const handleMouseMove = (e: MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2
    const ny = (e.clientY / window.innerHeight - 0.5) * 2

    // 前方插画容器：正向 2D 视差位移
    moveCardX?.(nx * 14)
    moveCardY?.(ny * 10)

    // 后方线框：反方向 2D 视差位移
    moveFrameX?.(-nx * 14)
    moveFrameY?.(-ny * 10)
  }

  const handleMouseLeave = () => {
    moveCardX?.(0)
    moveCardY?.(0)
    moveFrameX?.(0)
    moveFrameY?.(0)
  }

  onMounted(() => {
    if (!cardRef.value || !frameRef.value) return

    moveCardX = gsap.quickTo(cardRef.value, 'x', { duration: 0.6, ease: 'power2.out' })
    moveCardY = gsap.quickTo(cardRef.value, 'y', { duration: 0.6, ease: 'power2.out' })
    moveFrameX = gsap.quickTo(frameRef.value, 'x', { duration: 0.6, ease: 'power2.out' })
    moveFrameY = gsap.quickTo(frameRef.value, 'y', { duration: 0.6, ease: 'power2.out' })

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
  })
}