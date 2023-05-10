import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import Home from '../Pages/Home'
import Cadastro from '../Pages/NovoContato'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/novo" Component={Cadastro} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
