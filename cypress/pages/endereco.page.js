import Base from './_base.page'

import { ENDERECO } from './components/endereco.elements'

export default class CadastroEndreco extends Base {
    static acessarSite() {
        cy.visit(ENDERECO.URL_ENDERECO)
    }

    static realizarCadastroValido() {
        cy.fixture("cadastro").then((user) => {
            super.clickOnElement(ENDERECO.BOTAO_CADASTRO_ENDERECO)
            super.clickOnElement(ENDERECO.BOTAO_EDITAR)

            cy.wait(4000)

            super.typeValue(ENDERECO.NOME_ENDERECO, user.nome)
            super.typeValue(ENDERECO.CEP, user.CEP)

            cy.wait(4000)

            super.typeValue(ENDERECO.RUA, user.rua)
            super.typeValue(ENDERECO.NUMERO_CASA, user.numero)
            super.typeValue(ENDERECO.COMPLEMENTO, user.complemento)

            super.clickOnElement(ENDERECO.BOTAO_SALVAR_ALTERACOES)

            cy.wait(4000)

            super.validarUrl(ENDERECO.URL_VERIFICACAO)
        })
    }

    static cadastroInvalido() {
        cy.fixture("cadastro").then((user) => {
            super.clickOnElement(ENDERECO.BOTAO_CADASTRO_ENDERECO)
            super.clickOnElement(ENDERECO.BOTAO_EDITAR)

            cy.wait(4000)

            super.typeValue(ENDERECO.CEP, user.CEP)

            cy.wait(4000)

            super.typeValue(ENDERECO.RUA, user.rua)
            super.typeValue(ENDERECO.NUMERO_CASA, user.numero)
            super.typeValue(ENDERECO.COMPLEMENTO, user.complemento)

            super.clickOnElement(ENDERECO.BOTAO_SALVAR_ALTERACOES)

            cy.wait(4000)

            super.getElement(ENDERECO.MSG_ERRO).should('contain', 'Informe o nome do endereço')
        })
    }
}