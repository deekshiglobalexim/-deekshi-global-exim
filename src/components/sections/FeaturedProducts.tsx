import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, ShieldCheck } from 'lucide-react'

const featured = [
  {
    name: 'Sona Masoori Rice',
    category: 'Rice',
    desc: 'Premium Sona Masoori rice from Andhra Pradesh and Telangana. Light, aromatic, and ideal for daily consumption. Available in bulk supply with export-grade packaging for international buyers.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=90',
    emoji: '🌾',
    badge: 'Bulk Supply Available',
  },
  {
    name: 'Basmati Rice',
    category: 'Rice',
    desc: 'Long-grain aromatic Basmati rice with superior cooking quality. Aged to perfection, meeting all international export standards. Custom packaging available for wholesale buyers.',
    img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=90',
    emoji: '🌾',
    badge: 'International Standards',
  },
  {
    name: 'Premium Mangoes',
    category: 'Fruits',
    desc: 'Alphonso, Kesar, and Banganapalli mangoes packed at peak ripeness. Sourced from certified orchards with cold chain management for reliable international delivery.',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=90',
    emoji: '🥭',
    badge: 'Export Quality',
  },
  {
    name: 'Fresh Onions',
    category: 'Vegetables',
    desc: 'Export-grade red and white onions with extended shelf life. Consistent sizing and rigorous quality checks. Bulk supply available with customized packaging options.',
    img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=90',
    emoji: '🧅',
    badge: 'Bulk Supply Available',
  },
  {
    name: 'Red Chilli',
    category: 'Spices',
    desc: 'Premium Teja, Byadagi, and Kashmiri red chillies with intense color and high pungency. Processed in FSSAI-certified facilities meeting international food safety standards.',
    img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&q=90',
    emoji: '🌶️',
    badge: 'International Standards',
  },
  {
    name: 'Turmeric',
    category: 'Spices',
    desc: 'High-curcumin Erode and Sangli turmeric in finger and powder forms. Lab-tested with certificates of analysis. Reliable sourcing for bulk international orders.',
    img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=90',
    emoji: '🟡',
    badge: 'Export Quality',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section-pad bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Featured Products
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            India&apos;s Finest, <span className="gold-text">Delivered Worldwide</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our premium range of export-quality agricultural products sourced from the best farms across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map(product => (
            <div key={product.name} className="card-premium shadow-premium-lg group border border-gray-100 overflow-hidden hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-500">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold-300 to-gold-500 product-card-image">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full shadow-lg">{product.category}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 px-3 py-1 bg-white/95 backdrop-blur text-navy-950 text-xs font-semibold rounded-full shadow-lg">
                    <Award size={10} className="text-gold-500" /> Export Quality
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-navy-950 mb-2 leading-snug">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{product.desc}</p>

                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-navy-950/5 text-navy-950 text-[11px] font-semibold rounded-full">
                    <ShieldCheck size={10} className="text-gold-500" />
                    {product.badge}
                  </span>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-1 text-gold-600 text-sm font-semibold hover:gap-2 transition-all group/link">
                  Enquire Now <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 btn-premium bg-navy-950 text-white font-bold text-base rounded-xl hover:text-gold-400 transition-all duration-300 relative z-10">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
