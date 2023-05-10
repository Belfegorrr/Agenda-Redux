import { Provider } from 'react-redux'
import EstiloGlobal from './styles'
import BotaoAdicionar from './components/BotaoAdicionar'
import ListadeContato from './containers/ListaContato'
import store from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Cadastro from './Pages/NovoContato'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/novo',
      element: <Cadastro />
    }
  ])
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListadeContato />
      <RouterProvider router={rotas} />
      <BotaoAdicionar />
    </Provider>
  )
}

export default App
