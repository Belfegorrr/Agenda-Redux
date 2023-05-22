import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer } from '../../styles'
import { Titulo } from '../../components/Contato/styles'
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
      <Titulo>Nova Contato</Titulo>

      <Form onSubmit={cadastrarTarefa}>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
