/// <reference types="cypress" />

import Login from '../pages/login.page'
import ConferirMercadoria from '../pages/mercadoria.page'
import FazerCheckout from '../pages/checkout.page'

describe('Testes de checkout da compra', () => {

    it('O checkout da compra deve ser realizado corretamente', () => {
        Login.acessarSite()
        Login.loginCorreto()

        ConferirMercadoria.acessarSite()
        ConferirMercadoria.conferirProdutoNoCarrinho()
        ConferirMercadoria.compraFinalizada()

        FazerCheckout.realizarCheckoutCorreto()
    })

    it('O checkout da compra não deve ser realizado', () => {
        Login.acessarSite()
        Login.loginCorreto()

        ConferirMercadoria.acessarSite()
        ConferirMercadoria.conferirProdutoNoCarrinho()
        ConferirMercadoria.compraFinalizada()

        FazerCheckout.checkoutInvalido()
    })
})