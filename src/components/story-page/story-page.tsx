import { useStory } from '../../hooks/use-story'

export function StoryPage () {
  const { story, isLoading } = useStory()

  if (isLoading) {
    return <section>Loading...</section>
  }

  return (
    <section>
      {story?.title}
    </section>
  )
}
