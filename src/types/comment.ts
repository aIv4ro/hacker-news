import { Item } from './base-entity'

export interface Comment extends Item {
  parent: number
  text: string
}
