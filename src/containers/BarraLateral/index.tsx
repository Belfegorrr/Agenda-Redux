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

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Aside>
      <div>
        {mostrarFiltros ? (
          <>
            {/* <Campo
              type="text"
              placeholder="Buscar"
              value={itens}
              onChange={(evento) => dispatch(contatoNovo(evento.target.value))}
            /> */}
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
