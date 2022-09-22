import './error-styles.scss'

import React from 'react'

type Props = {
  error: string
}

const Error: React.FC<Props> = ({ error }: Props) => {
  return (
    <div className='errorWrap'>
      <span data-testid="error">{error}</span>
    </div>
  )
}

export default Error
