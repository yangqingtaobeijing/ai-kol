export interface Masterpiece {
  title: string
  type: string
  url: string | null
}

export interface KOL {
  id: string
  name: string
  nameEn?: string
  region: '国外' | '国内'
  type: string
  bio: string
  twitter?: string | null
  youtube?: string | null
  reddit?: string | null
  weibo?: string | null
  bilibili?: string | null
  wechat?: string | null
  keyViews: string[]
  masterpieces: Masterpiece[]
  tags: string[]
}
