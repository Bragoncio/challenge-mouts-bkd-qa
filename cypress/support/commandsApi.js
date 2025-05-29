Cypress.Commands.add('envioRequisicao', (nomeArquivoFixture, payloadCustomizado = null) => {
  if (payloadCustomizado) {
    cy.api(payloadCustomizado).as('response');
    cy.log(`Requisição enviada com payload customizado (sem fixture)`);
  } else {
    const caminhoFixture = `api/request_api/${nomeArquivoFixture}`;
    cy.fixture(caminhoFixture).then((conteudoFixture) => {
      cy.api(conteudoFixture).as('response');
      cy.log(`Requisição enviada usando fixture: ${nomeArquivoFixture}`);
    });
  }
});

  Cypress.Commands.add("checkStatusCode", (status) => {
    cy.get("@response").then((res) => {
      expect(res.status).to.eq(status);
      cy.log(`Status esperado: ${status} | Status retornado: ${res.status}`);
    });
  });

  Cypress.Commands.add("checkResponseAndUpdate", (fixtureName) => {
    cy.get("@response").then((res) => {
      cy.fixture(`api/response_values/${fixtureName}`).then((expectedBody) => {
        expectedBody._id = res.body._id;
  
        cy.writeFile(`cypress/fixtures/response_values/${fixtureName}.json`, expectedBody);
  
        Object.entries(expectedBody).forEach(([key, value]) => {
          expect(res.body).to.have.property(key);
          expect(res.body[key]).to.equal(value);
        });
      });
    });
  });