import { buildUrl } from '../constants/contants'
import { Story } from '../types/story'
import { Comment } from '../types/comment'

export function fetchItem (id: number | string): Promise<Story | Comment> {
  return fetch(buildUrl(`item/${id}`))
    .then(res => res.json())
    .then((res: unknown) => res as Story)
    .catch(err => {
      throw new Error(err)
    })
}
