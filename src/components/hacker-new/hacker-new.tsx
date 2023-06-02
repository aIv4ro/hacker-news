import { HackerNew as IHackerNew } from '../../types/hacker-new'
import { footer, h4, header } from './hacker-new.css'

interface Props {
  hackerNew: IHackerNew
}

const rtf = new Intl.RelativeTimeFormat(undefined, {
  style: 'long', numeric: 'always'
})

type DateUnits = 'day' | 'hour' | 'minute' | 'second'

const SECOND_DATE_UNITS_ENTRIES: Array<[DateUnits, number]> = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getTimeUnit = (diffInSeconds: number) => {
  const [unit, seconds] = SECOND_DATE_UNITS_ENTRIES.find(
    ([, value]) => diffInSeconds >= value
  ) ?? SECOND_DATE_UNITS_ENTRIES[SECOND_DATE_UNITS_ENTRIES.length - 1]
  return { unit, value: Math.floor(diffInSeconds / seconds) }
}

const getTimeDiff = (time: number) => {
  const now = Date.now()
  const diffInSeconds = (now - time) / 1000
  const { value, unit } = getTimeUnit(diffInSeconds)
  return rtf.format(value * -1, unit)
}

export function HackerNew ({ hackerNew }: Props) {
  const timeDiff = getTimeDiff(hackerNew.time * 1000)
  let url: URL | undefined
  try {
    url = new URL(hackerNew.url)
  } catch (err) {}

  return (
    <article>
      <header className={header}>
        <h4 className={h4}>{hackerNew.title}</h4>
        {(url != null) && <a href={hackerNew.url}>({url?.hostname})</a>}
      </header>
      <footer className={footer}>
        {hackerNew.score} {hackerNew.score === 1 ? 'point' : 'points'} by {hackerNew.by} {timeDiff} | {hackerNew.kids.length} comments
      </footer>
    </article>
  )
}
