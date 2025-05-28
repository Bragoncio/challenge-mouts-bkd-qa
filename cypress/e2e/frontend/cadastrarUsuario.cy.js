/// <reference types="cypress" />
import { gerarUsuarioAleatorio, cadastrarUsuarioViaInterface, tentarCadastrarUsuario  } from '../../support/helpers/usuarioHelper';

describe('Testes de Cadastrar Usuários', () => {
  
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.url().should('include', '/cadastrarusuarios');
  });

  context('Cadastro de novo usuário', () => {

    it('Deve incluir um usuário comum ativo com sucesso na plataforma', () => {
      const usuario = gerarUsuarioAleatorio(false); // admin = false
      cadastrarUsuarioViaInterface(usuario);
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });

    it('Deve incluir um usuário Administrador com sucesso', () => {
      const usuario = gerarUsuarioAleatorio(true); // admin = true
      cadastrarUsuarioViaInterface(usuario);
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });

  });

  context('Validação de campos obrigatórios no cadastro de usuário', () => {
    it('Deve exibir erro ao tentar cadastrar sem preencher o nome', () => {
      const usuario = gerarUsuarioAleatorio();
      usuario.nome = undefined;
      tentarCadastrarUsuario(usuario);
      cy.contains('Nome é obrigatório').should('be.visible');
    });
  
    it('Deve exibir erro ao tentar cadastrar sem preencher o email', () => {
      const usuario = gerarUsuarioAleatorio();
      usuario.email = undefined;
      tentarCadastrarUsuario(usuario);
      cy.contains('Email é obrigatório').should('be.visible');
    });
  
    it('Deve exibir erro ao tentar cadastrar sem preencher a senha', () => {
      const usuario = gerarUsuarioAleatorio();
      usuario.senha = undefined;
      tentarCadastrarUsuario(usuario);
      cy.contains('Password é obrigatório').should('be.visible');
    });
  });

});
