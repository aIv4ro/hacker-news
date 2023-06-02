import { useRoute } from 'wouter'
import { Story } from '../types/story'
import { useEffect, useState } from 'react'
import { fetchItem } from '../services/fetch-item'

export function useStory () {
  const [, params] = useRoute('/story/:id')
  const [story, setStory] = useState<Story>()
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
