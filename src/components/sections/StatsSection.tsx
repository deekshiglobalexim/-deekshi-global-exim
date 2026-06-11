'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Tons Monthly Capacity' },
  { value: 25, suffix: '+', label: 'Product Varieties' },
  { value: 5, suffix: '+', label: 'Active Certifications' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1500
        const steps = 60
        const inc = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur += inc
          if (cur >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(cur))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className="font-display font-bold text-5xl gold-text">{count}{suffix}</div>
}

export default function StatsSection() {
  return (
    <section className="bg-navy-950 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group cursor-default transition-premium">
              <div className="relative">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <div className="text-white font-semibold text-lg mt-3 group-hover:text-gold-300 transition-colors tracking-wide">{stat.label}</div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
