/// <reference types="cypress" />

import { gerarUsuarioAleatorio, cadastrarUsuarioViaInterface } from '../support/helpers/usuarioHelper';
import { gerarProdutoAleatorio, cadastrarProdutoViaInterface } from '../support/helpers/produtoHelper';
  

describe('Testes de Cadastro de Produto', () => {
    let usuarioAdmin;
  
    before(() => {
      usuarioAdmin = gerarUsuarioAleatorio(true);
      cadastrarUsuarioViaInterface(usuarioAdmin);
    });
  
    beforeEach(() => {
      cy.visit('/login');
      cy.login({ username: usuarioAdmin.email, password: usuarioAdmin.senha });
    });
  
    context('Cadastrar Produtos', () => {
      it('Deve realizar o Cadastro de um Produto com sucesso', () => {
        cy.navigateToIncluirCadastrarProduto();
        const produto = gerarProdutoAleatorio();
        cadastrarProdutoViaInterface(produto, 'image/mouts_logo.jpg');
      });
    });
  });
