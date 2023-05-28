import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, TituloCadastro } from '../../styles'
import { Campo, Titulo } from '../../components/Contato/styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        name,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <TituloCadastro>Novo Contato</TituloCadastro>

      <Campo
        value={name}
        onChange={(evento) => setName(evento.target.value)}
        type="text"
        required
        placeholder="Nome do Contato"
      />
      <Campo
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        required
        placeholder="seuemail@email.com"
      />
      <Campo
        value={telefone}
        onChange={(evento) => setTelefone(parseInt(evento.target.value))}
        type="text"
        required
        placeholder="XX-XXXXXX"
      />

      <Form onSubmit={cadastrarTarefa}>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
