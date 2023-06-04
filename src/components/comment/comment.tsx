import { CommentPopulated } from '../../types/comment'
import { getTimeDiff } from '../../utils/date'
import { header, section } from './comment.css'
import { sectionWithoutPadding } from '../story-page/story-page.css'

interface Props {
  comment: CommentPopulated
  className?: string
}
export function Comment ({ comment, className = sectionWithoutPadding }: Props) {
  const timeDiff = getTimeDiff(comment.time * 1000)

  return (
    <article className={className}>
      <header className={header}>{comment.by} {timeDiff}</header>
      <footer><p dangerouslySetInnerHTML={{ __html: comment.text }} /></footer>
      <ul>
        {comment.kidsItems.map(kidItem => {
          return (
            <li key={kidItem.id}><Comment comment={kidItem} className={section} /></li>
          )
        })}
      </ul>
    </article>
  )
}
