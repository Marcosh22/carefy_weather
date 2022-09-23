import { HttpClient, HttpStatusCode } from 'data/protocols/http'
import { AccessDeniedError, UnexpectedError, ServiceUnavailableError } from 'domain/errors'
import { LoadCityList } from 'domain/usecases'

export class RemoteLoadCityList implements LoadCityList {
  constructor (
    private readonly url: string,
    private readonly language: string,
    private readonly showDetails: boolean,
    private readonly apiKey: string,
    private readonly httpClient: HttpClient<RemoteLoadCityList.Model[]>
  ) {}

  async Search (searchTerm: string): Promise<LoadCityList.Model[]> {
    const params = {
      details: this.showDetails,
      apikey: this.apiKey,
      language: this.language,
      q: searchTerm
    }

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
      case HttpStatusCode.unavailable:
        throw new ServiceUnavailableError()
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
