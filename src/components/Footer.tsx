import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const certBadges = ['GST', 'IEC', 'APEDA', 'FSSAI', 'ICEGATE']

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white ring-2 ring-gold-500 shadow-lg shadow-gold-500/30 logo-glow">
                <Image src="/logo-mark.png" alt="Deekshi Global Exim" fill sizes="80px" className="object-contain p-1 logo-mark" quality={100} />
              </div>
              <div>
                <div className="font-display font-bold text-xl">DEEKSHI <span className="gold-text">GLOBAL</span></div>
                <div className="text-gold-500 text-xs tracking-[0.3em] font-semibold">EXIM</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Connecting Indian agricultural excellence to global markets. Premium quality, certified compliance, reliable delivery.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-gold-500 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Our Products' },
                { href: '/certifications', label: 'Certifications' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm flex items-center gap-2 group transition-colors">
                    <ArrowRight size={12} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-gold-500 mb-4 text-lg">Our Products</h4>
            <ul className="space-y-2">
              {['Sona Masoori Rice', 'Basmati Rice', 'Non-Basmati Rice', 'Fresh Fruits', 'Fresh Vegetables', 'Spices', 'Dehydrated Products'].map(p => (
                <li key={p}>
                  <Link href="/products" className="text-gray-400 hover:text-gold-400 text-sm flex items-center gap-2 group transition-colors">
                    <ArrowRight size={12} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-gold-500 mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Warangal, Telangana, India — 506001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <a href="tel:+919493928088" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">+91 9493928088</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:deekshiglobalexim@gmail.com" className="text-gray-400 hover:text-gold-400 text-sm transition-colors break-all">deekshiglobalexim@gmail.com</a>
              </li>
            </ul>

            {/* Cert Badges */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certBadges.map(cert => (
                  <span key={cert} className="px-2 py-1 border border-gold-500/40 text-gold-500 text-xs rounded font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm text-center">
            © 2026 <span className="text-gold-500">Deekshi Global Exim</span>. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Connecting Commerce &amp; Empowering Growth · Warangal, India
          </p>
        </div>
      </div>

      {/* Credit Section */}
      <div className="border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center gap-2">
          <p className="text-gray-400 text-sm font-light tracking-wide">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-gold-500 font-medium">StaffArc</span>
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 Deekshi Global Exim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
