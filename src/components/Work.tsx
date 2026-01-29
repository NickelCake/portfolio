import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ToolsCarousel } from './ToolsCarousel'

export function Work() {
  const listTopRef = useRef<HTMLAnchorElement | null>(null)

  const projects = [
    {
      key: 'bonded-diamond',
      title: 'Bonded Diamond',
      description: 'Designing a deeply personal jewelry customization experience through thoughtful UX and visual branding',
      role: 'UX/UI Design, User Journey Design, Visual Branding',
      platform: 'Web',
      type: 'Internship',
      problem:
        'Users needed clarity, reassurance, and premium guidance while customizing emotionally high-stakes jewelry purchases.',
    },
    {
      key: 'corner',
      title: 'Corner',
      description: 'Designing a vibe-based social map to discover places through people, not ratings',
      role: 'UX/UI Design, Product Thinking, Interaction Design',
      platform: 'Mobile',
      type: 'Designathon',
      problem: 'Group plans need shared, mood-driven decisions—not single “planner” workflows built around ratings.',
    },
    {
      key: 'switch-ai-urbiverse',
      title: 'Switch AI – Urbiverse',
      description: 'Designing an AI-powered EV fleet simulation dashboard to support confident charging and operations decisions',
      role: 'UX/UI Design, UX Research',
      platform: 'Web',
      type: 'Contract',
      problem: 'Dense, technical simulation outputs made it hard to trust recommendations and compare trade-offs.',
    },
    {
      key: 'aible',
      title: 'Aible',
      description: 'Designing an explainable AI experience that empowers non-technical business users to make confident decisions',
      role: 'UX/UI Design, UX Research, Prototype',
      platform: 'Web',
      type: 'Course Project',
      problem: 'Business users needed explainability, scenario comparison, and trust signals—not data-scientist-oriented flows.',
    },
  ]

  const projectThumbnails: Partial<Record<(typeof projects)[number]['key'], string>> = {
    'bonded-diamond': '/thumbnails/bonded.png',
    corner: '/thumbnails/corner.png',
    'switch-ai-urbiverse': '/thumbnails/switch.png',
    aible: '/thumbnails/aible.png',
  }

  const scrollToProjectCards = () => {
    const el = listTopRef.current
    if (!el) return

    // Scroll so the first 1–2 cards are visible below the fixed nav.
    const navOffsetPx = 104 // ~nav height + breathing room
    const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffsetPx
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="scroll-mt-28 bg-[#F7F1EA] pt-12 pb-24 relative">
      <div className="mx-auto max-w-7xl px-6 -mt-40 md:-mt-48 lg:-mt-56 relative z-10">
        <h2 className="mb-4">
          <button
            type="button"
            onClick={scrollToProjectCards}
            className="group font-['DM_Serif_Display'] font-normal italic text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight text-[#19195C] inline-flex items-center gap-3 hover:text-[#19195C]/80 transition-colors transition-transform duration-200 hover:scale-[1.03]"
            aria-label="Scroll to project cards"
          >
            <span>Selected Projects</span>
            <span className="inline-flex items-center motion-reduce:animate-none animate-bounce [animation-duration:1.4s] group-hover:scale-110 group-hover:translate-y-[1px] transition-transform duration-200">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-sky-500">
                <path
                  d="M12 5v13m0 0-5-5m5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </h2>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1

            return (
              <Link
                ref={index === 0 ? listTopRef : undefined}
                key={project.key}
                to={`/project/${project.key}`}
                className="group block bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-500 cursor-pointer"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reverse ? 'lg:[&_.work-media]:order-2 lg:[&_.work-copy]:order-1' : ''
                  }`}
                >
                  {/* Media block (thumbnail or placeholder) */}
                  <div className="work-media">
                    <div className="rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden shadow-sm transition group-hover:shadow-md">
                      <div className="relative aspect-[16/10] w-full">
                        {projectThumbnails[project.key] ? (
                          <img
                            src={projectThumbnails[project.key]}
                            alt={`${project.title} thumbnail`}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 hero-inspo-bg opacity-40" aria-hidden="true" />
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/70"
                              aria-hidden="true"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center px-6">
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                                  Project visual
                                </div>
                                <div className="mt-2 text-sm text-stone-600">Add thumbnail when ready</div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Copy block */}
                  <div className="work-copy">
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                        {project.role}
                      </div>
                      <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                        {project.platform}
                      </div>
                      <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                        {project.type}
                      </div>
                    </div>

                    <h3 className="font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] tracking-tight text-[#19195C] mb-4">
                      {project.title}
                    </h3>

                    <p className="text-base text-stone-900 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-xs text-stone-600 leading-relaxed mb-7">
                      <strong>Problem:</strong> {project.problem}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                      View Case Study
                      <span className="text-lg text-sky-500 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <ToolsCarousel />
      </div>
    </section>
  )
}
