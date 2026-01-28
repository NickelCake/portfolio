import React from 'react'

const bubbleColors = [
  {
    name: 'blue',
    gradient: 'radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(37, 99, 235, 0.4) 100%)',
    shadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset -10px -10px 20px rgba(37, 99, 235, 0.2), inset 10px 10px 20px rgba(147, 197, 253, 0.3)',
  },
  {
    name: 'pink',
    gradient: 'radial-gradient(circle at 30% 30%, rgba(251, 182, 206, 0.8) 0%, rgba(244, 114, 182, 0.6) 50%, rgba(236, 72, 153, 0.4) 100%)',
    shadow: '0 8px 32px rgba(244, 114, 182, 0.3), inset -10px -10px 20px rgba(236, 72, 153, 0.2), inset 10px 10px 20px rgba(251, 182, 206, 0.3)',
  },
  {
    name: 'purple',
    gradient: 'radial-gradient(circle at 30% 30%, rgba(196, 181, 253, 0.8) 0%, rgba(167, 139, 250, 0.6) 50%, rgba(139, 92, 246, 0.4) 100%)',
    shadow: '0 8px 32px rgba(167, 139, 250, 0.3), inset -10px -10px 20px rgba(139, 92, 246, 0.2), inset 10px 10px 20px rgba(196, 181, 253, 0.3)',
  },
]

export function Bubbles() {
  const bubbles = Array.from({ length: 15 }, (_, i) => {
    const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
    return {
      id: i,
      size: Math.random() * 100 + 50, // 50-150px
      left: Math.random() * 100, // 0-100%
      delay: Math.random() * 20, // 0-20s delay
      duration: Math.random() * 20 + 15, // 15-35s duration
      drift: (Math.random() - 0.5) * 200, // -100px to 100px horizontal drift
      color: color,
    }
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bubble-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            background: bubble.color.gradient,
            boxShadow: bubble.color.shadow,
            opacity: 0.7,
            animation: `float ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            '--drift': `${bubble.drift}px`,
          } as React.CSSProperties & { '--drift': string }}
        />
      ))}
    </div>
  )
}
