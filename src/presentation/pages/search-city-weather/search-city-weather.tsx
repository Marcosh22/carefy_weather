import { LoadCityList, LoadWeatherResult } from 'domain/usecases'
import { Error, Footer, Header } from 'presentation/components'
import { useState } from 'react'
import { CityList } from './components'
import './search-city-weather-styles.scss'

type Props = {
  loadCityList: LoadCityList
  loadWheaterResult: LoadWeatherResult
}

const SearchCityWheater: React.FC<Props> = ({
  loadCityList,
  loadWheaterResult
}: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [cities, setCities] = useState<LoadCityList.Model[]>([])

  const handleCityInputChange = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault()
    const value = event.currentTarget.value
    setCity(value)
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    try {
      if (isLoading) {
        return
      }

      setLoading(true)
      setError('')

      const cities = await loadCityList.Search({ q: city, apikey: process.env.REACT_APP_API_KEY })
      setCities(cities)
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className=''>
      <Header />
      <div className=''>
        <h2>Enquetes</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name='city' value={city} onChange={handleCityInputChange}/>
          <input type="submit" value="Buscar" />
        </form>
        {error ? <Error error={error} /> : <CityList cities={cities} />}
      </div>
      <Footer />
    </div>
  )
}

export default SearchCityWheater
