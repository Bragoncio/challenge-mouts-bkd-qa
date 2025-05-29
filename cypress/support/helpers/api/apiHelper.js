import { fakerPT_BR as faker } from '@faker-js/faker';

export function criarUsuarioApi() {
  return cy.fixture('api/request_api/postUsuario').then((payload) => {
    const payloadFinal = { ...payload };
    payloadFinal.body.nome = faker.person.fullName();
    payloadFinal.body.email = faker.internet.email();
    payloadFinal.body.password = 'teste123';
    payloadFinal.body.administrador = 'true';

    return cy.api(payloadFinal).then((response) => {
      expect(response.status).to.eq(201);
      return response.body;
    });
  });
}
