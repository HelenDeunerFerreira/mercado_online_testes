/// <reference types="cypress" />

import Login from '../pages/login.page'
import CadastroEndreco from '../pages/endereco.page'

describe('Testes com cadastro de endereço', () => {

    it('O cadastro de endereço deve ser realizado corretamente', () => {
        Login.acessarSite()
        Login.loginCorreto()
        CadastroEndreco.acessarSite()
        CadastroEndreco.realizarCadastroValido()
    })

    it('O endereço não deve ser cadastrado e retornar que o nome não foi informado', () => {
        Login.acessarSite()
        Login.loginCorreto()
        CadastroEndreco.acessarSite()
        CadastroEndreco.cadastroInvalido()
    })
})
