import { Link } from 'wouter'
import { header, title, logo, link } from './header.css'

export function Header () {
  return (
    <header className={header}>
      <div className={logo}>
        Y
      </div>
      <h1 className={title}>
        <Link href='/' className={link}>Hacker news</Link>
      </h1>
    </header>
  )
}
