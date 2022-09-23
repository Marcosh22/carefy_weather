import './spinner-styles.scss'

import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}

const Spinner: React.FC<Props> = ({ isNegative, ...props }: Props) => {
  return (
    <div {...props} data-testid="spinner" className={`spinner ${isNegative ? 'negative' : ''}`}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
