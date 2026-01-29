import React from 'react'

interface FloatingIconsProps {
  mousePos?: { x: number; y: number }
}

// Fixed static positions for each icon - positioned on right side to avoid text
const appIcons = [
  { name: 'Figma', icon: '/icons/figma.png', left: '75%', top: '15%', delay: '0s', duration: '3s' },
  { name: 'Illustrator', icon: '/icons/illustrator.png', left: '80%', top: '25%', delay: '0.5s', duration: '3.5s' },
  { name: 'Photoshop', icon: '/icons/photoshop.png', left: '70%', top: '35%', delay: '1s', duration: '4s' },
  { name: 'Canva', icon: '/icons/canva.png', left: '85%', top: '20%', delay: '1.5s', duration: '3.2s' },
  { name: 'Blender', icon: '/icons/blender.png', left: '75%', top: '30%', delay: '2s', duration: '3.8s' },
  { name: 'Autodesk', icon: '/icons/autodesk.png', left: '80%', top: '40%', delay: '2.5s', duration: '4.2s' },
  { name: 'Framer', icon: '/icons/framer.png', left: '70%', top: '25%', delay: '3s', duration: '3.6s' },
  { name: 'Affinity', icon: '/icons/affinity.png', left: '85%', top: '35%', delay: '3.5s', duration: '3.9s' },
]

export function FloatingIcons({ mousePos }: FloatingIconsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {appIcons.map((icon, i) => {
        const style = {
          left: icon.left,
          top: icon.top,
          animation: `bobIcon ${icon.duration} ease-in-out infinite`,
          animationDelay: icon.delay,
        } as React.CSSProperties

        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={style}
            title={icon.name}
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="w-12 h-12 object-contain"
              style={{ display: 'block' }}
              onError={(e) => {
                console.error(`Failed to load icon: ${icon.icon}`)
                const target = e.target as HTMLImageElement
                target.style.border = '2px dashed #ef4444'
                target.style.backgroundColor = '#fef2f2'
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
