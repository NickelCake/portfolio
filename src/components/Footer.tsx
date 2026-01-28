import { useLocation } from 'react-router-dom'

export function Footer() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project')

  return (
    <footer className="relative overflow-hidden bg-[#eeeeee] text-stone-900">
      <div className="absolute inset-0 paper-grain-bg z-0 pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-16 text-center relative z-10">
        <div
          className={`${isProjectPage ? 'text-xs' : 'text-[11px]'} font-semibold uppercase tracking-[0.25em] text-stone-600`}
        >
          Let&apos;s Connect
        </div>
        <h2
          className={`mt-4 font-serif ${isProjectPage ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} tracking-tight`}
        >
          Get in Touch
        </h2>
        <p
          className={`mx-auto mt-6 max-w-2xl ${isProjectPage ? 'text-base md:text-lg' : 'text-sm md:text-base'} leading-relaxed text-stone-700`}
        >
          Have a project in mind? Looking for a designer? Or just want to chat about
          design? I&apos;d love to hear from you!
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <a
            href="mailto:nicolelee3003@gmail.com"
            className={`inline-flex items-center justify-center rounded-full bg-white/95 border border-stone-300 shadow-sm text-sky-600 transition hover:bg-white hover:border-sky-400 hover:text-sky-700 ${
              isProjectPage ? 'p-3.5' : 'p-3'
            }`}
          >
            <span className="sr-only">Email</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={isProjectPage ? 'h-7 w-7' : 'h-6 w-6'}
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M4 7.5 11.2 12c.5.33 1.1.33 1.6 0L20 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/nicolee03/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-full bg-white/95 border border-stone-300 shadow-sm text-sky-600 transition hover:bg-white hover:border-sky-400 hover:text-sky-700 ${
              isProjectPage ? 'p-3.5' : 'p-3'
            }`}
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={isProjectPage ? 'h-7 w-7' : 'h-6 w-6'}
            >
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="3.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M7.8 10.3V17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="7.8" cy="7.7" r="1" fill="currentColor" />
              <path
                d="M11 17v-4.1c0-1.6.8-2.6 2.2-2.6 1.3 0 2.1.9 2.1 2.6V17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 12.4c.4-1.3 1.3-2.1 2.5-2.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className={`inline-flex items-center justify-center rounded-full bg-white/95 border border-stone-300 shadow-sm text-sky-600 transition hover:bg-white hover:border-sky-400 hover:text-sky-700 ${
              isProjectPage ? 'p-3.5' : 'p-3'
            }`}
          >
            <span className="sr-only">Download Resume</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={isProjectPage ? 'h-7 w-7' : 'h-6 w-6'}
            >
              <rect
                x="6"
                y="3"
                width="12"
                height="18"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M9 7h6M9 10h6M9 13h3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        <div className="mt-5 text-sm text-stone-600">
          <a
            href="mailto:nicolelee3003@gmail.com"
            className="underline underline-offset-4 decoration-stone-400/70 hover:text-stone-800 transition-colors"
          >
            nicolelee3003@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 relative z-10">
        <div
          className={`mx-auto max-w-5xl px-6 text-center ${isProjectPage ? 'text-sm' : 'text-xs'} text-stone-500`}
        >
          © 2025 Nicole Lee • Designed &amp; coded with ☕ in San Francisco
        </div>
      </div>
    </footer>
  )
}
