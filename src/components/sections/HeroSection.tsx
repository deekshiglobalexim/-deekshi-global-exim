'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85',
    alt: 'Container ship at port - global trade',
  },
  {
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=85',
    alt: 'Rice paddy fields in India',
  },
  {
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85',
    alt: 'Fresh agricultural produce',
  },
  {
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85',
    alt: 'Global shipping and logistics',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background slideshow with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 8, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].img}
            alt={heroSlides[currentSlide].alt}
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/15 border border-gold-500/40 rounded-full text-gold-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            India&apos;s Trusted Agricultural Export Partner
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8">
            Premium Indian{' '}
            <span className="gold-text">Agricultural</span>{' '}
            Exporter
          </h1>

          <p className="text-gray-200 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl">
            Deekshi Global Exim connects the finest agricultural products from India to discerning buyers in the USA, UK, Middle East, Europe, and Asia.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Explore Our Products
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              Request Quotation
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8">
            {[
              { label: 'IEC Certified' },
              { label: 'APEDA Registered' },
              { label: 'FSSAI Licensed' },
              { label: 'GST Registered' },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
                <Shield size={15} className="text-gold-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-gold-500 w-10'
                : 'bg-white/40 w-4 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-[2]" />
    </section>
  )
}
