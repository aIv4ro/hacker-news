import { useRoute } from 'wouter'
import { HackerNew } from '../types/hacker-new'
import { useEffect, useState } from 'react'
import { buildUrl } from '../constants/contants'

export function useStory () {
  const [, params] = useRoute('/story/:id')
  const [story, setStory] = useState<HackerNew>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const id = params?.id
    if (id == null) { return }
    setLoading(true)
    fetch(buildUrl(`item/${id}`))
      .then(res => res.json())
      .then(res => setStory(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [setStory, params?.id])

  return { story, isLoading }
}
