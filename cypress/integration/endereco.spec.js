/// <reference types="cypress" />

import Login from '../pages/login.page'
import CadastroEndreco from '../pages/endereco.page'

describe('Testes com cadastro de endereço', () => {

    it('O cadastro de endereço deve ser realizado corretamente', () => {
        Login.acessarSite()
        Login.loginCorreto()

        CadastroEndreco.realizarCadastroValido()
    })

    it('Deve retornar que o CEP não foi informado pelo usuário e não cadastrar o endereço', () => {
        Login.acessarSite()
        Login.loginCorreto()

        CadastroEndreco.cadastroInvalido()
    })
})
