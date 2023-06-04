import { useStory } from '../../hooks/use-story'
import { CommentList } from '../comment-list/comment-list'
import { Story } from '../story/story'
import { section } from './story-page.css'

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
      <CommentList comments={story.kidsItems} style={{ marginLeft: '0' }} />
    </section>
  )
}
