import Base from './_base.page'
import faker from 'faker'

import { CADASTRO } from './components/cadastro.elements'

function gerarCpf() {
    const num1 = aleatorio();
    const num2 = aleatorio();
    const num3 = aleatorio();
    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);
    return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}

function dig(n1, n2, n3, n4) {
    const nums = n1.split("").concat(n2.split(""), n3.split(""));
    if (n4 !== undefined) {
        nums[9] = n4;
    }

    let x = 0;
    for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }

    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
}

function aleatorio() {
    const aleat = Math.floor(Math.random() * 999);
    return ("" + aleat).padStart(3, '0');
}

let CPF = gerarCpf()
let email = `${faker.internet.email()}`
let nome = `${faker.name.firstName()} ${faker.name.lastName()}`
let senha = `${faker.internet.password()}`
let celular = `54${faker.datatype.number(111111111)}`
let telFixo = `5433${faker.datatype.number(1111111)}`

export default class cadastrarUsuario extends Base {
    static acessarSite() {
        cy.visit(CADASTRO.URL_CADASTRO)
    }

    static realizarCadastroCorretoCPF() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_FISICA)
        super.typeValue(CADASTRO.FORM_NOME, nome)
        super.typeValue(CADASTRO.FORM_CPF, CPF)
        super.typeValue(CADASTRO.FORM_EMAIL, email)
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, email)
        super.typeValue(CADASTRO.FORM_SENHA, senha)
        super.typeValue(CADASTRO.FORM_SENHA_VERIFICACAO, senha)

        super.typeValue(CADASTRO.FORM_CELULAR, celular)
        super.typeValue(CADASTRO.FORM_TEL_FIXO, telFixo)

        super.clickOnElement(CADASTRO.BOTAO_AVANCAR)

        super.validarUrl(CADASTRO.URL_VERIFICACAO)
        cy.writeFile('./cypress/fixtures/example.json', { nome: nome, email: email, senha: senha, CPF: CPF })
    }

    static realizarCadastroInvalidoCPF() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_FISICA)
        super.typeValue(CADASTRO.FORM_NOME, nome)
        super.typeValue(CADASTRO.FORM_CPF, '0000000')
        super.typeValue(CADASTRO.FORM_EMAIL, 'random_user')
        super.typeValue(CADASTRO.FORM_SENHA, senha)
        super.typeValue(CADASTRO.FORM_SENHA_VERIFICACAO, senha)
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, CADASTRO.FORM_EMAIL)

        super.typeValue(CADASTRO.FORM_CELULAR, celular)
        super.typeValue(CADASTRO.FORM_TEL_FIXO, telFixo)

        super.clickOnElement(CADASTRO.BOTAO_AVANCAR)
    }
}