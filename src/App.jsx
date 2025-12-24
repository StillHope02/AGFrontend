import React from 'react'
import MapleLeafHero from './MapleLeafHero'
import ApplyNow from './ApplyNow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './AdminPanel'
import FoodsJobs from './JobCard'
import AdminDashboard from './AdminDashboard'
import CheckStatus from './CheckStatus'

function App() {

  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapleLeafHero />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/jobs" element={<FoodsJobs />} />
        <Route path='/user-info' element={<AdminDashboard />} />
        <Route path='/status' element={<CheckStatus />} />
        <Route path="/offer-letter" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {/* <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h1 className="text-2xl font-bold text-green-700 mb-4">Redirecting to Offer Letter...</h1>
              <p className="text-gray-600 mb-6">
                Your offer letter is being loaded from our server.
              </p>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-sm text-gray-500">
                If not redirected automatically, <a href={`${window.location.href}`} className="text-green-600 underline">click here</a>
              </p>
            </div> */}
          </div>
        } />
      </Routes>
    </BrowserRouter>
    // </>
  )
}

export default App
