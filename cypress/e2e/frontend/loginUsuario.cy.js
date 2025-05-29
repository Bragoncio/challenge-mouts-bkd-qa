/// <reference types="cypress" />

import { gerarUsuarioAleatorio, cadastrarUsuarioViaInterface } from '../../support/helpers/frontend/usuarioHelper';

describe('Testes de Login', () => {
  before(function () {
    const usuarioAdmin = gerarUsuarioAleatorio(true);
    const usuarioComum = gerarUsuarioAleatorio(false);

    cy.wrap(usuarioAdmin).as('usuarioAdmin');
    cadastrarUsuarioViaInterface(usuarioAdmin).then(() => {
      cy.wrap(usuarioComum).as('usuarioComum');
      cadastrarUsuarioViaInterface(usuarioComum);
    });
  });

  beforeEach(() => {
    cy.visit('/login');
  });

  context('Usuário Comum', () => {
    it('Deve realizar o login com sucesso usando credenciais específicas', function () {
      cy.login({ username: this.usuarioComum.email, password: this.usuarioComum.senha });
      cy.url().should('include', '/home');
    });

    it('Deve permitir o logout e redirecionar para a página de login', function () {
      cy.login({ username: this.usuarioComum.email, password: this.usuarioComum.senha });
      cy.url().should('include', '/home');
      cy.get('[data-testid="logout"]').click();
      cy.url().should('include', '/login');
    });
  });

  context('Usuário Administrador', () => {
    it('Deve realizar o login com sucesso usando credenciais de administrador', function () {
      cy.login({ username: this.usuarioAdmin.email, password: this.usuarioAdmin.senha });
      cy.url().should('include', '/admin/home');
    });

    it('Deve permitir o logout do administrador e redirecionar para a página de login', function () {
      cy.login({ username: this.usuarioAdmin.email, password: this.usuarioAdmin.senha });
      cy.url().should('include', '/admin/home');
      cy.get('[data-testid="logout"]').click();
      cy.url().should('include', '/login');
    });
  });

  context('Fluxos de Exceção', () => {
    it('Deve exibir uma mensagem de erro ao tentar submeter o formulário com campos vazios', () => {
      cy.login({ submitEmpty: true });
      cy.contains('Email é obrigatório').should('be.visible');
      cy.contains('Password é obrigatório').should('be.visible');
    });
  });
});
