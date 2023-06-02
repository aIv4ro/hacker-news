import './App.css'
import { Header } from './components/header/header'
import { Route, Switch } from 'wouter'
import { HomePage } from './components/home-page/home-page'

function App () {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/story/:id'>Ruta con detalle</Route>
          <Route component={HomePage} />
        </Switch>
      </main>
    </>
  )
}

export default App
