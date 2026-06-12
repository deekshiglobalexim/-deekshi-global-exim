'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const heroImages = [
  { src: '/products/sona-masoori.jpg', label: 'Premium Sona Masoori Rice' },
  { src: '/products/mango.jpg', label: 'Export Grade Mangoes' },
  { src: '/products/pomegranate.jpg', label: 'Fresh Pomegranates' },
  { src: '/products/basmati.jpg', label: 'Aromatic Basmati Rice' },
  { src: '/products/onion.jpg', label: 'Red Onions - Bulk Supply' },
  { src: '/products/turmeric.jpg', label: 'High-Curcumin Turmeric' },
  { src: '/products/green-chilli.jpg', label: 'Fresh Green Chillies' },
  { src: '/products/grapes.jpg', label: 'Seedless Grapes' },
  { src: '/products/black-pepper.jpg', label: 'Black Pepper' },
  { src: '/products/red-chilli.jpg', label: 'Red Chilli - ASTA Grade' },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            India&apos;s Trusted Export Partner Since 2022
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Trusted{' '}
            <span className="gold-text">Global Export</span>{' '}
            Partner
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
            Premium Indian rice, fresh fruits, vegetables, spices & dehydrated products — exported worldwide with full compliance and reliable logistics.
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

        {/* Right - Auto-rotating product showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main rotating image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-2 border-gold-500/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImage].src}
                    alt={heroImages[currentImage].label}
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              
              {/* Product label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <p className="text-white font-bold text-lg">
                      {heroImages[currentImage].label}
                    </p>
                    <p className="text-gold-400 text-sm font-medium">Export Quality · Bulk Supply Available</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-gold-500 w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Floating stats badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-gold-500/30 shadow-lg"
            >
              <p className="text-gold-500 font-bold text-2xl">15+</p>
              <p className="text-white/80 text-xs">Countries</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-gold-500/30 shadow-lg"
            >
              <p className="text-gold-500 font-bold text-2xl">500+</p>
              <p className="text-white/80 text-xs">Tons/Month</p>
            </motion.div>
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
