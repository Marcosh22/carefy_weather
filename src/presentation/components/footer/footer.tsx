import './footer-styles.scss'

import React, { memo } from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <span>Developed by <a href="https://github.com/Marcosh22" target="_blank" rel="noopener noreferrer">Marcosh22</a></span>
    </footer>
  )
}

export default memo(Footer)
