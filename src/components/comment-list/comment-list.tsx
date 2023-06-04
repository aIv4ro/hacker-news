import { CommentsPopulated } from '../../types/comment'
import { Comment } from '../comment/comment'
import { commentsList } from './comment-list.css'

interface Props {
  comments: CommentsPopulated
  style?: React.CSSProperties | undefined
}

export function CommentList ({ comments, style }: Props) {
  return (
    <ul className={commentsList} style={style}>
      {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
    </ul>
  )
}
