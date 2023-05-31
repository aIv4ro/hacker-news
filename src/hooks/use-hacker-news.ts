import { useState } from 'react'

export function useHackerNews () {
  const [hackerNews] = useState([])
  return { hackerNews }
}
