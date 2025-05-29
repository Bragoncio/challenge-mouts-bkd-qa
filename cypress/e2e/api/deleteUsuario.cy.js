import { criarUsuarioApi  } from '../../support/helpers/api/apiHelper';

let basePayload;

beforeEach(() => {
  cy.fixture('api/request_api/deleteUsuario').then((payload) => {
    basePayload = { ...payload };
  });
});

context('DELETE /usuarios - Sucesso', () => {
  it('Deve criar e deletar um usuário com sucesso', () => {
    criarUsuarioApi().then((usuario) => {
      const idUsuario = usuario._id;
      const payloadParaDelete = { ...basePayload };
      payloadParaDelete.url = payloadParaDelete.url.replace('{usuarioId}', idUsuario);

      cy.api(payloadParaDelete).as('response');
      cy.checkStatusCode(200);

      cy.get('@response')
        .its('body.message')
        .should('contain', 'Registro excluído com sucesso');
    });
  });
});


