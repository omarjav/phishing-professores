export class TestCategoryNotFoundActiveError extends Error {
  constructor() {
    super("Não existe categoria de teste ativa no momento!")
  }

}