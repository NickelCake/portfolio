import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Work } from '../components/Work'
import { Footer } from '../components/Footer'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    if (!id) return

    // Wait a tick for the section to be in the DOM after navigation.
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.hash])

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero />
      <Work />
      <Footer />
    </div>
  )
}
