import { Link } from 'wouter'
import { Story as IStory } from '../../types/story'
import { footer, h4, header, storyLink } from './story.css'
import { getTimeDiff } from '../../utils/date'
import { tryOrUndefined } from '../../utils/other'

interface Props {
  hackerNew: IStory
}

export function Story ({ hackerNew }: Props) {
  const timeDiff = getTimeDiff(hackerNew.time * 1000)
  const url = tryOrUndefined(() => new URL(hackerNew.url))

  return (
    <article>
      <header className={header}>
        <h4 className={h4}>
          <Link href={`/story/${hackerNew.id}`} className={storyLink}>
            {hackerNew.title}
          </Link>
        </h4>
        {(url != null) && <a href={hackerNew.url}>({url?.hostname})</a>}
      </header>
      <footer className={footer}>
        {hackerNew.score} {hackerNew.score === 1 ? 'point' : 'points'} by {hackerNew.by} {timeDiff} | {hackerNew.kids.length} comments
      </footer>
    </article>
  )
}
