import Base from './_base.page'

import { LOGIN } from './components/login.elements'
import '../fixtures/example.json'

export default class Login extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL_LOGIN)
    }

    static loginInvalido() {
        super.clickOnElement(LOGIN.BOTAO_LOGIN)

        super.typeValue(LOGIN.FORM_CPF, '452.275.743-32')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_CPF)

        super.typeValue(LOGIN.FORM_SENHA, 'senha_random')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_SENHA)

        super.getElement(LOGIN.MSG_ERRO).should('contain', 'Autenticação incorreta.')
    }

    static loginCorreto() {
        super.clickOnElement(LOGIN.BOTAO_LOGIN)

        super.typeValue(LOGIN.FORM_CPF, '334.556.367-30')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_CPF)

        super.typeValue(LOGIN.FORM_SENHA, 'ycjY_m70hoYFoDy')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_SENHA)

        // super.getElement(LOGIN.MSG_ERRO).should('contain', 'Autenticação incorreta.')
    }
}