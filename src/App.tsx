import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // If we're navigating to a hash target (e.g. /#work), let the page handle it.
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:projectKey" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
