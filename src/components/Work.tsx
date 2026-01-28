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
    <section id="work" className="scroll-mt-28 bg-gradient-to-b from-white to-white py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] italic tracking-tight text-stone-900 mb-16">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <Link
              key={project.key}
              to={`/project/${project.key}`}
              className="group bg-stone-50 border border-stone-200 p-8 rounded-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-sky-500 block"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-serif italic text-stone-900">{project.title}</h3>
                <span className="text-2xl text-sky-500 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-lg text-stone-900 mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <span className="text-sm text-stone-600 uppercase tracking-wider font-medium">
                  {project.role}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>Problem:</strong> {project.problem}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
