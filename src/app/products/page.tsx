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
    desc: 'Our flagship export category. Premium Indian rice varieties cultivated across Andhra Pradesh, Telangana, and Punjab, processed in state-of-the-art facilities and shipped in bulk to over 30 countries worldwide.',
    products: [
      {
        name: 'Sona Masoori Rice',
        desc: 'Lightweight, aromatic Sona Masoori rice cultivated in the fertile river basins of Andhra Pradesh and Telangana. Low glycemic index with excellent cooking yield, making it ideal for global retail and institutional buyers. Supplied in 5kg to 50MT bulk shipments with custom branding options.',
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=90',
        badges: ['Export Quality', 'AP & Telangana Sourcing'],
      },
      {
        name: 'Basmati Rice',
        desc: 'Aged long-grain Basmati rice with exceptional aroma and 2x elongation after cooking. Sourced from the Indo-Gangetic plains of Punjab and Haryana, meeting stringent EU and FDA residue standards. Available in 1121, PUSA, and Traditional varieties for wholesale importers globally.',
        img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=90',
        badges: ['Export Quality', 'Punjab & Haryana Sourcing'],
      },
      {
        name: 'Non-Basmati Rice',
        desc: 'Versatile Non-Basmati varieties including IR-64, Parboiled, Broken, and Swarna rice. Competitively priced for bulk procurement by food manufacturers and government tenders worldwide. Consistent grain quality with sortex-cleaned processing and phytosanitary certification for every shipment.',
        img: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&q=90',
        badges: ['Export Quality', 'Multi-State Sourcing'],
      },
    ],
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    emoji: '🥭',
    desc: "India's premium tropical and seasonal fruits, sourced from certified orchards with integrated cold chain logistics. Export-ready packaging ensures freshness from farm to destination port.",
    products: [
      {
        name: 'Mango',
        desc: 'Premium Alphonso, Kesar, Banganapalli, and Totapuri mangoes from GI-certified growing regions. Each lot undergoes hot water treatment and vapour heat treatment for phytosanitary compliance. Supplied in bulk to supermarket chains, juice processors, and wholesale fruit importers across the Middle East, Europe, and Asia.',
        img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=90',
        badges: ['Export Quality', 'Maharashtra & AP Sourcing'],
      },
      {
        name: 'Pomegranate',
        desc: 'Premium Bhagwa and Ganesh pomegranates with deep ruby-red arils and exceptionally high juice content. Graded by size and Brix level to meet international supermarket specifications. Reliable bulk supply from Maharashtra orchards with year-round availability and cold chain packaging.',
        img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=90',
        badges: ['Export Quality', 'Maharashtra Sourcing'],
      },
      {
        name: 'Grapes',
        desc: 'Thompson Seedless, Sharad Seedless, and Flame Seedless grapes from the premier vineyards of Nashik and Sangli. Pre-cooled within hours of harvest, SO2-treated, and packed in ventilated cartons for maximum shelf life during intercontinental shipping. Bulk orders welcomed from European and Asian retailers.',
        img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&q=90',
        badges: ['Export Quality', 'Nashik Sourcing'],
      },
      {
        name: 'Banana',
        desc: 'Export-grade Cavendish and Grand Naine bananas harvested at precise maturity for optimal ripening during transit. Uniform bunch sizing, ethylene-controlled ripening protocols, and year-round availability make us a reliable bulk supplier for international fruit distributors and retail chains.',
        img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=90',
        badges: ['Export Quality', 'Tamil Nadu Sourcing'],
      },
    ],
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    emoji: '🥬',
    desc: 'Farm-fresh vegetables sourced from leading agricultural belts of India. Every shipment undergoes rigorous grading, sorting, and quality inspection to meet international food safety and residue standards.',
    products: [
      {
        name: 'Onion',
        desc: 'Premium Nashik red onions and Bangalore rose onions with extended 90-day shelf life and consistent 45-80mm sizing. Sourced from Maharashtra and Karnataka with reliable year-round supply. Available in mesh bags, jute bags, or customized packaging for wholesale importers and institutional buyers globally.',
        img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=90',
        badges: ['Export Quality', 'Maharashtra & Karnataka Sourcing'],
      },
      {
        name: 'Tomato',
        desc: 'Firm, vine-ripened export tomatoes with vibrant red color, excellent Brix levels, and superior shelf life for long-distance shipping. Sorted and graded to international size specifications with temperature-controlled logistics from farm to port. Bulk supply for food processors, retailers, and wholesale markets.',
        img: 'https://images.unsplash.com/photo-1546470427-0d62b9f43ce8?w=800&q=90',
        badges: ['Export Quality', 'Multi-State Sourcing'],
      },
      {
        name: 'Potato',
        desc: 'Export-grade potatoes including Jyoti, Kufri Pukhraj, and processing varieties with uniform sizing and minimal defects. Cold-stored for year-round supply consistency. Competitively priced bulk quantities with phytosanitary certification for international procurement teams and food service distributors.',
        img: 'https://images.unsplash.com/photo-1508313880080-c5e2e5c0bbbd?w=800&q=90',
        badges: ['Export Quality', 'UP & Gujarat Sourcing'],
      },
      {
        name: 'Green Chilli',
        desc: 'Fresh Indian green chillies with consistent Scoville heat levels, vibrant color, and firm texture. Harvested at peak freshness with immediate cold chain handling to preserve quality during export transit. Available in bulk for food processing companies, spice manufacturers, and retail distribution worldwide.',
        img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&q=90',
        badges: ['Export Quality', 'Andhra Pradesh Sourcing'],
      },
    ],
  },
  {
    id: 'spices',
    name: 'Spices',
    emoji: '🌶️',
    desc: 'Authentic Indian spices processed in FSSAI, ISO, and HACCP-certified facilities. Every batch is lab-tested with a complete certificate of analysis, meeting EU, FDA, and global food safety standards for bulk export.',
    products: [
      {
        name: 'Red Chilli',
        desc: 'Premium Teja, Byadagi, and Kashmiri red chillies with intense natural color and high ASTA values (80-300). Available in whole dried, crushed flakes, and fine powder forms. Steam-sterilized and tested for aflatoxin compliance. Bulk supply for spice importers, food manufacturers, and oleoresin extractors worldwide.',
        img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=800&q=90',
        badges: ['Export Quality', 'Andhra Pradesh Sourcing'],
      },
      {
        name: 'Turmeric',
        desc: 'High-curcumin turmeric from Erode, Sangli, and Nizamabad with curcumin content ranging 3-7%. Available in polished fingers, unpolished, and fine powder forms. Each shipment includes a certificate of analysis for curcumin percentage, moisture, and pesticide residues. Trusted by global health food brands and spice distributors.',
        img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=90',
        badges: ['Export Quality', 'Tamil Nadu & Maharashtra Sourcing'],
      },
      {
        name: 'Black Pepper',
        desc: 'Premium Malabar and Tellicherry grade black pepper from the Western Ghats of Kerala with high piperine content (4-9%). Bold, uniform berries sorted and graded to FAQ/ASTA standards. Steam-sterilized for food safety compliance. Reliable bulk supply for international spice traders, food processors, and pharmaceutical companies.',
        img: 'https://images.unsplash.com/photo-1599909533601-aa539e4e2a7e?w=800&q=90',
        badges: ['Export Quality', 'Kerala Sourcing'],
      },
      {
        name: 'Garlic Powder',
        desc: 'Premium dehydrated garlic powder manufactured from select Indian garlic varieties using advanced spray-drying technology. Consistent pungency, aroma, and mesh size specifications. Meets international food processing standards with full traceability. Available in 25kg bulk bags for seasoning manufacturers, food processors, and private label brands globally.',
        img: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=800&q=90',
        badges: ['Export Quality', 'Madhya Pradesh Sourcing'],
      },
      {
        name: 'Coriander',
        desc: 'Premium eagle and badami grade coriander seeds from Rajasthan and Madhya Pradesh. Clean, sun-dried, and machine-sorted with low moisture content for extended shelf life. Also available as freshly ground powder. Bulk supply for international spice blenders, seasoning companies, and curry paste manufacturers with consistent quality year-round.',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=90',
        badges: ['Export Quality', 'Rajasthan Sourcing'],
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                  <div className="p-7 flex flex-col flex-grow">
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

                    <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">
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
