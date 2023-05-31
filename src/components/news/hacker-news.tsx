import { useHackerNews } from '../../hooks/use-hacker-news'
import { section } from './hacker-news.css'

export function HackerNews () {
  const { hackerNews } = useHackerNews()

  return (
    <section className={section}>
      {hackerNews.map((hackerNew: any) => (<p key={hackerNew.id}>{hackerNew.title}</p>))}
    </section>
  )
}
