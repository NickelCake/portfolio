import React, { useEffect, useRef, useState, useCallback } from 'react'

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

interface BubblesProps {
  mousePos: { x: number; y: number }
}

export function Bubbles({ mousePos }: BubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [poppedMap, setPoppedMap] = useState<Record<number, boolean>>({})

  const bubbles = React.useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
      return {
        id: i,
        size: Math.random() * 100 + 50, // 50-150px
        left: Math.random() * 100, // 0-100%
        delay: Math.random() * 20, // 0-20s delay
        duration: Math.random() * 20 + 15, // 15-35s duration
        drift: (Math.random() - 0.5) * 200, // -100px to 100px horizontal drift
        shineDuration: Math.random() * 4 + 5, // 5-9s
        shineDelay: Math.random() * 3, // 0-3s
        shineRotate: Math.random() * 360, // 0-360deg
        color: color,
      }
    })
  }, [])

  const bubbleRefs = React.useMemo(
    () => bubbles.map(() => React.createRef<HTMLDivElement>()),
    [bubbles]
  )

  const playPopSound = useCallback(() => {
    if (typeof window === 'undefined') return
    try {
      const AudioContextClass =
        (window as any).AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return

      const ctx = new AudioContextClass()
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()

      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(520, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(
        140,
        ctx.currentTime + 0.16
      )

      gain.gain.setValueAtTime(0.4, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18)

      oscillator.connect(gain)
      gain.connect(ctx.destination)

      oscillator.start()
      oscillator.stop(ctx.currentTime + 0.22)

      // Close context shortly after to free resources
      setTimeout(() => {
        ctx.close()
      }, 300)
    } catch {
      // Fail silently if Web Audio is unavailable
    }
  }, [])

  const handleBubbleClick = (id: number) => {
    setPoppedMap((prev) => {
      if (prev[id]) return prev
      return { ...prev, [id]: true }
    })
    playPopSound()
  }

  useEffect(() => {
    const updateReflections = () => {
      bubbleRefs.forEach((ref) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const bubbleCenterX = rect.left + rect.width / 2
        const bubbleCenterY = rect.top + rect.height / 2

        // Calculate angle from bubble center to mouse
        const dx = mousePos.x - bubbleCenterX
        const dy = mousePos.y - bubbleCenterY
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)

        // Calculate distance for intensity (closer = brighter)
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
        const intensity = Math.max(0.4, 1 - distance / maxDistance)

        // Calculate position on bubble surface (0-100%)
        const normalizedX = Math.max(0, Math.min(100, (dx / rect.width) * 50 + 50))
        const normalizedY = Math.max(0, Math.min(100, (dy / rect.height) * 50 + 50))

        ref.current.style.setProperty('--mouse-angle', `${angle}deg`)
        ref.current.style.setProperty('--mouse-intensity', `${intensity}`)
        ref.current.style.setProperty('--mouse-x', `${normalizedX}%`)
        ref.current.style.setProperty('--mouse-y', `${normalizedY}%`)
      })
    }

    updateReflections()
  }, [mousePos, bubbleRefs])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, i) => {
        const isPopped = poppedMap[bubble.id]
        const style = {
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          left: `${bubble.left}%`,
          bottom: '-100px',
          background: bubble.color.gradient,
          boxShadow: bubble.color.shadow,
          opacity: isPopped ? 1 : 0.7,
          animation: isPopped
            ? 'bubblePop 220ms ease-out forwards'
            : `float ${bubble.duration}s ease-in-out infinite`,
          animationDelay: isPopped ? '0s' : `${bubble.delay}s`,
          '--drift': `${bubble.drift}px`,
          '--shine-duration': `${bubble.shineDuration}s`,
          '--shine-delay': `${bubble.shineDelay}s`,
          '--shine-rotate': `${bubble.shineRotate}deg`,
          '--mouse-angle': '0deg',
          '--mouse-intensity': '0.5',
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          pointerEvents: isPopped ? 'none' : 'auto',
          cursor: isPopped ? 'default' : 'pointer',
        } as React.CSSProperties & {
          '--drift': string
          '--shine-duration': string
          '--shine-delay': string
          '--shine-rotate': string
          '--mouse-angle': string
          '--mouse-intensity': string
          '--mouse-x': string
          '--mouse-y': string
        }

        return (
          <div
            key={bubble.id}
            ref={bubbleRefs[i]}
            className="absolute rounded-full bubble-float pointer-events-auto"
            style={style}
            onClick={() => handleBubbleClick(bubble.id)}
          />
        )
      })}
    </div>
  )
}
