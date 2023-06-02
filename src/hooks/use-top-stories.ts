import { useCallback, useEffect, useMemo, useState } from 'react'
import { buildUrl } from '../constants/contants'
import { Stories } from '../types/story'
import { fetchItem } from '../services/fetch-item'

function loadIds (ids: number[]): Promise<Stories> {
  return Promise.all(
    ids.map(fetchItem)
  )
}

export function useTopStories () {
  const limit = useMemo(() => 10, [])
  const [page, setPage] = useState(1)
  const [hackerNewsIds, setStoriesIds] = useState<number[]>([])
  const [stories, setStories] = useState<Stories>([])

  useEffect(() => {
    // load ids
    fetch(buildUrl('beststories'))
      .then(res => res.json())
      .then((res: number[]) => {
        const newState = [...res]
        setStoriesIds(newState)
      })
      .catch(err => console.log(err))
  }, [setStoriesIds])

  useEffect(() => {
    // initial news load (first 10)
    const idsToLoad = [...hackerNewsIds].splice(0, limit).filter(Boolean)
    loadIds(idsToLoad)
      .then(res => {
        setPage(1)
        setStories([...res])
      })
      .catch(err => console.log(err))
  }, [hackerNewsIds, limit])

  const loadMore = useCallback(() => {
    // from second page load
    const offset = limit * page
    const idsToLoad = [...hackerNewsIds].splice(offset, limit).filter(Boolean)
    loadIds(idsToLoad)
      .then(res => {
        setPage(prev => prev + 1)
        setStories(prev => [...prev, ...res])
      })
      .catch(err => console.log(err))
  }, [limit, page, hackerNewsIds])

  return { stories, loadMore }
}
