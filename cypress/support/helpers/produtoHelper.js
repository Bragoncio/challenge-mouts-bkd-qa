import { fakerPT_BR as faker } from '@faker-js/faker';


export const gerarProdutoAleatorio = () => ({
  nome: faker.commerce.productName(),
  preco: faker.number.int({ min: 10, max: 1000 }).toString(),
  descricao: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
  quantidade: faker.number.int({ min: 1, max: 100 })
});

export function cadastrarProdutoViaInterface(produto, imagemPath) {
    cy.preencherCadastroProduto(
      produto.nome,
      produto.preco,
      produto.descricao,
      produto.quantidade,
      imagemPath
    );
  
    return cy.get('[data-testid="cadastarProdutos"]').click().then(() => {
      return cy.contains('Lista dos Produtos').should('be.visible');
    });
  }

export function tentarCadastrarProduto(produto) {

  cy.preencherCadastroProduto(
    produto?.nome,
    produto?.preco,
    produto?.descricao,
    produto?.quantidade
  );

  return cy.get('[data-testid="salvar-produto"]').click();
}
