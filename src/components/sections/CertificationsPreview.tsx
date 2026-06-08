import Link from 'next/link'
import { Shield, ArrowRight } from 'lucide-react'

const certs = [
  { name: 'GST Registration', code: 'GST', desc: 'Goods and Services Tax certified business entity for legal commercial operations.' },
  { name: 'IEC Code', code: 'IEC', desc: 'Import Export Code issued by DGFT — mandatory for all international trade.' },
  { name: 'APEDA Registration', code: 'APEDA', desc: 'Agricultural & Processed Food Products Export Development Authority registered.' },
  { name: 'FSSAI License', code: 'FSSAI', desc: 'Food Safety & Standards Authority of India Central License for food exports.' },
  { name: 'ICEGATE', code: 'ICG', desc: 'Indian Customs & Central Excise Gateway — fully registered for customs e-filing.' },
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
            Our <span className="gold-text">Certifications</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Deekshi Global Exim is registered and compliant with all mandatory Indian export regulatory authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {certs.map(cert => (
            <div key={cert.name} className="relative card-premium shadow-premium p-6 border border-gold-500/25 bg-gradient-to-br from-white/10 to-white/5 text-center group hover:border-gold-500/50 hover:shadow-gold-glow transition-all duration-300 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/10 border border-gold-500/40 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/20 transition-all duration-300 shadow-lg shadow-gold-500/10">
                <span className="text-gold-300 font-display font-bold text-sm tracking-widest">{cert.code}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-tight tracking-wide">{cert.name}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{cert.desc}</p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
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
