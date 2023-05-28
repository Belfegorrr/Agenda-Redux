import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Botao = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const TituloHome = styled.h1`
  padding: 20px;
  color: #fff;
`
export const TituloCadastro = styled.h1`
  padding: 20px;
  color: #fff;
`

export const BotaoVoltar = styled(Botao)`
  background-color: #ccc;
  color: #000;
`
export const BotaoSalvar = styled(Botao)`
  background-color: #ccc;
  color: #000;
`
export const BotaoCancelar = styled(Botao)`
  background-color: #84817a;
  color: #000;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #2c2c54;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #2d3436;
  height: 100vh;
`

export default EstiloGlobal
