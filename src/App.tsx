import './App.css'
import { Header } from './components/header/header'
import { HackerNews } from './components/hacker-news/hacker-news'

function App () {
  return (
    <>
      <Header />
      <main>
        <HackerNews />
      </main>
    </>
  )
}

export default App
