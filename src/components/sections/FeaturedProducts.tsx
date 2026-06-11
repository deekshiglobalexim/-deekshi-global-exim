import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Rice',
    desc: 'Premium Basmati and Non-Basmati varieties for international markets',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=90',
  },
  {
    name: 'Fruits',
    desc: 'Fresh seasonal fruits including mangoes, grapes, and pomegranates',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=90',
  },
  {
    name: 'Vegetables',
    desc: 'Export-grade onions, potatoes, and other fresh vegetables',
    img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=90',
  },
  {
    name: 'Spices',
    desc: 'Red chilli, turmeric, black pepper, and cardamom',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=90',
  },
  {
    name: 'Dehydrated Products',
    desc: 'Garlic powder, onion powder, and other dehydrated ingredients',
    img: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=600&q=90',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section-pad bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Our Product Range
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            What We <span className="gold-text">Export</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Premium Indian agricultural products sourced directly from farms and delivered worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {categories.map(category => (
            <Link key={category.name} href="/products" className="card-premium shadow-premium-lg group border border-gray-100 overflow-hidden hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-500">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.img}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display font-bold text-2xl text-white">{category.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
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
