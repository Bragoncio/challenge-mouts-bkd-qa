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
import 'cypress-file-upload';


Cypress.Commands.add('navigateToIncluirCadastrarProduto', () => {
  cy.get('[data-testid="cadastrar-produtos"]').click({ force: true })
  cy.url().should('include', '/admin/cadastrarprodutos');
  cy.contains('Cadastro de Produtos').should('be.visible');
});


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

  Cypress.Commands.add('criarUsuarioViaInterface', (usuario) => {
    cy.visit('/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.url().should('include', '/cadastrarusuarios');
  
    cy.preencherFormularioCadastroUsuario(
      usuario.nome,
      usuario.email,
      usuario.senha,
      usuario.admin || false
    );
  
    cy.get('[data-testid="cadastrar"]').click();
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
 


  Cypress.Commands.add('preencherCadastroProduto', (nome, preco, descricao, quantidade, imagemPath) => {
    if (nome !== undefined) {
      cy.get('[data-testid="nome"]').clear().type(nome);
    }
  
    if (preco !== undefined) {
      cy.get('[data-testid="preco"]').clear().type(preco);
    }
  
    if (descricao !== undefined) {
      cy.get('[data-testid="descricao"]').clear().type(descricao);
    }
  
    if (quantidade !== undefined) {
      cy.get('[data-testid="quantity"]').clear().type(quantidade.toString());
    }
  
    if (imagemPath) {
      cy.get('[data-testid="imagem"]').attachFile(imagemPath);
    }
  });