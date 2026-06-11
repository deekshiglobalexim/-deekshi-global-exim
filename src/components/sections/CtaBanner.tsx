import Link from 'next/link'
import { ArrowRight, FileText, Phone, Users, Package } from 'lucide-react'

const ctaItems = [
  {
    label: 'Request Quotation',
    href: '/contact?intent=quotation',
    icon: ArrowRight,
    description: 'Get competitive pricing for bulk orders',
    primary: true,
  },
  {
    label: 'Request Product Catalog',
    href: '/contact?intent=catalog',
    icon: FileText,
    description: 'Download our full export product catalog',
    primary: false,
  },
  {
    label: 'Contact Export Team',
    href: '/contact?intent=export-team',
    icon: Users,
    description: 'Speak with our export specialists',
    primary: false,
  },
  {
    label: 'Bulk Order Inquiry',
    href: '/contact?intent=bulk-order',
    icon: Package,
    description: 'Custom solutions for large volume buyers',
    primary: false,
  },
]

export default function CtaBanner() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      {/* BG accents */}
      <div className="absolute inset-0 dots-bg opacity-25" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl xl:text-6xl text-white mb-6 leading-tight">
          Source Premium <span className="gold-text">Indian Rice</span> &amp; Agricultural Products
        </h2>
        <p className="text-gray-300 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
          Partner with us for Sona Masoori Rice, Basmati Rice, spices, and fresh produce. Get product samples, competitive pricing, and full compliance documentation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {ctaItems.map(({ label, href, icon: Icon, description, primary }) => (
            <Link
              key={label}
              href={href}
              className={`group relative flex flex-col items-center gap-3 px-6 py-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                primary
                  ? 'btn-premium shimmer-btn text-navy-950 font-bold shadow-gold-glow hover:shadow-gold-glow-lg border-transparent'
                  : 'border-gold-500/40 bg-navy-900/50 hover:bg-gold-500/15 hover:border-gold-400 hover:shadow-gold-glow'
              }`}
            >
              <Icon size={24} className={primary ? 'text-navy-950' : 'text-gold-500'} />
              <span className={`font-bold text-base ${primary ? 'text-navy-950' : 'text-white'}`}>
                {label}
              </span>
              <span className={`text-xs ${primary ? 'text-navy-800' : 'text-gray-400'}`}>
                {description}
              </span>
            </Link>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-12 tracking-wide">
          Monday-Friday: 9 AM-6 PM &middot; Saturday: 9 AM-2 PM &middot; Warangal, Telangana, India
        </p>
      </div>
    </section>
  )
}
