import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Background from './components/Background';
import { Route, Routes } from 'react-router-dom';
import GroundFloorMap from './components/maps/GroundFloorMap';
import FirstFloorMap from './components/maps/FirstFloorMap';
import BothMaps from './components/maps/BothMaps';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Background />} />
        <Route path='/ground-floor-map' element={<GroundFloorMap />} />
        <Route path='/first-floor-map' element={<FirstFloorMap />} />
        <Route path='/combined-map' element={<BothMaps />} />
      </Routes>
    </>
  )
}
export default App