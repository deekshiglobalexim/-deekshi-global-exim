'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0d3560] to-navy-950" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
        <div className="absolute inset-0 dots-bg opacity-30" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" style={{ transform: 'rotate(-15deg)', transformOrigin: 'top right' }} />
          <div className="absolute right-32 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" style={{ transform: 'rotate(-15deg)', transformOrigin: 'top right' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="font-display font-bold text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-4">
            Trusted{' '}
            <span className="gold-text">Global Export</span>{' '}
            Partner
          </h1>

          <p className="text-gold-300 text-xl lg:text-2xl font-display font-medium mb-6 max-w-xl">
            Premium Indian Agricultural Products for International Markets
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            Deekshi Global Exim exports premium rice, fresh fruits, vegetables, spices, and dehydrated products to buyers worldwide with full compliance and reliable logistics.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Request Quotation
              <ArrowRight size={18} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-500/60 text-gold-300 font-semibold text-base rounded-xl hover:bg-gold-500/15 hover:border-gold-400 transition-all duration-300 hover:shadow-gold-glow">
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges - 3 minimal indicators */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'IEC Certified' },
              { label: 'APEDA Registered' },
              { label: 'FSSAI Licensed' },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield size={16} className="text-gold-500" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Clean hero image */}
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-premium-lg border border-gold-500/20">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=95"
              alt="Global agricultural trade"
              fill
              className="object-cover"
              quality={95}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
          </div>
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
