import { fakerPT_BR as faker } from '@faker-js/faker';


export const gerarUsuarioAleatorio = (admin = false) => ({
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  senha: faker.internet.password(8),
  admin
});

export function cadastrarUsuarioViaInterface(usuario) {
  cy.visit('/cadastrarusuarios');

  cy.preencherFormularioCadastroUsuario(
    usuario.nome,
    usuario.email,
    usuario.senha,
    usuario.admin
  );

  return cy.get('[data-testid="cadastrar"]').click().then(() => {
    return cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
}

export function tentarCadastrarUsuario(usuario) {
  cy.visit('/cadastrarusuarios');

  cy.preencherFormularioCadastroUsuario(
    usuario?.nome,
    usuario?.email,
    usuario?.senha,
    usuario?.admin
  );

  return cy.get('[data-testid="cadastrar"]').click();
}
