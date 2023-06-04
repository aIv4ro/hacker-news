import { useStory } from '../../hooks/use-story'
import { Comment } from '../comment/comment'
import { Story } from '../story/story'
import { commentsList, section } from './story-page.css'

export function StoryPage () {
  const { story, isLoading } = useStory()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (story == null) {
    return <p>Story not found</p>
  }

  return (
    <section className={section}>
      <Story hackerNew={story} />
      <ul className={commentsList}>
        {story.kidsItems.map(kidItem => {
          return (
            <li key={kidItem.id}>
              <Comment comment={kidItem} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
