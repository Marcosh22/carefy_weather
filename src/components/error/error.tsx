import './error-styles.scss'

import React from 'react'

type Props = {
  error: string
  reload: () => void
}

const Error: React.FC<Props> = ({ error, reload }: Props) => {
  return (
    <div className="errorWrap">
      <span data-testid="error">{error}</span>
      <button data-testid="reload" onClick={reload}>
        Tentar novamente
      </button>
    </div>
  )
}

export default Error
