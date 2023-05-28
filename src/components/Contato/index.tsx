import { useEffect, useState } from 'react'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/contato'
import { Botao, BotaoSalvar, BotaoCancelar } from '../../styles'
import { useDispatch } from 'react-redux'

type Props = ContatoClass

const Contato = ({ name, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)
  const [names, setNames] = useState('')
  const [emails, setEmails] = useState('')
  const [telefones, setTelefones] = useState<number>(0)

  useEffect(() => {
    if (name.length > 0) {
      setEmails(email)
      setNames(name)
      setTelefones(telefone)
    }
  }, [email, name, telefone])

  function cancelarEdicao() {
    setestaEditando(false)
    setEmails(email)
    setNames(name)
    setTelefones(telefone)
  }

  return (
    <S.Card>
      <S.Titulo
        disabled={!estaEditando}
        value={names}
        onChange={(event) => setNames(event.target.value)}
      />
      <S.Tag
        disabled={!estaEditando}
        value={emails}
        onChange={(event) => setEmails(event.target.value)}
      />
      <S.Tag
        disabled={!estaEditando}
        value={telefones}
        onChange={(event) => setTelefones(parseInt(event.target.value))}
      />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    name,
                    email,
                    telefone,
                    id
                  })
                )
                setestaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelar
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setestaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
