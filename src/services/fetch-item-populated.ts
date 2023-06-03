import { CommentPopulated } from '../types/comment'
import { StoryPopulated } from '../types/story'
import { fetchItem } from './fetch-item'

export async function fetchItemPopulated (id: number | string): Promise<StoryPopulated | CommentPopulated> {
  return await fetchItem(id)
    .then(async res => {
      if (res.kids?.length == null) {
        return { ...res, kidsItems: [] }
      }
      return {
        ...res,
        kidsItems: await Promise.all(res.kids.map(kid => fetchItemPopulated(kid) as Promise<CommentPopulated>))
      }
    })
}
