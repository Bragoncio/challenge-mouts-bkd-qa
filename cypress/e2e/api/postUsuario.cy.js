import { faker } from '@faker-js/faker';

let dadosCustomizados;

beforeEach(() => {
  dadosCustomizados = {
    body: {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
    },
  };

  cy.log(`Nome gerado: ${dadosCustomizados.body.nome}`);
  cy.log(`Email gerado: ${dadosCustomizados.body.email}`);
});

describe('POST /usuarios', () => {
  it('Deve criar um usuário com sucesso usando fixture e faker', () => {
    cy.envioRequisicao('postUsuario', dadosCustomizados);
    cy.checkStatusCode(201);
    cy.checkResponseAndUpdate('postUsuarioResponse');
  });
});
