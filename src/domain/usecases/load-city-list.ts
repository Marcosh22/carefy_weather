import { CityModel } from 'domain/models'

export interface LoadCityList {
  Search: (params: LoadCityList.Params) => Promise<LoadCityList.Model[]>
}

export namespace LoadCityList {
  export type Params = {
    q: string
    apikey: string
  }

  export type Model = CityModel
}
