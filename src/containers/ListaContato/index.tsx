import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ListadeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <h1>CONTATOS</h1>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              name={c.name}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListadeContato
