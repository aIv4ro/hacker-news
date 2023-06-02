import { Item } from './base-entity'

export interface Story extends Item {
  title: string
  url: string
  score: number
  descendants: number
}

export type Stories = Story[]
