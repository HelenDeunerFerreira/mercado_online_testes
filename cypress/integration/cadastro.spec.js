/// <reference types="cypress" />

import CadastrarUsuario from "../pages/cadastro.page"

describe('Testes positivos de cadastro de usuário', () => {

    beforeEach(() => {
        CadastrarUsuario.acessarSite()
    })

    it('Cadastro válido de usuário com CPF', () => {
        CadastrarUsuario.realizarCadastroCorretoCPF()
        CadastrarUsuario.verificarUrl()
    })
})

describe('Testes negativos de cadastro de usuário', () => {

    beforeEach(() => {
        CadastrarUsuario.acessarSite()
    })

    it('Cadastro inválido de usuário com CPF', () => {
        CadastrarUsuario.realizarCadastroInvalidoCPF()
    })
})



