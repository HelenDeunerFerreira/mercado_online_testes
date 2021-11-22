/// <reference types="cypress" />

import cadastrarUsuario from "../pages/cadastro.page"

describe('Testes positivos de cadastro de usuário', () => {

    beforeEach(() => {
        cadastrarUsuario.acessarSite()
    })

    it('Cadastro de usuário com CPF', () => {
        cadastrarUsuario.realizarCadastroCorretoCPF()
    })
})

describe('Testes megativos de cadastro de usuário', () => {

    beforeEach(() => {
        cadastrarUsuario.acessarSite()
    })

    it('Cadastro inválido de usuário com CPF', () => {
        cadastrarUsuario.realizarCadastroInvalidoCPF()
    })
})



