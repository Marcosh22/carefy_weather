import { makeRemoteLoadCityList, makeRemoteLoadWeatherResult } from '@/main/factories/usecases'
import { SearchCityWheater } from '@/presentation/pages'

import React from 'react'

export const makeSearchCityWheater: React.FC = () => {
  return (
    <SearchCityWheater
      loadCityList={makeRemoteLoadCityList()}
      loadWheaterResult={makeRemoteLoadWeatherResult()}
    />
  )
}
