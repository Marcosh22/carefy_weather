export class AccessDeniedError extends Error {
  constructor () {
    super('Chave de API inválida')
    this.name = 'AccessDeniedError'
  }
}
