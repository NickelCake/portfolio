import { Link } from 'react-router-dom'

export function About() {
  return (
    <section className="scroll-mt-28 bg-stone-50 py-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sky-600 font-medium mb-8 hover:text-sky-500 transition-colors"
        >
          ← Back to Home
        </Link>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] italic tracking-tight text-stone-900 mb-16">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-16 text-center md:text-left">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center text-7xl flex-shrink-0 shadow-2xl">
            👤
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-serif italic text-stone-900 mb-6">Nicole Lee</h3>
            <p className="text-xl leading-relaxed text-stone-600">
              I&apos;m a product designer who combines research, data, and design thinking to solve
              real user problems.
            </p>
          </div>
        </div>

        <div className="max-w-4xl space-y-16">
          <div>
            <h3 className="text-3xl font-serif italic text-stone-900 mb-6">Background</h3>
            <p className="text-lg leading-relaxed text-stone-700 mb-4">
              I studied cognitive science and data science at UC Berkeley, where I developed a deep
              curiosity about how people think, make decisions, and interact with technology. This
              interdisciplinary foundation taught me to approach design problems from multiple
              angles—understanding both the human psychology behind user behavior and the data that
              reveals patterns in how products are actually used.
            </p>
            <p className="text-lg leading-relaxed text-stone-700">
              Today, I combine research, data analysis, and design thinking to create digital
              products that are not just beautiful, but genuinely useful. I&apos;m focused on
              solving real user problems through thoughtful, iterative design that&apos;s grounded
              in evidence and empathy.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-serif italic text-stone-900 mb-6">How I Work</h3>
            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              My design process is rooted in understanding people first, then designing solutions
              that meet their actual needs.
            </p>
            <ul className="space-y-3 list-none">
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Human-centered research</strong> — I start by understanding users through
                interviews, observations, and contextual inquiry
              </li>
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Usability testing</strong> — I validate assumptions early and often,
                learning from real user behavior
              </li>
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Iterative prototyping</strong> — I design, test, learn, and refine in cycles
              </li>
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Cross-functional collaboration</strong> — I work closely with engineering,
                product, and stakeholders to ship solutions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-serif italic text-stone-900 mb-6">What I Care About</h3>
            <ul className="space-y-3 list-none">
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Accessibility</strong> — Good design should work for everyone
              </li>
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Product thinking</strong> — I care about the whole picture and how design
                decisions impact outcomes
              </li>
              <li className="text-lg leading-relaxed text-stone-700 pl-6 relative">
                <span className="absolute left-0 text-sky-500">→</span>
                <strong>Measurable impact</strong> — Design should be evaluated on whether it helps
                people accomplish their goals
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-serif italic text-stone-900 mb-6">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                User Research & Synthesis
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Usability Testing
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Prototyping
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Design Systems
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Interaction Design
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Information Architecture
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Cross-functional Collaboration
              </div>
              <div className="bg-white border border-stone-200 p-4 text-center text-sm">
                Data-Informed Design
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg italic text-sky-600">
              I&apos;m always learning, curious by nature, and love turning ambiguity into clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
