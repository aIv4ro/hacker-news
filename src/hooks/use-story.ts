import { useRoute } from 'wouter'
import { StoryPopulated } from '../types/story'
import { useEffect, useState } from 'react'
import { fetchItemPopulated } from '../services/fetch-item-populated'

export function useStory () {
  const [, params] = useRoute('/story/:id')
  const [story, setStory] = useState<StoryPopulated>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const id = params?.id
    if (id == null) { return }
    setLoading(true)
    fetchItemPopulated(id)
      .then(res => setStory(res as StoryPopulated))
      .finally(() => setLoading(false))
  }, [setStory, params?.id])

  return { story, isLoading }
}
