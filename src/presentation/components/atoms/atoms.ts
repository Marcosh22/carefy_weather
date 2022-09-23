import { CityModel } from 'domain/models'
import { atom } from 'recoil'

export const currentCityState = atom({
  key: 'currentCityState',
  default: {
    getCurrentCity: null as () => CityModel,
    setCurrentCity: null as (city: CityModel) => void
  }
})
