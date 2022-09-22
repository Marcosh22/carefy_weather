import { AdministrativeAreaModel, CountryModel } from '@/domain/models'

export type CityModel = {
  Key: number
  LocalizedName: string
  AdministrativeArea: AdministrativeAreaModel
  Country: CountryModel
}
