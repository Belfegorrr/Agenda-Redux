import styled from 'styled-components'
import { Botao } from '../../styles'

// type TagProps = {
//   nome?: string
//   email?: string
//   telefone?: number
//   id?: number
// }

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.textarea`
  margin-left: 8px;
  font-weight: bold;
  font-size: 18px;
`
export const Tag = styled.textarea`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  resize: none;
`
// export const Descricao = styled.textarea`
//   color: #8b8b8b;
//   font-size: 14px;
//   line-height: 24px;
//   font-family: 'Roboto Mono', monospace;
//   display: block;
//   width: 100%;
//   margin-bottom: 16px;
//   margin-top: 16px;
//   resize: none;
//   border: none;
//   background-color: transparent;
// `
export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: #ccc;
`
export const Campo = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  color: #666666;
  border-color: #666666;
`
