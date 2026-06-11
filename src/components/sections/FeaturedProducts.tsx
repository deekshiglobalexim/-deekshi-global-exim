import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award } from 'lucide-react'

const featured = [
  {
    name: 'Premium Mangoes',
    category: 'Fruits',
    desc: 'Alphonso, Kesar & Banganapalli varieties packed at peak ripeness for international markets.',
    img: 'https://source.unsplash.com/featured/600x450/?mango',
    emoji: '🥭',
  },
  {
    name: 'Basmati Rice',
    category: 'Rice',
    desc: 'Long-grain, aromatic basmati rice with superior cooking quality, meeting all export standards.',
    img: 'https://source.unsplash.com/featured/600x450/?basmati-rice',
    emoji: '🌾',
  },
  {
    name: 'Red Chilli',
    category: 'Spices',
    desc: 'Premium Indian red chillies — Teja, Byadagi, and Kashmiri — with intense colour and aroma.',
    img: 'https://source.unsplash.com/featured/600x450/?red-chilli',
    emoji: '🌶️',
  },
  {
    name: 'Fresh Onions',
    category: 'Vegetables',
    desc: 'Export-grade red and white onions sourced from major growing regions across India.',
    img: 'https://source.unsplash.com/featured/600x450/?onion',
    emoji: '🧅',
  },
  {
    name: 'Turmeric',
    category: 'Spices',
    desc: 'High-curcumin Erode and Sangli turmeric, processed for export in finger and powder forms.',
    img: 'https://source.unsplash.com/featured/600x450/?turmeric',
    emoji: '🟡',
  },
  {
    name: 'Fresh Bananas',
    category: 'Fruits',
    desc: 'Premium Cavendish and Robusta bananas, harvested at the right stage for long-distance export.',
    img: 'https://source.unsplash.com/featured/600x450/?banana',
    emoji: '🍌',
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
            <div key={product.name} className="card-premium shadow-premium group border border-gray-200 overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold-300 to-gold-500 product-card-image">
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  quality={95}
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
                <Link href="/contact" className="inline-flex items-center gap-1 text-gold-600 text-sm font-semibold hover:gap-2 transition-all group">
                  Enquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 btn-premium bg-navy-950 text-white font-bold text-base rounded-xl hover:text-gold-400 transition-all duration-300 relative z-10">
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
