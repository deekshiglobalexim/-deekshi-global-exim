'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Global trade background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/40" />
        {/* Subtle gold accent glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
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

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'IEC Certified' },
              { label: 'APEDA Registered' },
              { label: 'FSSAI Licensed' },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                <Shield size={16} className="text-gold-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Hero image card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-gold-500/20">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=90"
              alt="Global agricultural trade and exports"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-white font-semibold text-sm">
                  🌍 Exporting to <span className="text-gold-400">15+ Countries</span> Worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
