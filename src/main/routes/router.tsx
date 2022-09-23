import React from 'react'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'

import { MakeSearchCityWheater } from '../factories/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MakeSearchCityWheater />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
