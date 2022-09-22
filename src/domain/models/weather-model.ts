import { TemperatureModel } from 'domain/models'

export type WeatherModel = {
  IsDayTime?: boolean
  WeatherText?: string
  WeatherIcon?: number
  Temperature?: TemperatureModel
}
