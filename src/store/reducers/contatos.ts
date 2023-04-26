import Contato from '../../models/contato'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      name: 'Iago Pelichek Fernandes',
      email: 'qualquer@gmail.com',
      telefone: 47965432165
    },
    {
      id: 2,
      name: 'Daniele Pelichek Fernandes',
      email: 'qualquer@gmail.com',
      telefone: 47965432165
    },
    {
      id: 3,
      name: 'Joelson o poder',
      email: 'qualquer@gmail.com',
      telefone: 47965432165
    }
  ]
}

const ContatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      // const contatoJaExiste = state.itens.find(
      //   (contato) =>
      //     contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      // )
      // if (contatoJaExiste) {
      //   alert('Já existe um contato com esse nome')
      // } else {
      const ultimoContato = state.itens[state.itens.length - 1]
      const contatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.itens.push(contatoNovo)
    }
  }
})

export const { remover, editar, cadastrar } = ContatoSlice.actions
export default ContatoSlice.reducer
