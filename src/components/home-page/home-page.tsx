import { TopStories } from '../top-stories/top-stories'
import { section } from './home-page.css'

export function HomePage () {
  return (
    <section className={section}>
      <TopStories />
    </section>
  )
}
