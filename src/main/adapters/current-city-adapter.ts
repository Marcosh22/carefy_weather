import { makeLocalStorageAdapter } from 'main/factories/cache'
import { CityModel } from 'domain/models'

export const setCurrentCityAdapter = (city: CityModel): void => {
  makeLocalStorageAdapter().set('city', city)
}

export const getCurrentCityAdapter = (): CityModel => {
  return makeLocalStorageAdapter().get('city')
}
