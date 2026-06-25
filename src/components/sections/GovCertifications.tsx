'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, FileCheck, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'Importer Exporter Code (IEC)',
    issuer: 'Directorate General of Foreign Trade (DGFT), Government of India',
    certNumber: 'BJMPG0475P',
    badge: 'Government Verified',
    description: 'Official Importer Exporter Code issued by the Directorate General of Foreign Trade (DGFT), Government of India, authorizing Deekshi Global Exim to conduct international import and export operations.',
    pdfLink: '/certificates/iec-certificate.pdf',
    icon: ShieldCheck,
  },
  {
    title: 'GST Registration',
    issuer: 'Government of India',
    certNumber: '36BJMPG0475P1ZO',
    badge: 'Government Registered',
    description: 'Official GST Registration issued by the Government of India confirming Deekshi Global Exim as a registered business entity under Goods and Services Tax.',
    pdfLink: '/certificates/gst-certificate.pdf',
    icon: FileCheck,
  },
]

export default function GovCertifications() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            <ShieldCheck size={14} /> Government Verified
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            Government <span className="gold-text">Certifications</span> & Registrations
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Officially registered and verified by the Government of India for international trade operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-navy-950 flex items-center justify-center shadow-lg">
                  <cert.icon size={28} className="text-gold-500" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {cert.badge}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-navy-950 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-500 text-sm mb-1">
                Issued by: <span className="text-navy-950 font-medium">{cert.issuer}</span>
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Certificate No: <span className="text-navy-950 font-mono font-semibold">{cert.certNumber}</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Button */}
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white font-semibold text-sm rounded-lg hover:bg-navy-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;Deekshi Global Exim is a Government Registered Indian Export Company committed to quality products, transparent business practices, and reliable international trade.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
