import { useStory } from '../../hooks/use-story'

export function StoryPage () {
  const { story } = useStory()

  return (
    <section>
      {story?.title}
    </section>
  )
}
