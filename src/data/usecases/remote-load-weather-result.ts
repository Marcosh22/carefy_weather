import { HttpClient, HttpStatusCode } from 'data/protocols/http'
import { AccessDeniedError, UnexpectedError, ServiceUnavailableError } from 'domain/errors'
import { LoadWeatherResult } from 'domain/usecases'

export class RemoteLoadWeatherResult implements LoadWeatherResult {
  constructor (
    private readonly url: string,
    private readonly language: string,
    private readonly showDetails: boolean,
    private readonly apiKey: string,
    private readonly httpClient: HttpClient<RemoteLoadWeatherResult.Model[]>
  ) {}

  async Load (locationKey: number): Promise<LoadWeatherResult.Model> {
    const params = {
      details: this.showDetails,
      apikey: this.apiKey,
      language: this.language
    }

    const httpResponse = await this.httpClient.request({
      url: `${this.url}${locationKey}`,
      method: 'get',
      params
    })
    const remoteWeatherResult = httpResponse.body[0]
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
      case HttpStatusCode.unavailable:
        throw new ServiceUnavailableError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadWeatherResult {
  export type Model = LoadWeatherResult.Model
}
