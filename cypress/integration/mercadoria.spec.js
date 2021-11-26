/// <reference types="cypress" />

import ConferirMercadoria from '../pages/mercadoria.page'

describe('Testes com a mercadoria do carrinho', () => {

    it('Deve verificar se o produto/mercadoria foi adicionado ao carrinho corretamente', () => {
        ConferirMercadoria.acessarSite()
        ConferirMercadoria.conferirProdutoNoCarrinho()
        ConferirMercadoria.compraFinalizada()
    })

    it('O produto não deve ser adicionado ao carrinho e a lista de itens deve retornar vazia', () => {
        ConferirMercadoria.acessarSite()
        ConferirMercadoria.carrinhoVazio()
    })
})
