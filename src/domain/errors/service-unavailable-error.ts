export class ServiceUnavailableError extends Error {
  constructor () {
    super('Serviço Indisponível')
    this.name = 'ServiceUnavailableError'
  }
}
