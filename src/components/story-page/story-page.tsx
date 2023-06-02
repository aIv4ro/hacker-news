import { useStory } from '../../hooks/use-story'
import { Story } from '../story/story'

export function StoryPage () {
  const { story, isLoading } = useStory()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (story == null) {
    return <p>Story not found</p>
  }

  return (
    <section>
      <Story hackerNew={story} />
    </section>
  )
}
