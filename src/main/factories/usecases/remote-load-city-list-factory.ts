import { RemoteLoadCityList } from 'data/usecases'
import { LoadCityList } from 'domain/usecases'
import { makeAuthorizeHttpClientDecorator } from 'main/factories/decorators'
import { makeApiUrl } from 'main/factories/http'

const apiLanguage = process.env.REACT_APP_API_LANGUAGE
const showDetails = false
const apiKey = process.env.REACT_APP_API_KEY

export const makeRemoteLoadCityList = (): LoadCityList =>
  new RemoteLoadCityList(makeApiUrl('/locations/v1/cities/search'), apiLanguage, showDetails, apiKey, makeAuthorizeHttpClientDecorator())
