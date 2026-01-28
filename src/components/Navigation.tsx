import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (location.pathname !== '/') {
      return // Let React Router handle navigation
    }
    if (targetId) {
      e.preventDefault()
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-stone-50/95 backdrop-blur-xl border-b border-stone-200 z-[1000] py-6 transition-shadow ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="text-xl font-serif italic text-stone-900 hover:text-sky-500 transition-colors"
        >
          Nicole Lee
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            <li>
              <a
                href="#work"
                onClick={(e) => handleNavClick(e, 'work')}
                className="text-sm text-stone-600 font-medium hover:text-stone-900 transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm text-stone-600 font-medium hover:text-stone-900 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
          <a
            href="/resume.pdf"
            download
            className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-stone-800 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
