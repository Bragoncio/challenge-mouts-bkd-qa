/// <reference types="cypress" />

import { gerarUsuarioAleatorio, cadastrarUsuarioViaInterface } from '../support/helpers/usuarioHelper';
import { gerarProdutoAleatorio, cadastrarProdutoViaInterface, tentarCadastrarProduto } from '../support/helpers/produtoHelper';


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

    context.only('Validação de campos obrigatórios', () => {
        it('Deve exibir erro ao tentar cadastrar sem informar o nome', () => {
            const produto = gerarProdutoAleatorio();
            produto.nome = undefined;
            cy.navigateToIncluirCadastrarProduto();
            tentarCadastrarProduto(produto);
            cy.contains('Nome é obrigatório').should('be.visible');
        });

        it('Deve exibir erro ao tentar cadastrar sem informar o preço', () => {
            const produto = gerarProdutoAleatorio();
            produto.preco = undefined;
            cy.navigateToIncluirCadastrarProduto();
            tentarCadastrarProduto(produto);
            cy.contains('Preco é obrigatório').should('be.visible');
        });

        it('Deve exibir erro ao tentar cadastrar sem informar a descrição', () => {
            const produto = gerarProdutoAleatorio();
            produto.descricao = undefined;
            cy.navigateToIncluirCadastrarProduto();
            tentarCadastrarProduto(produto);
            cy.contains('Descricao é obrigatório').should('be.visible');
        });

        it('Deve exibir erro ao tentar cadastrar sem informar a quantidade', () => {
            const produto = gerarProdutoAleatorio();
            produto.quantidade = undefined;
            cy.navigateToIncluirCadastrarProduto();
            tentarCadastrarProduto(produto);
            cy.contains('Quantidade é obrigatório').should('be.visible');
        });
    });
});
