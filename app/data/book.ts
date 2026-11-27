// app/data/book.ts
export interface BookItem {
  id: number
  cover: string
  title: string
  intro: string
  tags: string[]
  readDate: string
  progress: number
  excerpt: string[]
}

export const bookList: BookItem[] = [
  {
    id: 1,
    cover: '/images/book/book.webp',
    title: '必要的丧失',
    intro: '第一本自己尝试买回来阅读的书籍，只从被《活着》强有力的剧情打动，对看书有了不一样的感受',
    tags: ['心理', '疗愈'],
    readDate: '2026-06-03',
    progress: 55,
    excerpt: [
      '从呱呱坠地到归于尘土',
      '人的一生，就是不断地丧失',
      '朱迪思维奥斯特的成长之书'
    ]
  },
  {
    id: 2,
    cover: '/images/book/book2.webp',
    title: '洛阳伽蓝记',
    intro: '一次听歌的偶然，方文山笔下的《烟花易冷》正出自这本杨炫之写的北魏文学作品',
    tags: ['中国文学'],
    readDate: '2026-11-12',
    progress: 5,
    excerpt: [
      '歌里唱的是洛阳城破后的孤寂',
      '书里写的却是昔日伽蓝的极盛繁华',
      '越是热闹的笔触，读来越让人唏嘘'
    ]
  },
  {
    id: 3,
    cover: '/images/book/book3.webp',
    title: '活着',
    intro: '这是我阅读的第一本书籍，刚开始的我不喜欢看书,直到我被余华老师亲手执笔写的剧情深深的感动了',
    tags: ['中国文学'],
    readDate: '2026-03-31',
    progress: 100,
    excerpt: [
      '看之前对生活穷极一生都要去追求最高的名利',
      '看完之后才知道，人的一生能活着就是最大的幸福',
      '从此对眼下平凡的生活多了一丝敬畏'
    ]
  },
  {
    id: 4,
    cover: '/images/book/book4.webp',
    title: '断舍离',
    intro: '一切的起源还是在我第一次从0开始设计页面,刚开始我的页面风格还是异常的丰富，直到在图书馆遇见了它，并将这本书的思维模式运用到我自己的网站上',
    tags: ['物品收纳'],
    readDate: '2026-09-10',
    progress: 50,
    excerpt: [
      '断，是断绝想要进入自己的不需要的东西',
      '舍，是舍弃到处泛滥的破烂',
      '离，是脱离对物品的执念'
    ]
  },
  {
    id: 5,
    cover: '/images/book/book5.webp',
    title: '被讨厌的勇气',
    intro: '自从在社交方面出现了一点点的问题，为了让自己不那么内耗，于是想尝试一下这本书，希望能让自己更积极乐观一点吧',
    tags: ['心理'],
    readDate: '预读',
    progress: 0,
    excerpt: []
  }
]