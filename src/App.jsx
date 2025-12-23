import React from 'react'
import MapleLeafHero from './MapleLeafHero'
import ApplyNow from './ApplyNow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './AdminPanel'
import FoodsJobs from './JobCard'

function App() {

  return (
    // <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapleLeafHero />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/jobs" element={<FoodsJobs />} />
        </Routes>
      </BrowserRouter>
    // </>
  )
}

export default App
