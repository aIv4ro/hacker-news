import { useRoute } from 'wouter'
import { HackerNew } from '../types/hacker-new'
import { useEffect, useState } from 'react'
import { buildUrl } from '../constants/contants'

export function useStory () {
  const [, params] = useRoute('/story/:id')
  const [story, setStory] = useState<HackerNew>()

  useEffect(() => {
    if (params == null) {
      return
    }
    fetch(buildUrl(`item/${params.id}`))
      .then(res => res.json())
      .then(res => setStory(res))
      .catch(err => console.log(err))
  }, [params, setStory])

  return { story }
}
