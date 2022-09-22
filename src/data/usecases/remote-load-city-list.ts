import { HttpClient, HttpStatusCode } from 'data/protocols/http'
import { AccessDeniedError, UnexpectedError } from 'domain/errors'
import { LoadCityList } from 'domain/usecases'

export class RemoteLoadCityList implements LoadCityList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadCityList.Model[]>
  ) {}

  async Search (params: LoadCityList.Params): Promise<LoadCityList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params
    })
    const remoteCities = httpResponse.body ? httpResponse.body : []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteCities.map((remoteCities) => ({
          Key: remoteCities.Key,
          LocalizedName: remoteCities.LocalizedName,
          AdministrativeArea: remoteCities.AdministrativeArea,
          Country: remoteCities.Country
        }))
      case HttpStatusCode.noContent:
        return []
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadCityList {
  export type Model = LoadCityList.Model
}
