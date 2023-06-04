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

function getTimeUnit (diffInSeconds: number) {
  const [unit, seconds] = SECOND_DATE_UNITS_ENTRIES.find(
    ([, value]) => diffInSeconds >= value
  ) ?? SECOND_DATE_UNITS_ENTRIES[SECOND_DATE_UNITS_ENTRIES.length - 1]
  return { unit, value: Math.floor(diffInSeconds / seconds) }
}

export function getTimeDiff (time: number) {
  const now = Date.now()
  const diffInSeconds = (now - time) / 1000
  const { value, unit } = getTimeUnit(diffInSeconds)
  return rtf.format(value * -1, unit)
}
