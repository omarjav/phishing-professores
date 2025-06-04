export class InvalidCredentialsError extends Error {
  constructor() {
    super("Usuário ou senha inválidos!")
  }
}

export class UserAlreadyRegistredError extends Error {
  constructor() {
    super("Usuário informado já existe!")
  }
}

export class UserNotFoundError extends Error {
  constructor() {
    super("Usuário nao encontrado!")
  }
}