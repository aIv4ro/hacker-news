import { useHackerNews } from '../../hooks/use-hacker-news'
import { HackerNew } from '../hacker-new/hacker-new'
import { section, button } from './hacker-news.css'

export function HackerNews () {
  const { hackerNews, loadMore } = useHackerNews()
  return (
    <section className={section}>
      <ul>
        {hackerNews.map(hackerNew => {
          return (
            <li key={hackerNew.id}>
              <HackerNew hackerNew={hackerNew} />
            </li>
          )
        })}
      </ul>
      <button className={button} onClick={loadMore}>Load more</button>
    </section>
  )
}
