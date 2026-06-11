import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle2, ArrowRight, Globe, Truck, FileText, Search, Package, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications & Export Process',
  description: 'Deekshi Global Exim holds GST, IEC, APEDA, FSSAI, and ICEGATE certifications. Learn how these protect international buyers and ensure compliant trade.',
}

const certifications = [
  {
    code: 'GST',
    name: 'GST Registration',
    authority: 'Govt. of India - CBIC',
    desc: 'Goods and Services Tax registration certifies Deekshi Global Exim as a legitimate, tax-compliant business entity under Indian law. This is mandatory for all commercial operations in India.',
    buyerBenefit: 'As an international buyer, this guarantees you are transacting with a legally registered, government-verified Indian business. All invoices carry valid GSTIN for full traceability.',
    color: 'from-blue-600/20 to-blue-600/5',
    border: 'border-blue-400/30',
    highlights: ['Tax compliance verified', 'GSTIN issued', 'Legal commercial entity', 'Input tax credit eligible'],
  },
  {
    code: 'IEC',
    name: 'Import Export Code',
    authority: 'DGFT - Ministry of Commerce',
    desc: 'The Import Export Code (IEC) issued by the Directorate General of Foreign Trade is the primary business identification number mandatory for any person or company involved in export and import activities.',
    buyerBenefit: 'IEC certification means your shipments are processed through official Indian government trade channels. This enables proper customs documentation and ensures your imports meet regulatory requirements at both origin and destination.',
    color: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-400/30',
    highlights: ['DGFT registered', 'Internationally recognized', 'Mandatory for all exports', 'Lifetime validity'],
  },
  {
    code: 'APEDA',
    name: 'APEDA Registration',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'APEDA registration is essential for exporters of scheduled agricultural and processed food products including rice, spices, fruits, and vegetables. It provides access to quality monitoring and export promotion programs.',
    buyerBenefit: 'APEDA registration ensures your rice and agricultural imports from us meet government-monitored quality standards. APEDA conducts regular quality audits and provides traceability for all scheduled agricultural exports from India.',
    color: 'from-gold-500/20 to-gold-500/5',
    border: 'border-gold-400/30',
    highlights: ['Government quality monitoring', 'Agricultural export authority', 'Traceability enabled', 'Quality scheme access'],
  },
  {
    code: 'FSSAI',
    name: 'FSSAI Central License',
    authority: 'Food Safety and Standards Authority of India',
    desc: 'FSSAI Central License is mandatory for food businesses involved in manufacturing, import, export, or distribution of food products. It ensures operations meet all food safety and hygiene standards defined by Indian law.',
    buyerBenefit: 'This license guarantees every food product we export has been processed and handled according to strict food safety protocols. Products are tested for pesticide residues, heavy metals, and microbiological contamination before shipping.',
    color: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-400/30',
    highlights: ['Food safety certified', 'Central license holder', 'Hygiene standards met', 'Internationally accepted'],
  },
  {
    code: 'ICG',
    name: 'ICEGATE Registration',
    authority: 'Indian Customs & Central Excise Gateway',
    desc: 'ICEGATE (Indian Customs EDI Gateway) registration enables electronic filing of import/export declarations, customs clearance processing, and real-time status tracking for all shipments.',
    buyerBenefit: 'Electronic customs processing means faster clearance, fewer delays, and complete digital documentation trail. You receive real-time tracking of customs status and all filings are transparent and auditable.',
    color: 'from-red-600/20 to-red-600/5',
    border: 'border-red-400/30',
    highlights: ['E-customs filing', 'Real-time tracking', 'EDI enabled', 'Seamless clearance'],
  },
]

const exportSteps = [
  { num: '01', icon: Search, title: 'Product Sourcing', desc: 'We source directly from certified farms and trusted agricultural cooperatives across India, ensuring premium rice and produce quality from the very origin.' },
  { num: '02', icon: Shield, title: 'Quality Inspection', desc: 'Multi-stage quality checks including visual grading, lab testing for pesticide residue, moisture content, broken grain percentage, and foreign matter analysis.' },
  { num: '03', icon: Package, title: 'Grading & Packaging', desc: 'Products are graded by size, colour, and weight, then packed in export-grade materials - jute bags, PP woven bags, or custom packaging as per buyer requirements.' },
  { num: '04', icon: FileText, title: 'Documentation', desc: 'All export documents prepared: Commercial Invoice, Packing List, Bill of Lading, Phytosanitary Certificate, Certificate of Origin, Fumigation Certificate, and more.' },
  { num: '05', icon: CheckCircle2, title: 'Customs Clearance', desc: 'Our team handles all customs formalities via ICEGATE for smooth clearance at Indian ports with minimal delay and full digital traceability.' },
  { num: '06', icon: Globe, title: 'International Shipping', desc: 'Dispatch via sea freight (FCL/LCL) or air cargo using trusted logistics partners with real-time shipment tracking until delivery at your port.' },
  { num: '07', icon: Truck, title: 'Delivery & Support', desc: 'On-time delivery to the buyer\'s destination port, with post-shipment communication, quality feedback loop, and continued partnership support.' },
]

const buyerProtections = [
  {
    icon: Lock,
    title: 'Verified Legal Entity',
    desc: 'GST and IEC registrations confirm we are a legally operating, government-verified business. Every transaction is transparent and auditable.',
  },
  {
    icon: Shield,
    title: 'Food Safety Guaranteed',
    desc: 'FSSAI Central License and APEDA registration ensure all food products meet Indian national food safety standards and are safe for international consumption.',
  },
  {
    icon: FileText,
    title: 'Complete Documentation',
    desc: 'ICEGATE registration ensures electronic customs filing with full digital trail. All shipping documents are accurate, complete, and delivered before vessel arrival.',
  },
  {
    icon: Globe,
    title: 'International Compliance',
    desc: 'Our certification suite enables compliance with import regulations across the Middle East, Asia, Africa, and other markets. We adapt documentation per destination requirements.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Traceability',
    desc: 'APEDA-monitored quality standards provide end-to-end traceability from farm to port. Buyers can verify product origin and quality parameters for every shipment.',
  },
  {
    icon: Package,
    title: 'Risk-Free Importing',
    desc: 'Combined certifications reduce import risks: legitimate supplier verification, food safety assurance, proper customs processing, and regulatory compliance at both ends.',
  },
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
            Our certifications are the foundation of buyer confidence. Every certificate represents our commitment to legal compliance, quality assurance, and safe international trade - protecting your business at every step.
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
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each certification serves a specific role in ensuring safe, compliant, and transparent export trade from India to your destination market.
            </p>
          </div>

          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.code} className={`rounded-2xl border ${cert.border} bg-gradient-to-r ${cert.color} p-7 flex flex-col md:flex-row gap-6 items-start shadow-premium hover:shadow-premium-lg transition-shadow duration-300`}>
                {/* Badge */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-navy-950 border border-gold-500/30 flex items-center justify-center shadow-lg">
                  <span className="font-display font-bold text-gold-500 text-sm tracking-wide text-center leading-tight">{cert.code}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-2xl text-navy-950">{cert.name}</h3>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-full font-medium">{cert.authority}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-3">{cert.desc}</p>
                  <div className="p-3 rounded-xl bg-gold-500/5 border border-gold-500/15 mb-4">
                    <p className="text-navy-950 text-sm leading-relaxed">
                      <span className="font-semibold text-gold-600">What this means for you: </span>
                      {cert.buyerBenefit}
                    </p>
                  </div>
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

      {/* How Certifications Protect Buyers */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              How Our Certifications <span className="gold-text">Protect You</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              As an international buyer, our certifications work together to create multiple layers of protection for your business - from supplier verification to food safety and customs compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerProtections.map(item => (
              <div key={item.title} className="p-7 rounded-2xl border border-gray-100 bg-off-white shadow-premium group hover:border-gold-500/30 hover:shadow-premium-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center mb-5 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-lg">
                  <item.icon size={20} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            {exportSteps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-2xl border border-gold-500/20 bg-white/5 group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300">
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

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            Ready to Start Importing from India?
          </h2>
          <p className="text-navy-900/80 text-lg mb-8">
            We handle all the compliance, documentation, and logistics - so you can focus on your business with complete confidence.
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
