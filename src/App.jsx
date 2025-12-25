import React, { Suspense, lazy } from 'react'
import MapleLeafHero from './MapleLeafHero'
import ApplyNow from './ApplyNow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const MapleLeafHero = lazy(() => import('./MapleLeafHero'))
const ApplyNow = lazy(() => import('./ApplyNow'))
const FoodsJobs = lazy(() => import('./JobCard'))
const CheckStatus = lazy(() => import('./CheckStatus'))
const OfferLetterPage = lazy(() => import('./OfferLetterPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MapleLeafHero />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/jobs" element={<FoodsJobs />} />
          <Route path="/status" element={<CheckStatus />} />
          <Route path="/offer-letter" element={<OfferLetterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MapleLeafHero />} />
//         <Route path="/apply-now" element={<ApplyNow />} />
//         {/* <Route path="/admin" element={<AdminPanel />} /> */}
//         <Route path="/jobs" element={<FoodsJobs />} />
//         {/* <Route path='/user-info' element={<AdminDashboard />} /> */}
//         <Route path='/status' element={<CheckStatus />} />
//         <Route path="/offer-letter" element={<OfferLetterPage />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
