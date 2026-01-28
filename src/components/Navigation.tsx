import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project')

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
      className={`fixed top-0 left-0 right-0 bg-white/35 backdrop-blur-2xl border-b border-white/25 z-[1000] py-5 transition-shadow ${
        scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.10)]' : ''
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
          className={`${isProjectPage ? 'text-2xl' : 'text-xl'} font-serif italic text-stone-900 hover:text-sky-500 transition-colors`}
        >
          Nicole Lee
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            <li>
              <Link
                to="/#work"
                onClick={(e) => handleNavClick(e, 'work')}
                className={`${isProjectPage ? 'text-base' : 'text-sm'} text-stone-700 font-medium hover:text-stone-900 transition-colors`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${isProjectPage ? 'text-base' : 'text-sm'} text-stone-700 font-medium hover:text-stone-900 transition-colors`}
              >
                About
              </Link>
            </li>
          </ul>
          <a
            href="https://linkedin.com/in/nicolee03/"
            target="_blank"
            rel="noreferrer"
            className={`${isProjectPage ? 'text-base' : 'text-sm'} text-stone-700 font-medium hover:text-stone-900 transition-colors`}
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className={`bg-sky-500 text-white ${isProjectPage ? 'px-4 py-2 text-base' : 'px-3 py-2 text-sm'} rounded-lg font-semibold hover:bg-sky-600 transition-colors`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
