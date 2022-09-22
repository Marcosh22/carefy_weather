import { RemoteLoadWeatherResult } from 'data/usecases'
import { LoadWeatherResult } from 'domain/usecases'
import { makeAuthorizeHttpClientDecorator } from 'main/factories/decorators'
import { makeApiUrl } from 'main/factories/http'

export const makeRemoteLoadWeatherResult = (): LoadWeatherResult =>
  new RemoteLoadWeatherResult(makeApiUrl('/surveys'), makeAuthorizeHttpClientDecorator())
