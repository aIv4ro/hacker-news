import { useRoute } from 'wouter'
import { HackerNew } from '../types/hacker-new'
import { useEffect, useState } from 'react'
import { fetchItem } from '../services/fetch-item'

export function useStory () {
  const [, params] = useRoute('/story/:id')
  const [story, setStory] = useState<HackerNew>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const id = params?.id
    if (id == null) { return }
    setLoading(true)
    fetchItem(id)
      .then(res => setStory(res))
      .finally(() => setLoading(false))
  }, [setStory, params?.id])

  return { story, isLoading }
}
