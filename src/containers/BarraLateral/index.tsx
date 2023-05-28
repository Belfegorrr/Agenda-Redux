import { useNavigate } from 'react-router-dom'
import { Aside, BotaoVoltar } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  return (
    <Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <div></div>
          </>
        ) : (
          <BotaoVoltar onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </BotaoVoltar>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
