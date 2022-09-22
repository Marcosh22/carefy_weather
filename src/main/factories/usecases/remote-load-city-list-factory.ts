import { RemoteLoadCityList } from 'data/usecases'
import { LoadCityList } from 'domain/usecases'
import { makeAuthorizeHttpClientDecorator } from 'main/factories/decorators'
import { makeApiUrl } from 'main/factories/http'

export const makeRemoteLoadCityList = (): LoadCityList =>
  new RemoteLoadCityList(makeApiUrl('/locations/v1/cities/search'), makeAuthorizeHttpClientDecorator())
