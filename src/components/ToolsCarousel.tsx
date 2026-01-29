import { appIcons } from './FloatingIcons'

export function ToolsCarousel() {
  return (
    <div className="mt-32 mb-16">
      <h3 className="font-serif font-normal italic text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight text-[#1F385B] mb-10 text-left">
        Current Toolkit
      </h3>
      <div className="py-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 items-center">
          {appIcons.map((tool) => (
            <div key={tool.name} className="flex-shrink-0 flex items-center justify-center">
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                  style={{
                    display: 'block',
                  }}
                  onError={(e) => {
                    console.error(`Failed to load icon: ${tool.icon}`)
                    const target = e.target as HTMLImageElement
                    target.style.border = '2px dashed #ef4444'
                    target.style.backgroundColor = '#fef2f2'
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

