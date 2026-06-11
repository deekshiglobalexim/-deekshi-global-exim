'use client'
import { motion } from 'framer-motion'
import { MessageSquare, Search, ClipboardCheck, FileText, Ship, PackageCheck } from 'lucide-react'

const steps = [
  {
    num: 1,
    title: 'Inquiry',
    desc: 'Share your product requirements, target specifications, and delivery timeline with our export team.',
    icon: MessageSquare,
  },
  {
    num: 2,
    title: 'Product Sourcing',
    desc: 'We source the finest agricultural products from verified farms and cooperatives across India.',
    icon: Search,
  },
  {
    num: 3,
    title: 'Quality Inspection',
    desc: 'Rigorous quality checks ensure every shipment meets international food safety and grading standards.',
    icon: ClipboardCheck,
  },
  {
    num: 4,
    title: 'Documentation',
    desc: 'Complete export documentation including phytosanitary certificates, Bill of Lading, and Certificate of Origin.',
    icon: FileText,
  },
  {
    num: 5,
    title: 'Global Shipping',
    desc: 'Efficient logistics with FCL and LCL options to ports worldwide, ensuring safe and timely transit.',
    icon: Ship,
  },
  {
    num: 6,
    title: 'Delivery Support',
    desc: 'End-to-end tracking, customs clearance support, and post-delivery follow-up for complete buyer satisfaction.',
    icon: PackageCheck,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ExportProcess() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Our Export Process
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            How We <span className="gold-text">Deliver Excellence</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A streamlined six-step process designed to deliver premium Indian agricultural products to your doorstep with full transparency and compliance.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="relative card-premium shadow-premium-lg p-8 rounded-2xl border border-gray-200 group overflow-hidden transition-premium hover:shadow-gold-glow hover:border-gold-500/30"
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center shadow-lg">
                  <span className="text-gold-400 font-display font-bold text-sm">{step.num}</span>
                </div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-lg shadow-navy-950/30 group-hover:shadow-gold-500/30">
                  <Icon size={24} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display font-semibold text-xl text-navy-950 mb-3 tracking-wide">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
