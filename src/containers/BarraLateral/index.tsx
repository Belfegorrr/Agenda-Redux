import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { Aside } from './styles'
import { RootReducer } from '../../store'
// import { contatoNovo } from '../../store/reducers/contatos'
import { Botao, Aside } from '../../styles'

// import { type } from './../../store/index'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = () => {
  return (
    <Aside>
      <div>
        <Botao>Voltar a lista de tarefas</Botao>
      </div>
    </Aside>
  )
}

export default BarraLateral
