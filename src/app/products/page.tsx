'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight, ShieldCheck, Package, Globe, MapPin, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'rice',
    name: 'Rice',
    emoji: '🌾',
    desc: 'Our #1 export product. Premium Indian rice varieties sourced from Andhra Pradesh, Telangana, and Punjab. Available in bulk supply with custom packaging for international buyers.',
    products: [
      {
        name: 'Sona Masoori Rice',
        desc: 'Premium Sona Masoori rice sourced directly from the fertile fields of Andhra Pradesh and Telangana. Light, aromatic, and low in starch. Ideal for daily consumption markets. Available in 5kg to 50kg export packing.',
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=90',
        badges: ['Export Quality', 'AP & Telangana Sourcing'],
      },
      {
        name: 'Basmati Rice',
        desc: 'Long-grain aromatic Basmati rice aged to perfection. Superior cooking quality with excellent elongation. Meets all international food safety standards. Bulk supply available for wholesale importers.',
        img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=90',
        badges: ['Export Quality', 'Punjab & Haryana Sourcing'],
      },
      {
        name: 'Non-Basmati Rice',
        desc: 'High-quality Non-Basmati varieties including IR-64, Parboiled, and Broken rice. Competitively priced for bulk international orders. Consistent quality with every shipment.',
        img: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&q=90',
        badges: ['Export Quality', 'Multi-State Sourcing'],
      },
    ],
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    emoji: '🥭',
    desc: "Premium tropical and seasonal fruits sourced from India's finest orchards. Export-quality with cold chain management for reliable international delivery.",
    products: [
      {
        name: 'Mango',
        desc: 'Alphonso, Kesar, Banganapalli, and Totapuri varieties from certified orchards. Packed at peak ripeness with hot water treatment for phytosanitary compliance. Bulk supply available for international fruit importers.',
        img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Banana',
        desc: 'Premium Cavendish and Robusta bananas harvested at optimal ripeness stage for long-distance export. Consistent sizing and quality. Available year-round in bulk quantities.',
        img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Pomegranate',
        desc: 'Premium Bhagwa pomegranates with deep red arils and high juice content. Sorted by size and quality grade. Bulk export supply with consistent availability from Maharashtra.',
        img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Grapes',
        desc: 'Premium Thompson Seedless and Sharad Seedless grapes from Nashik vineyards. Pre-cooled and packed for maximum freshness during international transit.',
        img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Papaya',
        desc: 'Sweet and nutritious Red Lady papayas with vibrant orange flesh. Export-quality with extended shelf life. Available in customized packaging for retail and wholesale markets.',
        img: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=800&q=90',
        badges: ['Export Quality'],
      },
    ],
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    emoji: '🥬',
    desc: 'Farm-fresh vegetables selected for export quality. Rigorous quality control at every stage from harvest to delivery. Bulk supply for international markets.',
    products: [
      {
        name: 'Onion',
        desc: 'Premium red and white onions with extended shelf life and consistent sizing. Sourced from Maharashtra and Karnataka. Bulk supply available in mesh bags, jute bags, or customized packaging.',
        img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Tomato',
        desc: 'Firm export-quality tomatoes with excellent color and shelf life. Sorted and graded to international standards. Available in bulk supply with proper temperature-controlled logistics.',
        img: 'https://images.unsplash.com/photo-1546470427-0d62b9f43ce8?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Green Chilli',
        desc: 'Fresh Indian green chillies with consistent pungency levels. Export-quality with proper cold chain handling. Available in bulk for food processing and retail markets.',
        img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Potato',
        desc: 'Export-grade potatoes with uniform size and minimal defects. Cold stored for year-round availability. Available in bulk quantities with competitive pricing for international buyers.',
        img: 'https://images.unsplash.com/photo-1508313880080-c5e2e5c0bbbd?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Okra (Lady Finger)',
        desc: 'Tender export-grade okra with uniform size and vibrant green color. Sorted and packed for international markets with maximum freshness retention.',
        img: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=800&q=90',
        badges: ['Export Quality'],
      },
    ],
  },
  {
    id: 'spices',
    name: 'Spices',
    emoji: '🌶️',
    desc: 'Authentic Indian spices trusted worldwide. Processed in FSSAI-certified facilities meeting international food safety standards. Bulk supply with certificates of analysis.',
    products: [
      {
        name: 'Red Chilli',
        desc: 'Premium Teja, Byadagi, and Kashmiri red chillies with intense color and high ASTA values. Available in whole, crushed, and powder forms. Bulk supply for spice importers worldwide.',
        img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Turmeric',
        desc: 'High-curcumin Erode and Sangli turmeric. Available in finger, polished, and powder forms. Lab-tested with certificate of analysis for curcumin content. Bulk export supply available.',
        img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Black Pepper',
        desc: 'Premium Malabar and Tellicherry black pepper from Kerala. Bold grade with high piperine content. Sorted, graded, and steam-sterilized for international food safety compliance.',
        img: 'https://images.unsplash.com/photo-1599909533601-aa539e4e2a7e?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Garlic Powder',
        desc: 'Premium dehydrated garlic powder processed from select Indian garlic varieties. Consistent flavor and aroma. Available in bulk quantities meeting international food processing standards.',
        img: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=800&q=90',
        badges: ['Export Quality'],
      },
      {
        name: 'Coriander',
        desc: 'Premium coriander seeds and powder from Rajasthan and Madhya Pradesh. Clean, well-dried, and sorted. Bulk supply available with consistent quality for international spice blenders.',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=90',
        badges: ['Export Quality'],
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-6"
          >
            <Package size={14} />
            Premium Export Products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl text-white mb-6"
          >
            Premium <span className="gold-text">Rice & Agricultural Exports</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            India&apos;s finest rice varieties, fresh fruits, vegetables, and spices. Sourced from trusted farms, processed to international standards, and delivered in bulk worldwide. Rice is our #1 export product.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Globe size={16} className="text-gold-400" />
              <span>Global Export Ready</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <ShieldCheck size={16} className="text-gold-400" />
              <span>FSSAI Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Truck size={16} className="text-gold-400" />
              <span>Reliable Sourcing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Package size={16} className="text-gold-400" />
              <span>Bulk Supply Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-[72px] bg-white border-b z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 whitespace-nowrap font-medium text-sm"
              >
                {cat.emoji} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product Category Sections */}
      {categories.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col md:flex-row justify-between gap-6 mb-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{cat.emoji}</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950">
                    {cat.name}
                  </h2>
                  {cat.id === 'rice' && (
                    <span className="px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full">
                      #1 Export
                    </span>
                  )}
                </div>
                <div className="gold-divider mb-4" />
                <p className="text-gray-600 max-w-2xl text-base leading-relaxed">{cat.desc}</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-white rounded-xl font-semibold hover:bg-navy-900 transition-all duration-300 self-start hover:-translate-y-0.5"
              >
                Enquire About {cat.name}
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Product Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cat.products.map((product) => (
                <motion.div
                  key={product.name}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-premium border border-gray-100 hover:border-gold-500/40 hover:shadow-premium-lg transition-all duration-500 group flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={90}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                    {/* Export Quality Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-3 py-1.5 bg-gold-500 text-navy-950 rounded-full text-xs font-bold shadow-lg">
                        <Award size={12} />
                        Export Quality
                      </span>
                    </div>

                    {/* Bulk Supply Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-navy-950 rounded-full text-xs font-semibold shadow-md">
                        <ShieldCheck size={12} className="text-gold-500" />
                        Bulk Supply Available
                      </span>
                    </div>

                    {/* Global Export Ready indicator - hidden on mobile to reduce badge clutter */}
                    <div className="absolute top-4 left-4 hidden md:flex">
                      <span className="flex items-center gap-1 px-2.5 py-1.5 bg-navy-950/80 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        <Globe size={10} className="text-gold-400" />
                        Global Export
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy-950 mb-2 font-display">
                      {product.name}
                    </h3>

                    {/* Sourcing badges for Rice */}
                    {product.badges && product.badges.some(b => b.includes('Sourcing')) && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold-500/10 text-gold-700 rounded-full text-xs font-semibold border border-gold-500/20">
                          <MapPin size={10} />
                          {product.badges.find(b => b.includes('Sourcing'))}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {product.desc}
                    </p>

                    {/* Trust Footer */}
                    <div className="flex items-center gap-2 mb-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Truck size={11} className="text-gold-500" />
                        <span>Reliable Sourcing</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <ShieldCheck size={11} className="text-gold-500" />
                        <span>Quality Assured</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
                    >
                      Request Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Premium CTA Section */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-6">
            <Globe size={14} />
            International Trade Partner
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Need a <span className="gold-text">Custom Requirement?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact us for bulk orders, customized packaging, private labeling, and export inquiries. We supply rice, fruits, vegetables, and spices to buyers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 rounded-xl font-bold hover:bg-gold-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-glow"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 rounded-xl font-bold hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
            >
              View Certifications
              <ShieldCheck size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
