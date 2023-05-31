import { useEffect, useState } from 'react'
import { buildUrl } from '../constants/contants'
import { HackerNews } from '../types/hacker-new'

export function useHackerNews () {
  const [hackerNews, setNews] = useState<HackerNews>([])

  useEffect(() => {
    fetch(buildUrl('beststories'))
      .then(res => res.json())
      .then(res => Promise.all(res.slice(0, 10).map((hackerNewId: number) => fetch(buildUrl(`item/${hackerNewId}`)).then(res => res.json()))))
      .then((res: HackerNews) => setNews(res))
      .catch(err => console.log(err))
  }, [setNews])

  return { hackerNews }
}
