
import { LoadCityList } from 'domain/usecases'
import React from 'react'
import './item-styles.scss'


type Props = {
  city: LoadCityList.Model
  onSelect?: (city: LoadCityList.Model) => void
}

const CityNameList: React.FC<Props> = ({ city, onSelect }: Props) => {
  const handleClick = async (
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    event.preventDefault()
    if (onSelect) onSelect(city)
  }

  return (
    <li onClick={handleClick} className="listItem">
      {city.LocalizedName} - {city.AdministrativeArea.LocalizedName} - {city.Country.LocalizedName}
    </li>
  )
}

export default CityNameList
