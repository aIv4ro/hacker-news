import { buildUrl } from '../constants/contants'
import { HackerNew } from '../types/hacker-new'

export function fetchItem (id: number | string): Promise<HackerNew> {
  return fetch(buildUrl(`item/${id}`))
    .then(res => res.json())
    .then((res: unknown) => res as HackerNew)
    .catch(err => {
      throw new Error(err)
    })
}
