'use client'
import Link from 'next/link'
import { ArrowRight, Globe, Shield, Truck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0d3560] to-navy-950" />
        {/* Gold accent blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
        {/* Dot grid */}
        <div className="absolute inset-0 dots-bg opacity-30" />
        {/* Diagonal line */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" style={{ transform: 'rotate(-15deg)', transformOrigin: 'top right' }} />
          <div className="absolute right-32 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" style={{ transform: 'rotate(-15deg)', transformOrigin: 'top right' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-8">
            <Globe size={14} />
            Warangal, India → Global Markets
          </div>

          <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            Connecting{' '}
            <span className="gold-text">Indian</span>{' '}
            Agricultural{' '}
            <span className="gold-text">Excellence</span>{' '}
            to Global Markets
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            Trusted export partner for premium fruits, vegetables, rice, and spices worldwide. Certified, compliant, and committed to quality.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Get Export Quote
              <ArrowRight size={18} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-500/60 text-gold-300 font-semibold text-base rounded-xl hover:bg-gold-500/15 hover:border-gold-400 transition-all duration-300 hover:shadow-gold-glow">
              View Products
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'APEDA Certified' },
              { icon: Globe, label: 'Global Reach' },
              { icon: Truck, label: 'Reliable Delivery' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon size={16} className="text-gold-500" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual Cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            { emoji: '🥭', label: 'Fresh Fruits', desc: 'Mango, Grapes, Pomegranate & more', color: 'from-orange-900/60' },
            { emoji: '🌾', label: 'Premium Rice', desc: 'Basmati & Non-Basmati varieties', color: 'from-amber-900/60' },
            { emoji: '🌶️', label: 'Indian Spices', desc: 'Red Chilli, Turmeric, Cardamom', color: 'from-red-900/60' },
            { emoji: '🥦', label: 'Fresh Vegetables', desc: 'Onion, Potato, Tomato & more', color: 'from-green-900/60' },
          ].map((item, i) => (
            <div key={item.label}
              className={`relative rounded-2xl border border-gold-500/30 bg-gradient-to-br ${item.color} to-navy-900/90 p-6 card-hover cursor-default transition-premium hover:shadow-gold-glow`}
              style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="text-5xl mb-3 transition-transform duration-300 hover:scale-110 inline-block">{item.emoji}</div>
              <h3 className="text-white font-display font-semibold text-base mb-1 tracking-wide">{item.label}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 bg-gold-500/30 border border-gold-500/50 text-gold-300 text-xs rounded-full font-medium shadow-sm">Export Quality</span>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.1)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 50 960 60 720 50C480 40 240 10 0 20L0 60Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
