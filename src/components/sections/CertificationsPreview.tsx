import Link from 'next/link'
import { Shield, ArrowRight } from 'lucide-react'

const certs = [
  {
    name: 'IEC Certified',
    code: 'IEC',
    desc: 'Import Export Code from DGFT for authorized international trade.',
  },
  {
    name: 'APEDA Registered',
    code: 'APEDA',
    desc: 'Registered for certified agricultural product exports.',
  },
  {
    name: 'FSSAI Central License',
    code: 'FSSAI',
    desc: 'Central food safety license ensuring product quality standards.',
  },
  {
    name: 'GST Registered',
    code: 'GST',
    desc: 'Verified tax-compliant entity under Indian law.',
  },
  {
    name: 'ICEGATE Registered',
    code: 'ICEGATE',
    desc: 'Electronic customs filing for smooth clearance.',
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
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {certs.map(cert => (
            <div key={cert.name} className="relative card-premium shadow-premium-lg p-7 border border-gold-500/25 bg-gradient-to-br from-white/10 to-white/5 text-center group hover:border-gold-500/50 hover:shadow-gold-glow transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/40 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/20 transition-all duration-300 shadow-lg shadow-gold-500/10">
                <span className="text-gold-300 font-display font-bold text-base tracking-widest">{cert.code}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-3 leading-tight tracking-wide">{cert.name}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{cert.desc}</p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/certifications" className="inline-flex items-center gap-2 px-8 py-4 btn-premium border-2 border-gold-500 text-gold-400 font-bold rounded-xl hover:bg-gold-500/15 hover:text-gold-300 transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg relative z-10">
            View All Certifications
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
