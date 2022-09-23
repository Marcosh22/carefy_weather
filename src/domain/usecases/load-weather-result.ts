import { WeatherModel } from 'domain/models'

export interface LoadWeatherResult {
  Load: (locationKey: number) => Promise<LoadWeatherResult.Model>
}

export namespace LoadWeatherResult {
  export type Model = WeatherModel
}
