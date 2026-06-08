import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle2, ArrowRight, Globe, Star, Truck, FileText, Search, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications & Export Process',
  description: 'Deekshi Global Exim holds GST, IEC, APEDA, FSSAI, and ICEGATE certifications. Learn about our 7-step export process.',
}

const certifications = [
  {
    code: 'GST',
    name: 'GST Registration',
    authority: 'Govt. of India — CBIC',
    desc: 'Goods and Services Tax registration certifies Deekshi Global Exim as a legitimate, tax-compliant business entity under Indian law. This is mandatory for all commercial operations in India.',
    color: 'from-blue-600/20 to-blue-600/5',
    border: 'border-blue-400/30',
    highlights: ['Tax compliance verified', 'GSTIN issued', 'Legal commercial entity', 'Input tax credit eligible'],
  },
  {
    code: 'IEC',
    name: 'Import Export Code',
    authority: 'DGFT — Ministry of Commerce',
    desc: 'The Import Export Code (IEC) issued by the Directorate General of Foreign Trade is the primary business identification number mandatory for any person or company involved in export and import activities.',
    color: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-400/30',
    highlights: ['DGFT registered', 'Internationally recognized', 'Mandatory for all exports', 'Lifetime validity'],
  },
  {
    code: 'APEDA',
    name: 'APEDA Registration',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'APEDA registration is essential for exporters of scheduled agricultural and processed food products. It provides access to financial assistance, market development programs, and quality development schemes.',
    color: 'from-gold-500/20 to-gold-500/5',
    border: 'border-gold-400/30',
    highlights: ['Government backed', 'Market development support', 'Quality scheme access', 'Export promotion'],
  },
  {
    code: 'FSSAI',
    name: 'FSSAI Central License',
    authority: 'Food Safety and Standards Authority of India',
    desc: 'FSSAI Central License is mandatory for food businesses involved in manufacturing, import, export, or distribution of food products. It ensures our operations meet all food safety and hygiene standards.',
    color: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-400/30',
    highlights: ['Food safety certified', 'Central license holder', 'Hygiene standards met', 'Internationally accepted'],
  },
  {
    code: 'ICG',
    name: 'ICEGATE Registration',
    authority: 'Indian Customs & Central Excise Gateway',
    desc: 'ICEGATE (Indian Customs EDI Gateway) registration enables electronic filing of import/export declarations, customs clearance processing, and real-time status tracking — ensuring seamless customs compliance.',
    color: 'from-red-600/20 to-red-600/5',
    border: 'border-red-400/30',
    highlights: ['E-customs filing', 'Real-time tracking', 'EDI enabled', 'Seamless clearance'],
  },
]

const exportSteps = [
  { num: '01', icon: Search, title: 'Product Sourcing', desc: 'We source directly from certified farms and trusted agricultural cooperatives across India, ensuring raw quality from the very origin.' },
  { num: '02', icon: Shield, title: 'Quality Inspection', desc: 'Multi-stage quality checks including visual grading, lab testing for pesticide residue, moisture content, and foreign matter analysis.' },
  { num: '03', icon: Package, title: 'Grading & Packaging', desc: 'Products are graded by size, colour, and weight, then packed in export-grade materials — jute, corrugated boxes, or vacuum packs as required.' },
  { num: '04', icon: FileText, title: 'Documentation', desc: 'All export documents prepared: Commercial Invoice, Packing List, Bill of Lading, Phytosanitary Certificate, Certificate of Origin, and more.' },
  { num: '05', icon: CheckCircle2, title: 'Customs Clearance', desc: 'Our team handles all customs formalities via ICEGATE for smooth clearance at Indian ports with minimal delay.' },
  { num: '06', icon: Globe, title: 'International Shipping', desc: 'Dispatch via sea or air freight using trusted logistics partners with real-time shipment tracking until delivery.' },
  { num: '07', icon: Truck, title: 'Delivery & Support', desc: 'On-time delivery to the buyer\'s destination, with post-shipment communication, feedback, and continued support.' },
]

const trustReasons = [
  { icon: '🔒', title: 'Full Regulatory Compliance', desc: 'Every export is executed with complete compliance with Indian export regulations and destination country import requirements.' },
  { icon: '🧪', title: 'Lab-Tested Quality', desc: 'Products are tested for pesticide residue, microbial contamination, and quality parameters before every shipment.' },
  { icon: '📦', title: 'Export-Grade Packaging', desc: 'Packaging is customized by product type and destination to ensure freshness, safety, and presentation standards.' },
  { icon: '🌐', title: 'International Standards', desc: 'We adhere to Codex Alimentarius, EU norms, and destination-specific import standards for food safety.' },
  { icon: '📋', title: 'Transparent Documentation', desc: 'All import-export paperwork is accurate, complete, and delivered in advance — no delays, no surprises.' },
  { icon: '🤝', title: 'Dedicated Account Support', desc: 'A dedicated contact person handles your account from enquiry to delivery and beyond.' },
]

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">Certifications & Compliance</p>
          <h1 className="font-display font-bold text-5xl text-white mb-6">
            Certified. Compliant. <span className="gold-text">Trusted.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our certifications are the foundation of buyer confidence. Every certificate represents our commitment to legal compliance, quality, and professional export standards.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              Our <span className="gold-text">Certifications</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <div key={cert.code} className={`rounded-2xl border ${cert.border} bg-gradient-to-r ${cert.color} p-7 flex flex-col md:flex-row gap-6 items-start`}>
                {/* Badge */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-navy-950 border border-gold-500/30 flex items-center justify-center">
                  <span className="font-display font-bold text-gold-500 text-sm tracking-wide text-center leading-tight">{cert.code}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-2xl text-navy-950">{cert.name}</h3>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-full font-medium">{cert.authority}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{cert.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.highlights.map(h => (
                      <span key={h} className="flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-gray-100 text-navy-950 text-xs font-medium rounded-full">
                        <CheckCircle2 size={11} className="text-gold-500" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Our 7-Step <span className="gold-text">Export Process</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-gray-400 max-w-xl mx-auto">
              A comprehensive, transparent process that ensures quality, compliance, and timely delivery for every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {exportSteps.map((step, i) => (
              <div key={step.num} className={`relative p-6 rounded-2xl border border-gold-500/20 bg-white/5 group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 ${i === exportSteps.length - 1 && exportSteps.length % 4 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                    <step.icon size={18} className="text-gold-400" />
                  </div>
                  <span className="font-display font-bold text-2xl text-gray-700 group-hover:text-gold-500/30 transition-colors">{step.num}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              Why Global Buyers <span className="gold-text">Trust Us</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map(r => (
              <div key={r.title} className="p-6 rounded-2xl border border-gray-100 bg-off-white card-hover group">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            Ready to Start Importing from India?
          </h2>
          <p className="text-navy-900/80 text-lg mb-8">
            We handle all the compliance, documentation, and logistics — so you can focus on your business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 bg-navy-950 text-white font-bold rounded-xl hover:bg-navy-900 transition-colors group">
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
