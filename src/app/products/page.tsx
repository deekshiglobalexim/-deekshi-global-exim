'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'rice',
    name: 'Rice',
    emoji: '🌾',
    desc: 'Premium Indian rice varieties processed in state-of-the-art facilities and exported to over 30 countries worldwide.',
    products: [
      {
        name: 'Sona Masoori Rice',
        desc: 'Premium medium-grain rice known for its lightweight texture and excellent cooking quality. Low glycemic index with excellent cooking yield. Available in bulk supply with export-grade packaging.',
        img: '/products/sona-masoori.jpg',
      },
      {
        name: 'Basmati Rice',
        desc: 'Long-grain aromatic rice with exceptional elongation and flavor. Available in 1121, PUSA, and Traditional varieties. Meets international food safety and quality standards.',
        img: '/products/basmati.jpg',
      },
      {
        name: 'Non-Basmati Rice',
        desc: 'Versatile rice varieties for bulk procurement with consistent grain quality. Available in IR-64, Parboiled, Broken, and Swarna varieties. Competitively priced with phytosanitary certification.',
        img: '/products/non-basmati.jpg',
      },
    ],
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    emoji: '🥭',
    desc: 'Premium tropical and seasonal fruits with integrated cold chain logistics ensuring freshness from farm to destination.',
    products: [
      {
        name: 'Mango',
        desc: 'Premium export-grade mangoes with hot water and vapour heat treatment for phytosanitary compliance. Supplied in bulk to supermarket chains and juice processors worldwide.',
        img: '/products/mango.jpg',
      },
      {
        name: 'Pomegranate',
        desc: 'Deep ruby-red pomegranates with high juice content, graded by size and Brix level to meet international supermarket specifications. Year-round availability with cold chain packaging.',
        img: '/products/pomegranate.jpg',
      },
      {
        name: 'Grapes',
        desc: 'Thompson Seedless and Flame Seedless grapes, pre-cooled and packed in ventilated cartons for maximum shelf life during intercontinental shipping.',
        img: '/products/grapes.jpg',
      },
      {
        name: 'Banana',
        desc: 'Export-grade Cavendish bananas harvested at precise maturity for optimal ripening during transit. Uniform sizing with year-round availability.',
        img: '/products/banana.jpg',
      },
    ],
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    emoji: '🥬',
    desc: 'Farm-fresh vegetables with rigorous grading and quality inspection to meet international food safety standards.',
    products: [
      {
        name: 'Onion',
        desc: 'Premium red onions with extended shelf life and consistent sizing. Available in mesh bags, jute bags, or customized packaging for wholesale importers.',
        img: '/products/onion.jpg',
      },
      {
        name: 'Tomato',
        desc: 'Firm, vine-ripened export tomatoes with vibrant color and excellent Brix levels. Sorted and graded to international size specifications with temperature-controlled logistics.',
        img: '/products/tomato.jpg',
      },
      {
        name: 'Potato',
        desc: 'Export-grade potatoes with uniform sizing and minimal defects. Cold-stored for year-round supply with phytosanitary certification for international procurement.',
        img: '/products/potato.jpg',
      },
      {
        name: 'Green Chilli',
        desc: 'Fresh green chillies with consistent heat levels and firm texture. Harvested at peak freshness with immediate cold chain handling for export transit.',
        img: '/products/green-chilli.jpg',
      },
    ],
  },
  {
    id: 'spices',
    name: 'Spices',
    emoji: '🌶️',
    desc: 'Authentic Indian spices processed in FSSAI, ISO, and HACCP-certified facilities with full lab testing and certificates of analysis.',
    products: [
      {
        name: 'Red Chilli',
        desc: 'Premium red chillies with intense natural color and ASTA values ranging 80-300. Available in whole dried, crushed flakes, and fine powder forms with aflatoxin compliance.',
        img: '/products/red-chilli.jpg',
      },
      {
        name: 'Turmeric',
        desc: 'High-curcumin turmeric with curcumin content 3-7%, available in polished fingers and fine powder forms. Each shipment includes a certificate of analysis for curcumin content and residue testing.',
        img: '/products/turmeric.jpg',
      },
      {
        name: 'Black Pepper',
        desc: 'Premium grade black pepper with piperine content 4-9%. Bold, uniform berries sorted and graded to FAQ/ASTA standards with steam sterilization.',
        img: '/products/black-pepper.jpg',
      },
      {
        name: 'Coriander',
        desc: 'Premium coriander seeds, clean and machine-sorted with low moisture content for extended shelf life. Also available as freshly ground powder for bulk supply.',
        img: '/products/coriander.jpg',
      },
    ],
  },
  {
    id: 'dehydrated',
    name: 'Dehydrated Products',
    emoji: '🧄',
    desc: 'High-quality dehydrated products manufactured to international food processing standards with full traceability.',
    products: [
      {
        name: 'Garlic Powder',
        desc: 'Premium dehydrated garlic powder with consistent pungency and aroma. Manufactured to international food processing standards with full traceability.',
        img: '/products/garlic-powder.jpg',
      },
      {
        name: 'Onion Powder',
        desc: 'High-quality dehydrated onion powder suitable for food processing and seasoning applications. Available in bulk with customized packaging options.',
        img: '/products/onion-powder.jpg',
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
  hidden: { opacity: 0, y: 30 },
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-5xl md:text-6xl text-white mb-6"
          >
            Premium <span className="gold-text">Export Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Quality agricultural products sourced, processed, and packaged to international standards for global buyers.
          </motion.p>
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
          className={`py-24 ${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          } ${cat.id === 'rice' ? 'border-t-4 border-gold-500' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Rice Priority Export Badge */}
            {cat.id === 'rice' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 text-gold-600 rounded-full text-sm font-semibold">
                  <Star size={14} className="fill-gold-500 text-gold-500" />
                  Priority Export Category
                </span>
              </motion.div>
            )}

            {/* Section Header */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col md:flex-row justify-between gap-6 mb-14"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={cat.id === 'rice' ? 'text-5xl' : 'text-4xl'}>{cat.emoji}</span>
                  <h2 className={`font-display font-bold text-navy-950 ${cat.id === 'rice' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
                    {cat.name}
                  </h2>
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {cat.products.map((product) => (
                <motion.div
                  key={product.name}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-premium border border-gray-100 hover:border-gold-500/40 hover:shadow-premium-lg transition-all duration-500 group flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      quality={90}
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-navy-950 rounded-full text-xs font-semibold shadow-sm">
                        {cat.emoji} {cat.name}
                      </span>
                    </div>

                    {/* Export Grade & Bulk Supply Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 bg-gold-500/95 backdrop-blur-sm text-navy-950 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-md">
                        Export Grade
                      </span>
                      <span className="px-2.5 py-1 bg-navy-950/90 backdrop-blur-sm text-gold-400 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-md">
                        Bulk Supply
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy-950 mb-3 font-display">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                      {product.desc}
                    </p>

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

      {/* Bottom CTA Section */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Need a <span className="gold-text">Custom Requirement?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact us for bulk orders, customized packaging, private labeling, and export inquiries. We supply quality agricultural products to buyers worldwide.
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
