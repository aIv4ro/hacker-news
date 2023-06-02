import './App.css'
import { Header } from './components/header/header'
import { Route, Switch } from 'wouter'
import { HomePage } from './components/home-page/home-page'
import { StoryPage } from './components/story-page/story-page'

function App () {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/story/:id' component={StoryPage} />
          <Route component={HomePage} />
        </Switch>
      </main>
    </>
  )
}

export default App
