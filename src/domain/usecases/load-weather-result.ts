import { WeatherModel } from 'domain/models'

export interface LoadWeatherResult {
  Load: (params: LoadWeatherResult.Params) => Promise<LoadWeatherResult.Model>
}

export namespace LoadWeatherResult {
  export type Params = {
    apikey: string
  }

  export type Model = WeatherModel
}
