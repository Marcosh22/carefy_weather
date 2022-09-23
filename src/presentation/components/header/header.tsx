import './header-styles.scss'

import React, { memo } from 'react'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <span>CarefyWeather</span>
    </header>
  )
}

export default memo(Header)
