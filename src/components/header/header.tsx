import { header, title, logo, link } from './header.css'

export function Header () {
  return (
    <header className={header}>
      <div className={logo}>
        Y
      </div>
      <h1 className={title}>
        <a href='/' className={link}>Hacker news</a>
      </h1>
    </header>
  )
}
