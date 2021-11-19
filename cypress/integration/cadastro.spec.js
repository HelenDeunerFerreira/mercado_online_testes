/// <reference types="cypress" />

import cadastrarUsuario from "../pages/cadastro.page"

describe('Testes positivos de cadastro de usuário', () => {

    beforeEach(() => {
        cadastrarUsuario.acessarSite()
    })

    it('Cadastro de usuário com CPF', () => {
        cadastrarUsuario.realizarCadastroCorretoCPF()
    })

    it('Cadastro de usuário com CNPJ', () => {
        cadastrarUsuario.realizarCadastroCorretoCNPJ()
    })
})

describe('Testes megativos de cadastro de usuário', () => {

    beforeEach(() => {
        cadastrarUsuario.acessarSite()
    })

    it.only('Cadastro inválido de usuário com CPF', () => {
        cadastrarUsuario.realizarCadastroInvalidoCPF()
    })

    it.only('Cadastro inválido de usuário com CNPJ', () => {
        cadastrarUsuario.realizarCadastroInvalidoCNPJ()
    })
})



