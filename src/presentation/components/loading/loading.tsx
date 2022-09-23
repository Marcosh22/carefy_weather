import './loading-styles.scss'
import { Spinner } from 'presentation/components'

import React from 'react'

const Loading: React.FC = () => {
  return (
    <div data-testid="loading" className='loadingWrap'>
      <div className='loading'>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </div>
    </div>
  )
}

export default Loading
