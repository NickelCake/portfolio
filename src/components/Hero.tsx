import { useState, useEffect } from 'react'
import { Bubbles } from './Bubbles'

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-[88vh] flex items-end relative overflow-hidden bg-[#f7f7f7]">
      <div
        className="absolute inset-x-0 top-0 bottom-[-18vh] hero-inspo-bg z-0 pointer-events-none"
        aria-hidden="true"
      />
      <Bubbles mousePos={mousePos} />
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-10"></div>
      <div className="mx-auto max-w-7xl px-6 w-full pb-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="max-w-2xl">
            <p className="text-sm text-stone-600 mb-3">Hey there 👋 I&apos;m</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] leading-tight mb-6 font-serif font-normal text-[#19195C]">
              Nicole Lee
            </h1>
            <p className="text-[1.15rem] md:text-[1.2rem] text-stone-900 mb-10 leading-relaxed">
              An aspiring{' '}
              <span className="font-semibold text-[#19195C] bg-sky-200/40 px-1.5 py-0.5 rounded-md">
                PRODUCT DESIGNER
              </span>{' '}
              crafting <span className="text-sky-500 font-semibold">simple, playful, and memorable</span>{' '}
              experiences across mobile, web, desktop, and brand identity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  BASED IN
                </div>
                <div className="text-base text-stone-900">🌍 San Francisco</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  CURRENTLY
                </div>
                <div className="text-base text-stone-900 inline-flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Open to opportunities
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  FOCUS
                </div>
                <div className="text-base text-stone-900">Product Design & UX/UI</div>
              </div>
            </div>

            {/* Removed "View My Work" button */}
          </div>
          <div className="hidden lg:block">
            {/* Space reserved for future visuals/images */}
          </div>
        </div>
      </div>
    </section>
  )
}
