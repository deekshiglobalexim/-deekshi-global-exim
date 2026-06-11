'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Package, ShieldCheck } from 'lucide-react'

const priorityProducts = [
  {
    id: 'rice',
    name: 'Premium Rice',
    subtitle: 'Sona Masoori (AP & Telangana) | Basmati | Non-Basmati',
    desc: 'Our #1 export product. Sourced directly from the fertile fields of Andhra Pradesh and Telangana, our Sona Masoori and Basmati rice meet the highest international quality standards. Available in bulk supply with customized packaging for global buyers.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 1,
  },
  {
    id: 'mangoes',
    name: 'Fresh Mangoes',
    subtitle: 'Alphonso | Kesar | Banganapalli | Totapuri',
    desc: 'Premium Indian mangoes from world-renowned growing regions. Harvested at peak ripeness and packed under controlled conditions for long-distance export. Meeting all phytosanitary requirements for international markets.',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 2,
  },
  {
    id: 'onions',
    name: 'Fresh Onions',
    subtitle: 'Red Onions | White Onions | Export Grade',
    desc: 'Export-grade Indian onions known for their extended shelf life, consistent sizing, and rich flavor. Sourced from Maharashtra and Karnataka with rigorous quality checks at every stage of processing.',
    img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 3,
  },
  {
    id: 'red-chilli',
    name: 'Red Chilli',
    subtitle: 'Teja | Byadagi | Kashmiri | S17',
    desc: 'Premium Indian red chillies with intense color, high pungency, and consistent ASTA values. Available in whole, crushed, and powder forms. Processed in FSSAI-certified facilities to meet international food safety standards.',
    img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 4,
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    subtitle: 'Erode | Sangli | High Curcumin | Finger & Powder',
    desc: 'High-curcumin Indian turmeric from Erode and Sangli regions. Available in finger, polished, and powder forms. Lab-tested for curcumin content with certificates of analysis provided for every shipment.',
    img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 5,
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    subtitle: 'Malabar | Tellicherry | Bold Grade',
    desc: 'Premium Malabar and Tellicherry black pepper from Kerala. Known for its bold size, high piperine content, and aromatic intensity. Sorted, graded, and packed for international spice markets.',
    img: 'https://images.unsplash.com/photo-1599909533601-aa539e4e2a7e?w=600&q=90',
    badges: ['Export Quality', 'Bulk Supply Available', 'International Standards'],
    priority: 6,
  },
]

export default function PriorityExportProducts() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            <Package size={14} />
            Priority Export Products
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-950 mb-4">
            What We <span className="gold-text">Export Best</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From premium Sona Masoori rice to aromatic Indian spices, we supply the world with India&apos;s finest agricultural products in bulk quantities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorityProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-premium-lg border border-gray-100 hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

                {/* Priority Badge */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-gold-500 text-navy-950 text-xs font-bold rounded-full shadow-lg">
                    #{product.priority} Priority
                  </span>
                </div>

                {/* Export Quality Badge */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur text-navy-950 text-xs font-semibold rounded-full shadow-lg">
                    <Award size={10} className="text-gold-500" />
                    Export Quality
                  </span>
                </div>

                {/* Product Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-2xl text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.desc}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-navy-950/5 text-navy-950 text-[11px] font-semibold rounded-full"
                    >
                      <ShieldCheck size={10} className="text-gold-500" />
                      {badge}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-navy-950 hover:bg-navy-900 text-white py-3 rounded-xl font-bold transition-all duration-300 group/btn"
                >
                  Request Bulk Quote
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 btn-premium bg-gold-500 text-navy-950 font-bold text-base rounded-xl hover:scale-105 transition-all duration-300"
          >
            View Complete Product Catalog
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
