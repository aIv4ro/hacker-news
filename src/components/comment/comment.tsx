import { CommentPopulated } from '../../types/comment'
import { getTimeDiff } from '../../utils/date'
import { header } from './comment.css'
import { CommentList } from '../comment-list/comment-list'

interface Props {
  comment: CommentPopulated
  className?: string
}
export function Comment ({ comment }: Props) {
  const timeDiff = getTimeDiff(comment.time * 1000)

  return (
    <article>
      <header className={header}>· {comment.by} {timeDiff}</header>
      <footer><p dangerouslySetInnerHTML={{ __html: comment.text }} /></footer>
      <CommentList comments={comment.kidsItems} />
    </article>
  )
}
