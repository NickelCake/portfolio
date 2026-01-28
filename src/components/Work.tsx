import { Link } from 'react-router-dom'

export function Work() {
  const projects = [
    {
      key: 'bonded-diamond',
      title: 'Bonded Diamond',
      description: 'Designing tools for diamond lifecycle transparency',
      role: 'Product Design, UX Research',
      problem: 'Bonded Diamond needed clearer user flows & trust indicators.',
    },
    {
      key: 'switch',
      title: 'SWITCH',
      description: 'Redesigning financial tools for student loan borrowers',
      role: 'UX/UI Design, User Research',
      problem: 'Students needed a clearer way to understand and manage loan repayment options.',
    },
    {
      key: 'aible',
      title: 'Aible',
      description: 'Simplifying enterprise AI platform navigation',
      role: 'Product Design, Interaction Design',
      problem: 'Complex workflows and unclear navigation prevented users from maximizing platform value.',
    },
    {
      key: 'governaice',
      title: 'GovernAIce',
      description: 'Building trust in AI governance systems',
      role: 'UX Research, Service Design',
      problem: 'Organizations lacked visibility into AI decision-making processes, creating trust issues.',
    },
  ]

  return (
    <section id="work" className="scroll-mt-28 bg-gradient-to-b from-white to-white pt-12 pb-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] italic tracking-tight text-stone-900 mb-14 inline-flex items-center gap-3">
          <span>Selected Work</span>
          <span className="inline-flex items-center motion-reduce:animate-none animate-bounce [animation-duration:1.4s]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-sky-500"
            >
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
        </h2>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1

            return (
              <Link
                key={project.key}
                to={`/project/${project.key}`}
                className="group block bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-500 cursor-pointer"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reverse ? 'lg:[&_.work-media]:order-2 lg:[&_.work-copy]:order-1' : ''
                  }`}
                >
                  {/* Media block (skeleton / placeholder) */}
                  <div className="work-media">
                    <div className="rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden shadow-sm transition group-hover:shadow-md">
                      <div className="relative aspect-[16/10] w-full">
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
                            <div className="mt-2 text-sm text-stone-600">
                              Replace with screenshots when ready
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy block */}
                  <div className="work-copy">
                    <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-5">
                      {project.role}
                    </div>

                    <h3 className="font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] tracking-tight text-stone-900 mb-4">
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
      </div>
    </section>
  )
}
