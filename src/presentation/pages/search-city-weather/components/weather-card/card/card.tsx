import { LoadCityList, LoadWeatherResult } from 'domain/usecases'
import { WeatherCardIconsArr } from '../icons/icons'
import React from 'react'
import './card-styles.scss'

type Props = {
  city: LoadCityList.Model
  weather: LoadWeatherResult.Model
}

const WeatherCard: React.FC<Props> = ({ city, weather }: Props) => {
  const icon = WeatherCardIconsArr[weather.WeatherIcon - 1]

  return (
      <div className="weatherCard">
        <div className={`weatherCard__header ${weather?.IsDayTime ? '' : 'is-night'}`}>
          <span className="city">{`${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName}`}</span>
          <span className="temperature">{`${weather.Temperature.Metric.Value}° ${weather.Temperature.Metric.Unit}`}</span>
          <span className="status">{weather.WeatherText}</span>
          <div className="weatherCard__clear">
            <div className="icon">
              <img src={icon} />
            </div>
            <div className="grassland"></div>
            <div className="grassland"></div>
          </div>
        </div>
      </div>
  )
}

export default WeatherCard
