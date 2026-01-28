import { Navigation } from '../components/Navigation'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Footer />
    </div>
  )
}
