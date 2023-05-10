import { Provider } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import BotaoAdicionar from './components/BotaoAdicionar'
import ListadeContato from './containers/ListaContato'
import store from './store'
import Home from './Pages/Home'
import Cadastro from './Pages/NovoContato'

// const rotas = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/novo',
//     element: <Cadastro />
//   }
// ])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListadeContato />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<Cadastro />} />
          </Routes>
        </Router>
      </Container>
      <BotaoAdicionar />
    </Provider>
  )
}

export default App
