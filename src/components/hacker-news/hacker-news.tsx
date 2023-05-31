import { useHackerNews } from '../../hooks/use-hacker-news'
import { section, button } from './hacker-news.css'

export function HackerNews () {
  const { hackerNews, loadMore } = useHackerNews()

  return (
    <section className={section}>
      <ul>
        {hackerNews.map((hackerNew) => (<li key={hackerNew.id}>{hackerNew.title}</li>))}
      </ul>
      <button className={button} onClick={loadMore}>Load more</button>
    </section>
  )
}
