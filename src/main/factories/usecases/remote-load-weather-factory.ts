import { RemoteLoadWeatherResult } from 'data/usecases'
import { LoadWeatherResult } from 'domain/usecases'
import { makeAuthorizeHttpClientDecorator } from 'main/factories/decorators'
import { makeApiUrl } from 'main/factories/http'

const apiLanguage = process.env.REACT_APP_API_LANGUAGE
const showDetails = true
const apiKey = process.env.REACT_APP_API_KEY

export const makeRemoteLoadWeatherResult = (): LoadWeatherResult =>
  new RemoteLoadWeatherResult(makeApiUrl('/currentconditions/v1/'), apiLanguage, showDetails, apiKey, makeAuthorizeHttpClientDecorator())
