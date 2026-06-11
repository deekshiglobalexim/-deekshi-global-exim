'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-950 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919493928088" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
              <Phone size={14} className="text-gold-500" />
              +91 9493928088
            </a>
            <a href="mailto:deekshiglobalexim@gmail.com" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
              <Mail size={14} className="text-gold-500" />
              deekshiglobalexim@gmail.com
            </a>
          </div>
          <div className="text-gold-500 font-medium tracking-wider text-xs">
            IEC REGISTERED · APEDA CERTIFIED · FSSAI LICENSED
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/98 backdrop-blur-md shadow-premium shadow-navy-950/40'
          : 'bg-navy-950'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500 group-hover:border-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/30 group-hover:shadow-gold-500/50 group-hover:scale-105">
              <Image src="/logo.png" alt="Deekshi Global Exim" fill className="object-cover premium-image" priority quality={95} />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-display font-bold text-lg leading-tight group-hover:text-gold-300 transition-colors duration-300">
                DEEKSHI <span className="gold-text">GLOBAL</span>
              </div>
              <div className="text-gold-500 text-xs tracking-[0.2em] font-medium group-hover:text-gold-300 transition-colors duration-300">EXIM</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-gold-400 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 shadow-sm shadow-gold-500/10'
                    : 'text-gray-300 hover:text-gold-300 hover:bg-white/5 hover:shadow-sm'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 btn-premium shimmer-btn text-navy-950 font-bold text-sm rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-gradient-to-b from-navy-900 to-navy-950 border-t border-gold-500/20 px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-gold-400 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20'
                    : 'text-gray-300 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gold-500/20 space-y-3">
              <a href="tel:+919493928088" className="flex items-center gap-2 text-gray-300 text-sm hover:text-gold-400 transition-colors duration-200 font-medium">
                <Phone size={14} className="text-gold-500" /> +91 9493928088
              </a>
              <a href="mailto:deekshiglobalexim@gmail.com" className="flex items-center gap-2 text-gray-300 text-sm hover:text-gold-400 transition-colors duration-200 font-medium">
                <Mail size={14} className="text-gold-500" /> deekshiglobalexim@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
