/// <reference types="cypress" />
import FakerHelper from '../support/fakerHelper';

describe('Testes de Cadastrar Usuarios', () => {
  let CadastrarUsuario;

  before(() => {
    cy.fixture('CadastrarUsuario').then((data) => {
      CadastrarUsuario = data;
    });
  });

  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.url().should('include', '/cadastrarusuarios');
  });

  const getDadosUsuario = () => ({
    ...CadastrarUsuario.DadosUsuario,
    nome: FakerHelper.gerarNome(),
    email: FakerHelper.gerarEmail(),
    senha: FakerHelper.gerarSenha()
  });

  context("Cadastro de Novo usuario", () => {
    it('Deve incluir um usuario ativo com sucesso na plataforma', () => {
      const dadosUsuario = getDadosUsuario();

      cy.preencherFormularioCadastroUsuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha);
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });

    it('Deve incluir um usuario Administrador com sucesso', () => {
      const dadosUsuario = getDadosUsuario();

      cy.preencherFormularioCadastroUsuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha, { admin: true });
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
  });

  context.only("Validação de campos obrigatórios no cadastro de usuário", () => {
    const getDadosUsuario = () => ({
      nome: FakerHelper.gerarNome(),
      email: FakerHelper.gerarEmail(),
      senha: FakerHelper.gerarSenha()
    });
  
    it('Deve exibir erro ao tentar cadastrar sem preencher o nome', () => {
      const dadosUsuario = getDadosUsuario();
      cy.preencherFormularioCadastroUsuario(undefined, dadosUsuario.email, dadosUsuario.senha);
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Nome é obrigatório').should('be.visible');
    });
  
    it('Deve exibir erro ao tentar cadastrar sem preencher o email', () => {
      const dadosUsuario = getDadosUsuario();
      cy.preencherFormularioCadastroUsuario(dadosUsuario.nome, undefined, dadosUsuario.senha);
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Email é obrigatório').should('be.visible');
    });
  
    it('Deve exibir erro ao tentar cadastrar sem preencher a senha', () => {
      const dadosUsuario = getDadosUsuario();
      cy.preencherFormularioCadastroUsuario(dadosUsuario.nome, dadosUsuario.email, undefined);
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Password é obrigatório').should('be.visible');
    });
  });
  
});
