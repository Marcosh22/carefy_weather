import './list-styles.scss'

import { LoadCityList } from 'domain/usecases'
import React from 'react'
import { CityNameEmpty, CityNameItem } from '../..'

type Props = {
  cities: LoadCityList.Model[]
  propRef?: React.RefObject<HTMLUListElement>
  onSelect?: (city: LoadCityList.Model) => void
}

const CityNameList: React.FC<Props> = ({ cities, propRef, onSelect }: Props) => {
  return (
    <ul className="listWrap" data-testid="city-list" ref={propRef}>
      {cities.length
        ? (
            cities.map((city: LoadCityList.Model) => (
          <CityNameItem key={city.Key} city={city} onSelect={onSelect} />
            ))
          )
        : (
        <CityNameEmpty />
          )}
    </ul>
  )
}

export default CityNameList
