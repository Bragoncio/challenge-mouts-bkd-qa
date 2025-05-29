import { fakerPT_BR as faker } from '@faker-js/faker';

let basePayload;

beforeEach(() => {
  cy.fixture('api/request_api/postUsuario').then((payloadLoaded) => {
    basePayload = { ...payloadLoaded };
    basePayload.body.nome = faker.person.fullName();
    basePayload.body.email = faker.internet.email();
  });
});

context('POST /usuarios - Sucesso', () => {
  it('Deve criar um usuário com sucesso', () => {
    cy.envioRequisicao('postUsuario', basePayload);
    cy.checkStatusCode(201);
    cy.checkResponseAndUpdate('postUsuarioResponse');
  });
});

context('POST /usuarios - Validações de campos obrigatórios', () => {
  it('Deve retornar erro ao omitir o campo "nome"', () => {
    const payload = structuredClone(basePayload);
    delete payload.body.nome;

    cy.envioRequisicao('postUsuario', payload);
    cy.checkStatusCode(400);
    cy.get('@response').its('body.nome').should('eq', 'nome é obrigatório');
  });

  it('Deve retornar erro ao omitir o campo "email"', () => {
    const payload = structuredClone(basePayload);
    delete payload.body.email;

    cy.envioRequisicao('postUsuario', payload);
    cy.checkStatusCode(400);
    cy.get('@response').its('body.email').should('eq', 'email é obrigatório');
  });

  it('Deve retornar erro ao omitir o campo "password"', () => {
    const payload = structuredClone(basePayload);
    delete payload.body.password;

    cy.envioRequisicao('postUsuario', payload);
    cy.checkStatusCode(400);
    cy.get('@response').its('body.password').should('eq', 'password é obrigatório');
  });

  it('Deve retornar erro ao omitir o campo "administrador"', () => {
    const payload = structuredClone(basePayload);
    delete payload.body.administrador;

    cy.envioRequisicao('postUsuario', payload);
    cy.checkStatusCode(400);
    cy.get('@response').its('body.administrador').should('eq', 'administrador é obrigatório');
  });
});
