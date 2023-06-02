import { useCallback, useEffect, useMemo, useState } from 'react'
import { buildUrl } from '../constants/contants'
import { HackerNews } from '../types/hacker-new'
import { fetchItem } from '../services/fetch-item'

function loadIds (ids: number[]): Promise<HackerNews> {
  return Promise.all(
    ids.map(fetchItem)
  )
}

export function useHackerNews () {
  const limit = useMemo(() => 10, [])
  const [page, setPage] = useState(1)
  const [hackerNewsIds, setHackerNewsIds] = useState<number[]>([])
  const [hackerNews, setHackerNews] = useState<HackerNews>([])

  useEffect(() => {
    // load ids
    fetch(buildUrl('beststories'))
      .then(res => res.json())
      .then((res: number[]) => {
        const newState = [...res]
        setHackerNewsIds(newState)
      })
      .catch(err => console.log(err))
  }, [setHackerNewsIds])

  useEffect(() => {
    // initial news load (first 10)
    const idsToLoad = [...hackerNewsIds].splice(0, limit).filter(Boolean)
    loadIds(idsToLoad)
      .then(res => {
        setPage(1)
        setHackerNews([...res])
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
        setHackerNews(prev => [...prev, ...res])
      })
      .catch(err => console.log(err))
  }, [limit, page, hackerNewsIds])

  return { hackerNews, loadMore }
}
