import { Link } from 'react-router-dom'
import { Bubbles } from './Bubbles'

export function Hero() {
  return (
    <section className="min-h-screen flex items-end relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100/50 to-white">
      <Bubbles />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      <div className="mx-auto max-w-7xl px-6 w-full pb-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="max-w-2xl">
            <p className="text-base text-stone-600 mb-4">Hey there 👋 I&apos;m</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] leading-tight mb-6 font-serif font-normal text-stone-900">
              Nicole Lee
            </h1>
            <p className="text-xl text-stone-900 mb-12 leading-relaxed">
              An aspiring product designer crafting <span className="text-sky-500 font-semibold">simple, playful, and memorable</span> experiences across mobile, web, desktop, and brand identity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  BASED IN
                </div>
                <div className="text-lg text-stone-900">🌍 San Francisco</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  CURRENTLY
                </div>
                <div className="text-lg text-stone-900">Open to opportunities</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  FOCUS
                </div>
                <div className="text-lg text-stone-900">Product Design & UX/UI</div>
              </div>
            </div>

            <Link
              to="#work"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-stone-800 transition-colors"
            >
              View My Work
            </Link>
          </div>
          <div className="hidden lg:block">
            {/* Space reserved for future visuals/images */}
          </div>
        </div>
      </div>
    </section>
  )
}
