import { Item } from './base-entity'

export interface Comment extends Item {
  parent: number
  text: string
  type: 'comment'
}

export interface CommentPopulated extends Comment {
  kidsItems: CommentsPopulated
}

export type Comments = Comment[]
export type CommentsPopulated = CommentPopulated[]
