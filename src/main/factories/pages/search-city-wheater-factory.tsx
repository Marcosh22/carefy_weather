import { makeRemoteLoadCityList, makeRemoteLoadWeatherResult } from 'main/factories/usecases'
import { SearchCityWheater } from 'presentation/pages'

import React from 'react'

export const MakeSearchCityWheater: React.FC = () => {
  return (
    <SearchCityWheater
      loadCityList={makeRemoteLoadCityList()}
      loadWheaterResult={makeRemoteLoadWeatherResult()}
    />
  )
}
