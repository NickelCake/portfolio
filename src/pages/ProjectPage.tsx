import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { projectData } from '../data/projects'

type SectionConfig = {
  id: string
  label: string
  sourceIndex?: number
}

const sectionConfig: SectionConfig[] = [
  { id: 'summary', label: 'Project Summary' },
  { id: 'intro', label: 'Intro', sourceIndex: 1 },
  { id: 'problem', label: 'Problem', sourceIndex: 0 },
  { id: 'research', label: 'Research', sourceIndex: 2 },
  { id: 'insights', label: 'Insights', sourceIndex: 3 },
  { id: 'solution', label: 'Solution', sourceIndex: 5 },
  { id: 'product', label: 'Product', sourceIndex: 4 },
  { id: 'impact', label: 'Impact', sourceIndex: 6 },
]

const heroImages: Record<string, string> = {
  'bonded-diamond': '/thumbnails/bonded.png',
  corner: '/thumbnails/corner.png',
  'switch-ai-urbiverse': '/thumbnails/switch.png',
  switch: '/thumbnails/switch.png',
  aible: '/thumbnails/aible.png',
  governaice: '/thumbnails/governaice.png',
}

export function ProjectPage() {
  const { projectKey } = useParams<{ projectKey: string }>()
  const project = projectKey ? projectData[projectKey] : null
  const [activeSection, setActiveSection] = useState<string>('summary')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topMost: { id: string; top: number } | null = null

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id
            const top = entry.boundingClientRect.top
            if (!topMost || top < topMost.top) {
              topMost = { id, top }
            }
          }
        })

        if (topMost) {
          setActiveSection(topMost.id)
        }
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
    )

    sectionConfig.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Project not found</h1>
            <Link to="/" className="text-sky-500 hover:text-sky-600">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const heroSrc = projectKey ? heroImages[projectKey] : undefined

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Main content column */}
          <div>
            <section id="summary" className="scroll-mt-32">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sky-500 font-medium mb-6 hover:text-sky-600 transition-colors"
              >
                ← Back to Projects
              </Link>

              {/* Hero block */}
              <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm mb-10">
                {heroSrc && (
                  <div className="relative bg-stone-100 border-b border-stone-200">
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={heroSrc}
                        alt={`${project.title} hero mockup`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <h1 className="text-[clamp(2rem,4vw,3rem)] leading-tight mb-3 font-['DM_Serif_Display'] text-[#19195C]">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-stone-700 leading-relaxed">{project.overview}</p>
                </div>
              </div>

              {/* Project summary stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">My Role</div>
                  <div className="text-base text-stone-900">{project.role}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">Timeline</div>
                  <div className="text-base text-stone-900">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">Tools</div>
                  <div className="text-base text-stone-900">{project.tools}</div>
                </div>
              </div>
            </section>

            {/* Detailed sections flowing with background */}
            <div className="mt-4">
              {sectionConfig
                .filter((s) => s.id !== 'summary')
                .map((section) => {
                  const index = section.sourceIndex
                  const content = typeof index === 'number' ? project.sections[index] : undefined
                  if (!content) return null

                  return (
                    <section key={section.id} id={section.id} className="scroll-mt-32 mb-12 last:mb-0">
                      <h2 className="text-xl md:text-2xl font-['DM_Serif_Display'] italic text-[#19195C] mb-4">
                        {section.label}
                      </h2>
                      <div
                        className="text-stone-700 leading-relaxed space-y-4 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-stone-900 [&_h4]:mt-6 [&_h4]:mb-4 [&_p]:mb-4 [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:pl-6 [&_li]:relative [&_li]:before:content-['→'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-sky-500 [&_.highlight-box]:bg-stone-50 [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-sky-500 [&_.highlight-box]:p-6 [&_.highlight-box]:my-8 [&_.highlight-box]:rounded [&_.highlight-box_*]:m-0 [&_.highlight-box_p]:italic [&_.highlight-box_p]:text-stone-600"
                        dangerouslySetInnerHTML={{ __html: content.content }}
                      />
                    </section>
                  )
                })}
            </div>
          </div>

          {/* Right-side nav (desktop only) */}
          <aside className="hidden lg:block fixed right-16 top-1/2 -translate-y-1/2 z-40">
            <nav>
              <ul className="space-y-2 text-sm text-stone-600 text-right">
                {sectionConfig.map((section) => {
                  const hasContent =
                    section.id === 'summary' ||
                    (typeof section.sourceIndex === 'number' && project.sections[section.sourceIndex])
                  const isActive = activeSection === section.id

                  if (!hasContent) {
                    return (
                      <li key={section.id} className="opacity-40 cursor-default">
                        {section.label}
                      </li>
                    )
                  }

                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`block transition-colors ${
                          isActive ? 'text-[#19195C] font-semibold' : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
