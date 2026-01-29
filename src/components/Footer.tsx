import { Link, useLocation } from 'react-router-dom'

export function Footer() {
  const location = useLocation()

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
    <footer className="bg-[#edf1fa] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#19195C]">
            Thanks for visiting! ⋆˙⟡
          </h2>
          <p className="mt-4 text-sm md:text-base text-stone-700">Let&apos;s connect</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Contact */}
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-stone-700 mb-1">Email:</div>
                <a
                  href="mailto:nicolelee3003@gmail.com"
                  className="text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors"
                >
                  nicolelee3003@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-stone-700 mb-1">LinkedIn:</div>
                <a
                  href="https://linkedin.com/in/nicolee03/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors"
                >
                  https://www.linkedin.com/in/nicolee03/
                </a>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex flex-col items-start md:items-end space-y-2">
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors ${
                  location.pathname === '/' ? 'text-stone-900' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className={`text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors ${
                  location.pathname === '/' && location.hash === '#projects' ? 'text-stone-900' : ''
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors ${
                  location.pathname === '/about' ? 'text-stone-900' : ''
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
