import React from 'react'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import { setCurrentCityAdapter, getCurrentCityAdapter } from 'main/adapters'
import { currentCityState } from 'presentation/components'
import { RecoilRoot } from 'recoil'
import { MakeSearchCityWheater } from '../factories/pages'

const Router: React.FC = () => {
  const state = {
    setCurrentCity: setCurrentCityAdapter,
    getCurrentCity: getCurrentCityAdapter
  }

  return (
    <React.StrictMode>
      <RecoilRoot initializeState={({ set }) => set(currentCityState, state)}>
        <BrowserRouter basename='/carefy_weather'>
          <Routes>
              <Route path="/" element={<MakeSearchCityWheater />}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default Router
