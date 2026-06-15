'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
]

const productCategories = [
  { href: '/products#rice', label: 'Rice' },
  { href: '/products#fruits', label: 'Mango Exports' },
  { href: '/products#vegetables', label: 'Vegetables' },
  { href: '/products#fruits', label: 'Fruits' },
  { href: '/products#spices', label: 'Spices' },
  { href: '/products#dehydrated', label: 'Dehydrated Products' },
  { href: '/products#rice', label: 'Basmati Rice' },
  { href: '/products#rice', label: 'Non-Basmati Rice' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
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
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[48px] h-[48px] flex-shrink-0">
              <img src="/logo-mark.png" alt="Deekshi Global Exim" className="w-full h-full object-contain" style={{ imageRendering: 'auto' }} />
            </div>
            <div className="hidden sm:block">
              <div className="text-navy-950 font-display font-bold text-xl leading-tight group-hover:text-gold-600 transition-colors duration-300">
                DEEKSHI <span className="text-gold-600">GLOBAL</span>
              </div>
              <div className="text-gold-600 text-xs tracking-[0.3em] font-semibold">EXIM</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              link.href === '/products' ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1 ${
                      pathname === link.href
                        ? 'text-gold-600 bg-gold-50 border border-gold-200'
                        : 'text-navy-900 hover:text-gold-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform translate-y-1 group-hover:translate-y-0">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden min-w-[200px]">
                      <div className="border-l-4 border-gold-500 py-2">
                        {productCategories.map(category => (
                          <Link
                            key={category.href}
                            href={category.href}
                            className="block px-5 py-2.5 text-sm text-navy-900 font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors duration-150"
                          >
                            {category.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-gold-600 bg-gold-50 border border-gold-200'
                      : 'text-navy-900 hover:text-gold-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-navy-950 text-white font-bold text-sm rounded-lg hover:bg-navy-900 transition-all duration-300 shadow-md"
            >
              Request Quotation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-navy-950 p-2 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-gradient-to-b from-navy-900 to-navy-950 border-t border-gold-500/20 px-6 py-4 space-y-1">
            {navLinks.map(link => (
              link.href === '/products' ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-gold-400 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20'
                        : 'text-gray-300 hover:text-gold-300 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 mt-1 border-l-2 border-gold-500/40 space-y-0.5">
                      {productCategories.map(category => (
                        <Link
                          key={category.href}
                          href={category.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-400 hover:text-gold-300 transition-colors duration-150"
                        >
                          {category.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
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
