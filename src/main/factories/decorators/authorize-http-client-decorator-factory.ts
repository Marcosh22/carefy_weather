import { HttpClient } from 'data/protocols/http'
import { makeLocalStorageAdapter } from 'main/factories/cache'
import { AuthorizeHttpClientDecorator } from 'main/factories/decorators'
import { makeAxiosHttpClient } from 'main/factories/http'

export const makeAuthorizeHttpClientDecorator = (): HttpClient =>
  new AuthorizeHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
