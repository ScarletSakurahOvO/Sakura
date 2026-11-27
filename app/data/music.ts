// 音乐静态数据

export interface CreditItem {
  label: string
  value: string
}

export interface MusicTrack {
  title: string
  artist: string
  cover: string
  platform: string
  status: string
  isOnline: boolean
  credits: CreditItem[]
}

export const currentTrack: MusicTrack = {
  title: '七里香',
  artist: '周杰伦',
  cover: '', // 填入专辑封面路径或 URL 后自动替换占位底色
  platform: 'Spotify',
  status: '在线听歌',
  isOnline: true,
  credits: [
    { label: '艺人', value: '周杰伦' },
    { label: '作词者', value: '方文山' },
    { label: '作曲者', value: '周杰伦' },
  ],
}