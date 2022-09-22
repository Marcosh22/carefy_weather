import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { makeSearchCityWheater } from '../factories/pages'

const Router: React.FC = () => {
  return (
      <BrowserRouter>
          <Route path="/" component={makeSearchCityWheater} />
      </BrowserRouter>
  )
}

export default Router
