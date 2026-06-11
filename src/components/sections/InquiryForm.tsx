'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Zap, DollarSign, ShieldCheck, FileText } from 'lucide-react'

const whyEnquire = [
  { icon: Zap, text: 'Quick Response' },
  { icon: DollarSign, text: 'Competitive Pricing' },
  { icon: ShieldCheck, text: 'Quality Assured' },
  { icon: FileText, text: 'Documentation Support' },
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function InquiryForm() {
  return (
    <section className="section-pad bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Send Us Your <span className="gold-text">Export Inquiry</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Get a quotation within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Product Interest</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-navy-950">Select a product</option>
                    <option value="rice" className="bg-navy-950">Rice</option>
                    <option value="fruits" className="bg-navy-950">Fruits</option>
                    <option value="vegetables" className="bg-navy-950">Vegetables</option>
                    <option value="spices" className="bg-navy-950">Spices</option>
                    <option value="dehydrated" className="bg-navy-950">Dehydrated Products</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quantity Required</label>
                <input
                  type="text"
                  placeholder="e.g., 20 MT, 1 FCL"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, specifications, or any questions..."
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Right side: Contact details and Why Enquire */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-display font-semibold text-2xl text-white mb-6">Contact Details</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">export@deekshiglobal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white font-medium">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            {/* Why Enquire With Us */}
            <motion.div variants={itemVariants}>
              <h3 className="font-display font-semibold text-2xl text-white mb-6">Why Enquire With Us?</h3>
              <div className="space-y-4">
                {whyEnquire.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-900 to-navy-800 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/50 transition-all duration-300">
                        <Icon size={18} className="text-gold-400" />
                      </div>
                      <span className="text-gray-200 font-medium group-hover:text-gold-300 transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
