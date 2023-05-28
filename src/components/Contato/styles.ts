import styled from 'styled-components'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #474787;
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
  display: block;
  color: #fff;
  padding: 4px 8px;
  background-color: #2c2c54;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  resize: none;
`
export const Tag = styled.textarea`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  background-color: #2c2c54;
  margin-bottom: 16px;
  border-radius: 8px;

  display: block;
  resize: none;
`
export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: #b33939;
`
export const Campo = styled.input`
  width: 50%;
  display: block;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 10px;
  background-color: #fff;
  color: #666666;
  border-color: #666666;
`
