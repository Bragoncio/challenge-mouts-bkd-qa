import { fakerPT_BR as faker } from '@faker-js/faker';

class FakerHelper {
  static gerarNome() {
    return faker.name.fullName();
  }

  static gerarEmail() {
    return faker.internet.email();
  }

  static gerarSenha() {
    return faker.internet.password(8);
  }
}
export { FakerHelper };
