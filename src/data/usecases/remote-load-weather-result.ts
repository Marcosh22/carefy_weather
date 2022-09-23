import { HttpClient, HttpStatusCode } from 'data/protocols/http'
import { AccessDeniedError, UnexpectedError } from 'domain/errors'
import { LoadWeatherResult } from 'domain/usecases'

export class RemoteLoadWeatherResult implements LoadWeatherResult {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadWeatherResult.Model>
  ) {}

  async Load (params: LoadWeatherResult.Params): Promise<LoadWeatherResult.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params
    })
    const remoteWeatherResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return {
          IsDayTime: remoteWeatherResult?.IsDayTime,
          WeatherText: remoteWeatherResult?.WeatherText,
          WeatherIcon: remoteWeatherResult?.WeatherIcon,
          Temperature: remoteWeatherResult?.Temperature
        }
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadWeatherResult {
  export type Model = LoadWeatherResult.Model
}
