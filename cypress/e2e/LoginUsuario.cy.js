/// <reference types="cypress" />

describe('Testes de Login', () => {
    let login;

    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('login').then((data) => {
            login = data;
        });
    });

    it('Deve realizar o login com sucesso usando credenciais padrão', () => {
        cy.url().should('include', '/login');
        cy.contains('Login').should('be.visible');
    });

    it('Deve realizar o login com sucesso usando credenciais específicas', () => {
        cy.url().should('include', '/login');
        cy.contains('Login').should('be.visible');
        cy.login();
    });

    it('Deve exibir uma mensagem de erro ao tentar submeter o formulário com campos vazios', () => {
        cy.url().should('include', '/login');
        cy.login({ submitEmpty: true });
        cy.contains('Email é obrigatório').should('be.visible');
        cy.contains('Password é obrigatório').should('be.visible');
    });

    it.only('Deve permitir o logout e redirecionar para a página de login', () => {
        cy.login();
        cy.url().should('include', '/admin/home');
        cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible');
        cy.get('[data-testid="logout"]').click();
        cy.url().should('include', '/login');
    });
});
