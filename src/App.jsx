import React from 'react'
import MapleLeafHero from './MapleLeafHero'
import ApplyNow from './ApplyNow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './AdminPanel'

function App() {

  return (
    // <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapleLeafHero />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    // </>
  )
}

export default App
