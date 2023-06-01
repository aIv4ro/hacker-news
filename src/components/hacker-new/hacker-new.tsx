import { HackerNew as IHackerNew } from '../../types/hacker-new'

interface Props {
  hackerNew: IHackerNew
}

export function HackerNew ({ hackerNew }: Props) {
  const date = new Date(hackerNew.time * 1000)

  return (
    <article>
      <header>{hackerNew.title}</header>
      <footer>
        {hackerNew.score} {hackerNew.score === 1 ? 'point' : 'points'} by {hackerNew.by}
      </footer>
    </article>
  )
}
