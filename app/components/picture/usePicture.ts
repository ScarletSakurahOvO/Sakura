import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

// 单个区块的逻辑尺寸（根据当前 7 张图的分布范围定制）
const CHUNK_W = 6600
const CHUNK_H = 1600

interface ChunkItem {
  id: string
  col: number
  row: number
}

interface TrackedChunk {
  el: HTMLElement
  col: number
  row: number
}

export function usePicture() {
  const stageRef = ref<HTMLElement | null>(null)
  const viewportRef = ref<HTMLElement | null>(null)
  const isDragging = ref(false)

  // 动力学平滑坐标
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0

  // 记录指针按下瞬间的基准坐标
  let pointerStartX = 0
  let pointerStartY = 0
  let dragStartTargetX = 0
  let dragStartTargetY = 0
  let hasCaptured = false

  // 3x3 九宫格区块网格配置（中心为 [0, 0]，周边环绕 8 个区块）
  const chunkList: ChunkItem[] = [
    { id: 'c-0', col: -1, row: -1 },
    { id: 'c-1', col:  0, row: -1 },
    { id: 'c-2', col:  1, row: -1 },
    { id: 'c-3', col: -1, row:  0 },
    { id: 'c-4', col:  0, row:  0 },
    { id: 'c-5', col:  1, row:  0 },
    { id: 'c-6', col: -1, row:  1 },
    { id: 'c-7', col:  0, row:  1 },
    { id: 'c-8', col:  1, row:  1 }
  ]

  let trackedChunks: TrackedChunk[] = []

  // 回环区间：跨越 3 个完整区块的距离，确保瞬移发生在屏幕 2000px 之外的视线盲区
  const wrapX = gsap.utils.wrap(-1.5 * CHUNK_W, 1.5 * CHUNK_W)
  const wrapY = gsap.utils.wrap(-1.5 * CHUNK_H, 1.5 * CHUNK_H)

  // 初始化获取 9 个区块的 DOM 节点引用
  const initTrackedChunks = () => {
    if (!stageRef.value) return
    const children = Array.from(stageRef.value.children) as HTMLElement[]

    trackedChunks = children.map((el, index) => {
      const config = chunkList[index]
      return {
        el,
        col: config?.col ?? 0,
        row: config?.row ?? 0
      }
    })
  }

  // 1. 指针按下
  const handlePointerDown = (e: PointerEvent) => {
    isDragging.value = true
    hasCaptured = false
    pointerStartX = e.clientX
    pointerStartY = e.clientY
    dragStartTargetX = targetX
    dragStartTargetY = targetY
  }

  // 2. 指针移动
  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.value) return
    const deltaX = e.clientX - pointerStartX
    const deltaY = e.clientY - pointerStartY

    // 位移超过 5px 确认为拖拽漫游，加锁捕获指针并阻止原生 click 误触
    if (!hasCaptured && Math.hypot(deltaX, deltaY) > 5) {
      const target = e.currentTarget as HTMLElement | null
      if (target?.setPointerCapture) {
        target.setPointerCapture(e.pointerId)
        hasCaptured = true
      }
    }

    targetX = dragStartTargetX + deltaX
    targetY = dragStartTargetY + deltaY
  }

  // 3. 指针松开 / 取消
  const handlePointerUp = (e: PointerEvent) => {
    if (!isDragging.value) return
    isDragging.value = false

    if (hasCaptured) {
      const target = e.currentTarget as HTMLElement | null
      if (target?.releasePointerCapture) {
        target.releasePointerCapture(e.pointerId)
      }
      hasCaptured = false
    }
  }

  // 4. GSAP 逐帧动力学与九宫格无限回环
  const updatePhysics = () => {
    const ease = 0.075
    currentX += (targetX - currentX) * ease
    currentY += (targetY - currentY) * ease

    if (trackedChunks.length === 0) return

    for (const chunk of trackedChunks) {
      // 叠加 -chunk.row * 2200 实现阶梯错位
      const nominalX = chunk.col * CHUNK_W + currentX - chunk.row * 2200
      const nominalY = chunk.row * CHUNK_H + currentY

      const wrappedX = wrapX(nominalX)
      const wrappedY = wrapY(nominalY)

      gsap.set(chunk.el, {
        x: wrappedX,
        y: wrappedY,
        force3D: true
      })
    }
  }

  onMounted(() => {
    initTrackedChunks()
    updatePhysics()
    gsap.ticker.add(updatePhysics)
  })

  onUnmounted(() => {
    gsap.ticker.remove(updatePhysics)
  })

  return {
    stageRef,
    viewportRef,
    chunkList,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp
  }
}