import './list-styles.scss'

import { LoadCityList } from 'domain/usecases'
import React from 'react'
import { CityEmpty, CityItem } from '../..'

type Props = {
  cities: LoadCityList.Model[]
  onSelect?: (e: React.MouseEvent<HTMLElement>) => void
}

const CityList: React.FC<Props> = ({ cities, onSelect }: Props) => {
  return (
    <ul className='listWrap' data-testid="city-list">
      {cities.length
        ? cities.map((city: LoadCityList.Model) => <CityItem key={city.Key} city={city} onClick={onSelect}/>)
        : <CityEmpty />
      }
    </ul>
  )
}

export default CityList
