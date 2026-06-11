import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const highlights = [
  'APEDA & IEC Certified export business',
  'Sona Masoori Rice sourced directly from AP & Telangana farmers',
  'Strong sourcing networks across Andhra Pradesh and Telangana',
  'Specializing in premium Indian rice, fruits, vegetables & spices',
  'Supplying to global markets across continents',
  'Strict quality control at every stage',
  'Full export documentation support',
]

export default function AboutPreview() {
  return (
    <section className="section-pad bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/3] responsive-image-container group">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=95"
                alt="Global trade and exports"
                fill 
                className="object-cover premium-image group-hover:scale-105"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent group-hover:from-navy-950/50 transition-all duration-500" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-navy-950 rounded-2xl p-6 shadow-gold-glow-lg border border-gold-500/40 hidden sm:block card-premium">
              <div className="text-gold-500 font-display font-bold text-4xl">5+</div>
              <div className="text-white text-sm font-medium mt-1">Certifications</div>
              <div className="text-gray-400 text-xs mt-2 leading-relaxed">GST · IEC · APEDA · FSSAI · ICEGATE</div>
            </div>
            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl shadow-lg shadow-gold-500/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold-500/50" />
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-6">
              About Deekshi Global Exim
            </div>

            <h2 className="font-display font-bold text-4xl text-navy-950 mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="gold-text">Premium Indian</span> Agricultural Exports
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Deekshi Global Exim is a certified Import &amp; Export company headquartered in Warangal, Telangana, India. We specialize in supplying the finest Indian agricultural products -- premium Sona Masoori Rice, Basmati Rice, Non-Basmati Rice, fresh fruits, vegetables, and spices -- to international buyers across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our strong sourcing networks across Andhra Pradesh and Telangana give us direct access to the finest rice-producing regions in India. We work closely with farmers and millers to ensure every grain of Sona Masoori Rice meets the highest quality standards. Our foundation is built on trust, transparency, and an unwavering commitment to quality.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-950 text-white font-semibold rounded-xl hover:bg-navy-900 transition-colors group">
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
