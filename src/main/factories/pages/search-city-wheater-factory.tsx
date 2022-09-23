import { makeRemoteLoadCityList, makeRemoteLoadWeatherResult } from 'main/factories/usecases'
import { SearchCityWeather } from 'presentation/pages'

import React from 'react'

export const MakeSearchCityWheater: React.FC = () => {
  return (
    <SearchCityWeather
      loadCityList={makeRemoteLoadCityList()}
      loadWeatherResult={makeRemoteLoadWeatherResult()}
    />
  )
}
