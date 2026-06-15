import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Target, Eye, Wheat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Deekshi Global Exim — India\'s premium agricultural exporter connecting the finest Indian produce to international markets.',
}

const values = [
  { icon: '\u{1F91D}', title: 'Integrity', desc: 'We conduct business with honesty, ethical standards, and full transparency in all our dealings.' },
  { icon: '\u2705', title: 'Reliability', desc: 'Consistent quality, documentation accuracy, and on-time deliveries you can depend on.' },
  { icon: '\u{1F50D}', title: 'Transparency', desc: 'Open communication at every stage - from pricing to shipment updates - with no hidden costs.' },
  { icon: '\u{1F33F}', title: 'Sustainability', desc: 'We partner with environmentally responsible farms and promote sustainable agricultural practices.' },
  { icon: '\u2B50', title: 'Customer Satisfaction', desc: 'Understanding buyer needs and exceeding expectations is at the core of everything we do.' },
]

const timeline = [
  { year: '2022', title: 'Company Founded', desc: 'Deekshi Global Exim was established with a vision to export premium Indian rice and agricultural products to the world.' },
  { year: '2023', title: 'Export Certifications Secured', desc: 'Obtained IEC, APEDA, GST, FSSAI Central License, and ICEGATE registrations - establishing full export compliance for rice and food products.' },
  { year: '2024', title: 'Rice Export Operations Launched', desc: 'Began exporting Sona Masoori Rice and Basmati varieties to the Middle East and Asia, with direct sourcing from trusted Indian farmers.' },
  { year: '2025', title: 'Bulk Supply Capability Achieved', desc: 'Scaled to 500+ tons monthly capacity with established FCL shipping to 15+ countries. Expanded to include spices, fruits, and vegetables.' },
  { year: '2026', title: 'Growing as India\'s Trusted Rice Exporter', desc: 'Strengthening buyer partnerships across the Middle East, Southeast Asia, and Africa with a reputation for premium rice quality and reliable supply.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-display font-bold text-5xl text-white mb-6 leading-tight">
              Premium <span className="gold-text">Agricultural Exporter</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Deekshi Global Exim connects India&apos;s finest agricultural produce to international markets with uncompromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-pad bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl text-navy-950 mb-6">
                Who We Are
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Deekshi Global Exim is a certified Import &amp; Export company based in India. We specialize in premium rice exports - particularly Sona Masoori Rice - alongside spices, fresh fruits, vegetables, and dehydrated products.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our strong sourcing networks across India give us direct access to the country&apos;s finest rice-growing regions. We work closely with farmers and cooperatives to secure the best Sona Masoori, Basmati, and specialty rice varieties at competitive prices while maintaining strict quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With all mandatory certifications including APEDA, IEC, FSSAI Central License, GST, and ICEGATE registration, we ensure every export is fully compliant with Indian and international trade regulations - giving buyers complete confidence in their sourcing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Founded By', value: 'Deekshith Gaddam' },
                  { label: 'Established', value: '2022' },
                  { label: 'Location', value: 'Warangal, India' },
                  { label: 'Monthly Capacity', value: '500+ Tons' },
                  { label: 'Certifications', value: '5 Active' },
                ].map(item => (
                  <div key={item.label} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-display font-bold text-navy-950 text-lg">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                  alt="Agricultural products"
                  fill className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 rounded-2xl p-5 shadow-xl">
                <div className="text-navy-950 font-display font-bold text-2xl">500+</div>
                <div className="text-navy-950/80 text-sm font-medium">Tons/Month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Export Excellence */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Sona Masoori Rice', desc: 'Premium medium-grain rice known for its lightweight texture and aromatic quality, sourced from India\'s finest growing regions.' },
                  { title: 'Basmati Rice', desc: 'Long-grain aromatic rice with exceptional flavor, sourced from India\'s finest growing regions.' },
                  { title: 'Direct Farm Sourcing', desc: 'Established partnerships with rice farmers and cooperatives across India\'s top rice-producing regions.' },
                  { title: 'Quality Assurance', desc: 'Multi-stage inspection for grain length, moisture content, broken percentage, and foreign matter.' },
                ].map(item => (
                  <div key={item.title} className="p-5 rounded-2xl border border-gray-100 bg-off-white shadow-sm group hover:border-gold-500/30 hover:shadow-premium transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-gold-500" />
                      <h4 className="font-display font-semibold text-navy-950 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
                <Wheat size={14} /> Core Expertise
              </div>
              <h2 className="font-display font-bold text-4xl text-navy-950 mb-6">
                Rice Export <span className="gold-text">Excellence</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Rice is at the heart of our export business. India is one of the world&apos;s largest rice producers, and our strong sourcing networks give us a strategic advantage in securing the finest Sona Masoori and other premium rice varieties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our team has deep knowledge of rice grading, processing standards, and international packaging requirements. Whether you need 20-ton container loads of Sona Masoori for the Middle East or specialty Basmati for premium retail markets, we deliver consistent quality with full traceability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every rice shipment is backed by APEDA certification, phytosanitary compliance, and comprehensive documentation - ensuring hassle-free customs clearance at your destination port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-navy-950 border border-gold-500/20">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-400 leading-relaxed">
                To be India&apos;s most reliable rice and agricultural export partner - connecting Indian farms with international buyers through premium quality products, full regulatory compliance, and transparent business practices.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gold-500/20">
              <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                <Eye size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy-950 mb-4">Our Vision</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">
                To become India&apos;s most trusted agriculture products export brand - known globally for Sona Masoori quality, reliable bulk supply, and deep agricultural expertise - while contributing to farmer prosperity across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              Our Core <span className="gold-text">Values</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map(v => (
              <div key={v.title} className="p-6 bg-off-white rounded-2xl border border-gray-100 shadow-sm card-hover text-center group">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Our <span className="gold-text">Journey</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold-500/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl border border-gold-500/20 bg-white/5 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-display font-semibold text-gold-400 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Year dot */}
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/30">
                    <span className="font-display font-bold text-navy-950 text-xs">{item.year}</span>
                  </div>
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            Let&apos;s Build a Partnership
          </h2>
          <p className="text-navy-900/80 text-lg mb-8">
            Whether you need premium Sona Masoori Rice or a full range of Indian agricultural products, our team is ready to serve your import needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 bg-navy-950 text-white font-bold rounded-xl hover:bg-navy-900 transition-colors group">
            Contact Us Today
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
