import { useEffect } from 'react'

interface ProjectSection {
  title: string
  content: string
}

interface ProjectData {
  title: string
  overview: string
  role: string
  timeline: string
  tools: string
  sections: ProjectSection[]
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-start justify-center p-4 overflow-y-auto"
      style={{ background: 'rgba(0, 0, 0, 0.85)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-white rounded-sm max-w-4xl w-full my-16 relative animate-[slideIn_0.4s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-4xl text-stone-600 hover:text-stone-900 transition-colors z-10 p-2 leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="border-b border-stone-200 p-12 pb-8">
          <h2 className="text-5xl font-serif font-normal text-[#19195C] mb-4">{project.title}</h2>
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
              <h3 className="text-2xl font-serif font-normal text-[#19195C] mb-6">{section.title}</h3>
              <div
                className="text-stone-700 leading-relaxed space-y-4 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-stone-900 [&_h4]:mt-6 [&_h4]:mb-4 [&_p]:mb-4 [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:pl-6 [&_li]:relative [&_li]:before:content-['→'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-sky-500 [&_.highlight-box]:bg-stone-50 [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-sky-500 [&_.highlight-box]:p-6 [&_.highlight-box]:my-8 [&_.highlight-box]:rounded [&_.highlight-box_*]:m-0 [&_.highlight-box_p]:italic [&_.highlight-box_p]:text-stone-600"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
