import { LoadCityList, LoadWeatherResult } from 'domain/usecases'
import { Error, Footer, Header, currentCityState } from 'presentation/components'
import { useOutsideClick } from 'presentation/hooks'
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { CityNameList, WeatherCard } from './components'
import './search-city-weather-styles.scss'

type Props = {
  loadCityList: LoadCityList
  loadWeatherResult: LoadWeatherResult
}

const SearchCityWeather: React.FC<Props> = ({
  loadCityList,
  loadWeatherResult
}: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [showCityList, setShowCityList] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [citySearchQuery, setCitySearchQuery] = useState<string>('')
  const [cities, setCities] = useState<LoadCityList.Model[]>([])
  const [weatherResult, setWeatherResult] = useState<LoadWeatherResult.Model>()

  const { getCurrentCity, setCurrentCity } = useRecoilValue(currentCityState)

  useEffect(() => {
    if (getCurrentCity()?.Key) {
      loadWeather()
    }
  }, [getCurrentCity()?.Key])

  const handleClickOutsideCityList = (): void => {
    setShowCityList(false)
  }

  const cityListRef = useOutsideClick(handleClickOutsideCityList)

  const handleCityInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    event.preventDefault()
    const value = event.currentTarget.value
    setCitySearchQuery(value)
  }

  const handleCitySelect = (
    city: LoadCityList.Model): void => {
    setCitySearchQuery('')
    setShowCityList(false)
    setCurrentCity(city)
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

      if (citySearchQuery) {
        const cities = await loadCityList.Search(citySearchQuery)
        setCities(cities)
        setShowCityList(true)
      } else {
        setCities([])
        setShowCityList(false)
      }

      setError('')
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }
  }

  const loadWeather = async (): Promise<void> => {
    try {
      setLoading(true)

      const locationKey = getCurrentCity().Key
      const weather = await loadWeatherResult.Load(locationKey)

      setWeatherResult(weather)
      setLoading(false)
      setError('')
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className='searchCityWeatherWrapper'>
      <Header />
      <div className='searchCityWeatherContent'>
        <form onSubmit={handleSubmit}>
          <label>Busque a sua cidade:</label>
          <div className='inputGroup'>
            <input type='search' name='citySearchQuery' id='label' value={citySearchQuery} onChange={handleCityInputChange}/>
            <input type='submit' value='Buscar' />
          </div>
        </form>
        {error ? <Error error={error} /> : (showCityList ? <CityNameList cities={cities} onSelect={handleCitySelect} propRef={cityListRef} /> : null)}
        { getCurrentCity() && weatherResult && !error ? <WeatherCard city={getCurrentCity()} weather={weatherResult} /> : null }
      </div>
      <Footer />
    </div>
  )
}

export default SearchCityWeather
