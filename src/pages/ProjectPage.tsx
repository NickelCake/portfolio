import { useParams, Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { projectData } from '../data/projects'

export function ProjectPage() {
  const { projectKey } = useParams<{ projectKey: string }>()
  const project = projectKey ? projectData[projectKey] : null

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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sky-500 font-medium mb-8 hover:text-sky-600 transition-colors"
          >
            ← Back to Work
          </Link>

          <div className="bg-white border border-stone-200 rounded-lg">
            <div className="border-b border-stone-200 p-12 pb-8">
              <h1 className="text-5xl font-serif italic text-stone-900 mb-4">{project.title}</h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">{project.overview}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    My Role
                  </div>
                  <div className="text-base text-stone-900">{project.role}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Timeline
                  </div>
                  <div className="text-base text-stone-900">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Tools
                  </div>
                  <div className="text-base text-stone-900">{project.tools}</div>
                </div>
              </div>
            </div>

            <div className="p-12">
              {project.sections.map((section, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <h2 className="text-2xl font-serif italic text-stone-900 mb-6">{section.title}</h2>
                  <div
                    className="text-stone-700 leading-relaxed space-y-4 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-stone-900 [&_h4]:mt-6 [&_h4]:mb-4 [&_p]:mb-4 [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:pl-6 [&_li]:relative [&_li]:before:content-['→'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-sky-500 [&_.highlight-box]:bg-stone-50 [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-sky-500 [&_.highlight-box]:p-6 [&_.highlight-box]:my-8 [&_.highlight-box]:rounded [&_.highlight-box_*]:m-0 [&_.highlight-box_p]:italic [&_.highlight-box_p]:text-stone-600"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
