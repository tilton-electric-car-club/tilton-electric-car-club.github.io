import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Join from './pages/Join'
import Membership from './pages/Membership'
import Volunteer from './pages/Volunteer'
import NeedALift from './pages/NeedALift'
import PetPolicy from './pages/PetPolicy'
import Privacy from './pages/Privacy'
import Safeguarding from './pages/Safeguarding'
import Handbook from './pages/Handbook'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Cross-page anchor links (e.g. /about#how-it-works from another route) —
      // give the new page a tick to render before scrolling to the target.
      const id = hash.slice(1)
      const scrollToHash = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
      }
      requestAnimationFrame(scrollToHash)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="membership" element={<Membership />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="need-a-lift" element={<NeedALift />} />
          <Route path="pet-policy" element={<PetPolicy />} />
          <Route path="safeguarding" element={<Safeguarding />} />
          <Route path="handbook" element={<Handbook />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
