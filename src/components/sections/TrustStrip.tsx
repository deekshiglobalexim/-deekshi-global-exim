'use client'
import { motion } from 'framer-motion'
import { Package, Globe, ShieldCheck, Clock } from 'lucide-react'

const indicators = [
  { icon: Package, label: '500+ Tons Monthly Capacity' },
  { icon: Globe, label: '15+ Countries' },
  { icon: ShieldCheck, label: '100% Quality Compliance' },
  { icon: Clock, label: '24hr Response Time' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function TrustStrip() {
  return (
    <section className="relative bg-white py-8 overflow-hidden">
      {/* Gold border top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="font-display font-semibold text-lg text-navy-950 tracking-wide">
            Trusted By Importers Worldwide
          </h3>
        </div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {indicators.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center shadow-md group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
                  <Icon size={18} className="text-gold-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-navy-950 font-semibold text-sm md:text-base whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
