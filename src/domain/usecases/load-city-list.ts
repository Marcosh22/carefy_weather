import { CityModel } from 'domain/models'

export interface LoadCityList {
  Search: (searchTerm: string) => Promise<LoadCityList.Model[]>
}

export namespace LoadCityList {
  export type Model = CityModel
}
