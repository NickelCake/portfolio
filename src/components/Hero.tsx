import { useState, useEffect } from 'react'
import { Bubbles } from './Bubbles'
import { FloatingIcons } from './FloatingIcons'

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
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-[#F7F1EA]">
      <div
        className="absolute inset-x-0 top-0 bottom-0 hero-inspo-bg z-0 pointer-events-none"
        aria-hidden="true"
      />
      <Bubbles mousePos={mousePos} />
      <FloatingIcons mousePos={mousePos} />
      <div className="absolute bottom-0 left-0 right-0 h-72 md:h-80 lg:h-96 bg-gradient-to-t from-[#F7F1EA] via-[#F7F1EA]/70 to-transparent pointer-events-none z-10"></div>
      <div className="mx-auto max-w-7xl px-6 w-full py-10 relative z-30">
        <div className="grid grid-cols-1 gap-12 items-center justify-items-start">
          <div className="max-w-4xl text-left">
            <h1 className="text-[clamp(2.25rem,5.6vw,4.2rem)] leading-tight mb-6 font-serif font-normal text-[#19195C]">
              Hi there,<br />
              <span className="whitespace-nowrap">I&apos;m Nicole a Product Designer.</span>
            </h1>
            <p className="text-sm md:text-base text-stone-600 mb-6 leading-relaxed max-w-4xl lg:whitespace-nowrap">
              A systems thinker focused on clarity, accessibility, and real human needs.

            </p>

            <div className="text-sm md:text-base text-stone-700 leading-relaxed">
              <div className="font-medium text-stone-900">Product Designer @ Bonded Diamond</div>
              <div className="text-stone-600">
                Design Innovation, Minor in Data Science, B.A. Cognitive Science // UC Berkeley
              </div>
            </div>

            {/* Removed "View My Work" button */}
          </div>
        </div>
      </div>
    </section>
  )
}
