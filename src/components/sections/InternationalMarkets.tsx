'use client'
import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'

const markets = [
  { name: 'UAE', region: 'Middle East' },
  { name: 'Saudi Arabia', region: 'Middle East' },
  { name: 'Qatar', region: 'Middle East' },
  { name: 'Oman', region: 'Middle East' },
  { name: 'Kuwait', region: 'Middle East' },
  { name: 'Bahrain', region: 'Middle East' },
  { name: 'Singapore', region: 'Southeast Asia' },
  { name: 'Malaysia', region: 'Southeast Asia' },
  { name: 'Europe', region: 'European Union' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function InternationalMarkets() {
  return (
    <section className="section-pad bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            <Globe size={14} /> Global Export Reach
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Serving <span className="gold-text">International Markets</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Deekshi Global Exim delivers premium Indian agricultural products to buyers across the Middle East, Southeast Asia, and Europe with reliable logistics and full compliance.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {markets.map((market) => (
            <motion.div
              key={market.name}
              variants={itemVariants}
              className="relative card-premium shadow-premium-lg p-7 border border-gold-500/25 bg-gradient-to-br from-white/10 to-white/5 text-center group hover:border-gold-500/50 hover:shadow-gold-glow transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/40 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/20 transition-all duration-300 shadow-lg shadow-gold-500/10">
                <MapPin size={22} className="text-gold-400" />
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2 tracking-wide">{market.name}</h3>
              <p className="text-gray-400 text-sm">{market.region}</p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
