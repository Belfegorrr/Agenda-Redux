import { useEffect, useState } from 'react'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/contato'
import { Botao, BotaoSalvar } from '../../styles'
import { useDispatch } from 'react-redux'

type Props = ContatoClass

const Contato = ({ name, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (name.length > 0) {
      setDescricao(name)
    }
  }, [name])

  function cancelarEdicao() {
    setestaEditando(false)
    setDescricao(name)
  }

  return (
    <S.Card>
      <label htmlFor={name}>
        <input type="checkbox" id={name} />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {name}
        </S.Titulo>
      </label>
      <S.Tag>{email}</S.Tag>
      <S.Tag>{telefone}</S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
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
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
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
