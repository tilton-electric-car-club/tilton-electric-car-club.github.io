import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import NeedALift from './pages/NeedALift'
import PetPolicy from './pages/PetPolicy'
import Privacy from './pages/Privacy'
import Safeguarding from './pages/Safeguarding'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="need-a-lift" element={<NeedALift />} />
          <Route path="pet-policy" element={<PetPolicy />} />
          <Route path="safeguarding" element={<Safeguarding />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  )
}
