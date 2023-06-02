import { useTopStories } from '../../hooks/use-top-stories'
import { Story } from '../story/story'
import { button } from './top-stories.css'

export function TopStories () {
  const { stories, loadMore } = useTopStories()
  return (
    <>
      <ol>
        {stories.map(story => {
          return (
            <li key={story.id}>
              <Story hackerNew={story} />
            </li>
          )
        })}
      </ol>
      <button className={button} onClick={loadMore}>Load more</button>
    </>
  )
}
