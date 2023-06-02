import { HackerNews } from '../hacker-news/hacker-news'
import { section } from './home-page.css'

export function HomePage () {
  return (
    <section className={section}>
      <HackerNews />
    </section>
  )
}
