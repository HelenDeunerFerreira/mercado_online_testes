/// <reference types="cypress" />

import Login from '../pages/login.page'

describe('Testes com login', () => {

    // it('O login deve ser realizado corretamente', () => {
    //     Login.acessarSite()
    //     Login.loginInvalido()
    // })

    it('O login não deve ser realizado e deve apresentar mensagem de erro', () => {
        Login.acessarSite()
        Login.loginInvalido()
    })
})
