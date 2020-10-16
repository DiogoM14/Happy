import React from 'react'

import 'leaflet/dist/leaflet.css'
import Global from './styles/Global'

import Routes from './routes'

export default function App() {
  return (
    <div className="App">
      <Routes />

      <Global />
    </div>
  )
}
