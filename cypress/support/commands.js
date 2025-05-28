// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', ({ username = Cypress.env('username'), password = Cypress.env('password'), submitEmpty = false } = {}) => {  
    if (!submitEmpty) {
        if (username) {
            cy.get('#email').type(username);
        }
        if (password) {
            cy.get('#password').type(password);
        }
    }

    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('preencherFormularioCadastroUsuario', (nome, email, senha,  admin = false ) => {
    if (nome !== undefined) {
      cy.get('input[name="nome"]').clear().type(nome);
    }
  
    if (email !== undefined) {
      cy.get('input[name="email"]').clear().type(email);
    }
  
    if (senha !== undefined) {
      cy.get('input[name="password"]').clear().type(senha);
    }
  
    if (admin) {
      cy.get('input[name="administrador"]').check();
    } else {
      cy.get('input[name="administrador"]').uncheck();
    }
  });
  