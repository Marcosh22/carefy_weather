import './item-styles.scss'

import { LoadCityList } from 'domain/usecases'
import React from 'react'

type Props = {
  city: LoadCityList.Model
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const CityList: React.FC<Props> = ({ city, onClick }: Props) => {
  return (
    <li onClick={onClick}>
      {city.LocalizedName} - {city.AdministrativeArea.LocalizedName} - {city.Country.LocalizedName}
    </li>
  )
}

export default CityList
