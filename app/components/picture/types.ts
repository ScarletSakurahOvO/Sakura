export interface GalleryItem {
  id: number
  src: string
  title: string       // 图片标题（供放大弹窗使用）
  desc: string        // 图片说明/出处文案（供放大弹窗使用）
  x: number           // 画布横坐标 (px)
  y: number           // 画布纵坐标 (px)
  w: number           // 容器基准宽度 (px)
  audio?: string
}