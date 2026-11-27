export interface GalleryImageItem {
  id: string
  src: string
  alt: string
}

export interface AfterHoursImages {
  topPrimary: GalleryImageItem
  topSecondary: GalleryImageItem
  bottomPrimary: GalleryImageItem
  bottomSecondary: GalleryImageItem
}

export const afterHoursImages: AfterHoursImages = {
  // 右上区域 - 主图（左上）
  topPrimary: {
    id: 'about-1',
    src: '/images/about/about.webp',
    alt: '晴天娃娃与窗景剧照',
  },
  // 右上区域 - 交叠辅图（右下）
  topSecondary: {
    id: 'about-2',
    src: '/images/about/about2.webp',
    alt: '雨中大桥与黄伞剧照',
  },
  // 左下区域 - 主图（左上）
  bottomPrimary: {
    id: 'about-3',
    src: '/images/about/about3.webp',
    alt: '云端光影眺望剧照',
  },
  // 左下区域 - 交叠辅图（右下）
  bottomSecondary: {
    id: 'about-4',
    src: '/images/about/about4.webp',
    alt: '蔚蓝天空与云海剧照',
  },
}