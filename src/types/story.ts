import { Item } from './base-entity'
import { CommentsPopulated } from './comment'

export interface Story extends Item {
  title: string
  url: string
  score: number
  descendants: number
  type: 'story'
}

export interface StoryPopulated extends Story {
  kidsItems: CommentsPopulated
}

export type Stories = Story[]
