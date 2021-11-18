import fakerBr from 'js-brasil'
import faker from 'faker'

export const CADASTRo = {
    NOME: `${faker.name.firstName}` + `${faker.name.lastName}`,
    CPF: fakerBr.CPF(),
    CEP: fakerBr.cep(),
    EMAIL: fakerBr.EMAIL(),
    SENHA: `${faker.random.word}`,
}