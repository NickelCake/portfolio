interface Tool {
  name: string
  icon?: string // Path to icon image
}

const tools: Tool[] = [
  { name: 'Figma', icon: '/icons/figma.png' },
  { name: 'Adobe Illustrator', icon: '/icons/illustrator.png' },
  { name: 'Adobe Photoshop', icon: '/icons/photoshop.png' },
  { name: 'Canva', icon: '/icons/canva.png' },
  { name: 'Blender', icon: '/icons/blender.png' },
  { name: 'Autodesk', icon: '/icons/autodesk.png' },
  { name: 'Framer', icon: '/icons/framer.png' },
  { name: 'Affinity', icon: '/icons/affinity.png' },
]

export function ToolsCarousel() {
  // Duplicate tools for seamless infinite scroll effect
  const duplicatedTools = [...tools, ...tools, ...tools]

  return (
    <div className="mt-32 mb-16">
      <h3 className="font-serif font-normal italic text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight text-[#19195C] mb-10 text-left">
        Current Toolkit
      </h3>
      <div className="relative overflow-hidden py-4">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F1EA] to-transparent z-10 pointer-events-none" />
        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F1EA] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 animate-scroll items-center">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                  style={{ 
                    display: 'block'
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
