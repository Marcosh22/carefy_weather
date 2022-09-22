import { WeatherModel } from 'domain/models'

export interface LoadWeatherResult {
  Load: () => Promise<LoadWeatherResult.Model>
}

export namespace LoadWeatherResult {
  export type Model = WeatherModel
}
