export interface HackerNew {
  id: number
  type: string
  title: string
  by: string
  url: string
  time: number
  score: number
  descendants: number
  kids: string[]
}

export type HackerNews = HackerNew[]
