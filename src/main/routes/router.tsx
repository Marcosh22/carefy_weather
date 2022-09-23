import React from 'react'
import {
  HashRouter, Route, Routes
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
        <HashRouter>
          <Routes>
              <Route path="/" element={<MakeSearchCityWheater />}/>
            </Routes>
        </HashRouter>
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default Router
