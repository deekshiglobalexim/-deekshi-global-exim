import Link from 'next/link'
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

const certs = [
  {
    name: 'GST Registered',
    code: 'GST',
    desc: 'Verified tax-compliant entity under Indian law. Guarantees you are dealing with a legitimate, government-recognized business for all trade transactions.',
    highlights: ['Tax Compliant', 'Legally Verified'],
  },
  {
    name: 'IEC Certified',
    code: 'IEC',
    desc: 'Import Export Code from DGFT enables authorized international trade. Your shipments are processed through official government channels.',
    highlights: ['DGFT Authorized', 'Trade Licensed'],
  },
  {
    name: 'APEDA Registered',
    code: 'APEDA',
    desc: 'Registered with the Agricultural & Processed Food Products Export Development Authority for certified agricultural exports including rice, spices, and fresh produce.',
    highlights: ['Agri-Export Certified', 'Quality Monitored'],
  },
  {
    name: 'FSSAI Central License',
    code: 'FSSAI',
    desc: 'Central food safety license ensures all exported products meet stringent Indian food safety standards, tested for contaminants and safe for global consumption.',
    highlights: ['Food Safety Assured', 'Lab Tested'],
  },
  {
    name: 'ICEGATE Registered',
    code: 'ICG',
    desc: 'Electronic customs filing through Indian Customs EDI Gateway ensures smooth, transparent customs clearance with real-time tracking for every shipment.',
    highlights: ['E-Customs Ready', 'Fast Clearance'],
  },
]

export default function CertificationsPreview() {
  return (
    <section className="section-pad bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            <Shield size={14} /> Verified & Certified
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Certifications That <span className="gold-text">Protect Your Trade</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every certification we hold is designed to give international buyers confidence. These credentials ensure safe, compliant, and transparent trade from India to your destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {certs.map(cert => (
            <div key={cert.name} className="relative card-premium shadow-premium-lg p-7 border border-gold-500/25 bg-gradient-to-br from-white/10 to-white/5 text-center group hover:border-gold-500/50 hover:shadow-gold-glow transition-all duration-300 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/40 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/20 transition-all duration-300 shadow-lg shadow-gold-500/10">
                <span className="text-gold-300 font-display font-bold text-base tracking-widest">{cert.code}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-3 leading-tight tracking-wide">{cert.name}</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">{cert.desc}</p>

              {/* Highlight badges */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {cert.highlights.map(h => (
                  <span key={h} className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-medium rounded-full">
                    <CheckCircle2 size={9} /> {h}
                  </span>
                ))}
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover overlay glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 30px rgba(212, 175, 55, 0.1)' }} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/certifications" className="inline-flex items-center gap-2 px-8 py-4 btn-premium border-2 border-gold-500 text-gold-400 font-bold rounded-xl hover:bg-gold-500/15 hover:text-gold-300 transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg relative z-10">
            View All Certifications
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
