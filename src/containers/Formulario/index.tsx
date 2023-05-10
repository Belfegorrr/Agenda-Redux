import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer } from '../../styles'
import { Campo, Titulo } from '../../components/Contato/styles'
import { Form, Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova Contato</Titulo>

      <Form>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
