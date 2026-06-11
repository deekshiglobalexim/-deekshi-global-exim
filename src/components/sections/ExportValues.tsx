'use client'

import { Handshake, Award, Clock, Users, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Handshake,
    title: 'Trust',
    desc: 'Strong relationships create long-term success.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'Consistent quality builds global reputation.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    desc: 'On-time delivery and transparency build trust.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We grow when our partners grow.',
  },
  {
    icon: Sprout,
    title: 'Impact',
    desc: 'Empowering farmers. Strengthening economies.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
}

export default function ExportValues() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dots-bg opacity-10" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/95 to-navy-900" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Export is{' '}
              <span className="gold-text">More Than Profit</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-lg">
              It&apos;s about building trust, creating value and growing together.
            </p>

            {/* Values List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500/20 transition-all duration-300">
                    <value.icon size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-gold-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Handshake size={18} className="text-gold-500" />
                </div>
                <p className="text-white text-sm font-medium">
                  We don&apos;t just export products.{' '}
                  <span className="text-gold-500 font-bold">We export trust.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 border border-gold-500/20 p-10 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
                    <Award size={40} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-3xl text-white mb-2">
                      Deekshi Global Exim
                    </h3>
                    <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
                      Certified Export Partner
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-950/60 rounded-xl p-4 border border-gold-500/10">
                      <p className="text-gold-500 font-bold text-2xl">15+</p>
                      <p className="text-gray-400 text-xs mt-1">Countries Served</p>
                    </div>
                    <div className="bg-navy-950/60 rounded-xl p-4 border border-gold-500/10">
                      <p className="text-gold-500 font-bold text-2xl">500+</p>
                      <p className="text-gray-400 text-xs mt-1">Tons Monthly</p>
                    </div>
                    <div className="bg-navy-950/60 rounded-xl p-4 border border-gold-500/10">
                      <p className="text-gold-500 font-bold text-2xl">5</p>
                      <p className="text-gray-400 text-xs mt-1">Certifications</p>
                    </div>
                    <div className="bg-navy-950/60 rounded-xl p-4 border border-gold-500/10">
                      <p className="text-gold-500 font-bold text-2xl">100%</p>
                      <p className="text-gray-400 text-xs mt-1">Quality Commitment</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold-500/10">
                    <p className="text-gray-500 text-xs italic">
                      &quot;Connecting Commerce &amp; Empowering Growth&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
