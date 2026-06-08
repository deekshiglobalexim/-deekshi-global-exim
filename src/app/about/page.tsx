import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Deekshi Global Exim — our mission, vision, values, and commitment to delivering premium Indian agricultural exports to global markets.',
}

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We conduct business with honesty, ethical standards, and full transparency in all our dealings.' },
  { icon: '✅', title: 'Reliability', desc: 'Consistent quality, documentation accuracy, and on-time deliveries you can depend on.' },
  { icon: '🔍', title: 'Transparency', desc: 'Open communication at every stage — from pricing to shipment updates — with no hidden costs.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We partner with environmentally responsible farms and promote sustainable agricultural practices.' },
  { icon: '⭐', title: 'Customer Satisfaction', desc: 'Understanding buyer needs and exceeding expectations is at the core of everything we do.' },
]

const timeline = [
  { year: '2022', title: 'Company Founded', desc: 'Deekshi Global Exim was established in Warangal, Telangana with a vision to connect Indian agriculture to the world.' },
  { year: '2023', title: 'Key Certifications Obtained', desc: 'Successfully registered under IEC, APEDA, GST, FSSAI Central License and ICEGATE for full export compliance.' },
  { year: '2024', title: 'First International Shipments', desc: 'Initiated export operations for rice, spices, and fresh produce to international markets.' },
  { year: '2025', title: 'Product Range Expansion', desc: 'Expanded to full range including fruits, vegetables, rice varieties and diverse spice categories.' },
  { year: '2026', title: 'Growing Global Network', desc: 'Strengthening partnerships with buyers across the Middle East, Southeast Asia and Africa.' },
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
              Our Story, Mission &amp; <span className="gold-text">Values</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Deekshi Global Exim was born from a passion for bringing India&apos;s finest agricultural produce to international tables with uncompromising quality and integrity.
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
                Deekshi Global Exim is a certified Import &amp; Export company headquartered in Warangal, Telangana, India. We are dedicated to bridging the gap between India&apos;s rich agricultural heritage and the growing global demand for premium, authentic Indian food products.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our expertise spans fresh fruits, vegetables, premium rice varieties, and a comprehensive range of Indian spices. We work directly with farmers and agricultural cooperatives across India to source the freshest, highest-quality produce for international markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With all mandatory certifications including APEDA, IEC, FSSAI Central License, GST, and ICEGATE registration, we ensure every export is fully compliant with Indian and international trade regulations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Established', value: '2022' },
                  { label: 'Location', value: 'Warangal, India' },
                  { label: 'Products', value: '25+ Varieties' },
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
                <div className="text-navy-950 font-display font-bold text-2xl">100%</div>
                <div className="text-navy-950/80 text-sm font-medium">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-navy-950 border border-gold-500/20">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-400 leading-relaxed">
                To connect India&apos;s finest agricultural producers with global buyers by delivering premium quality products with full regulatory compliance, transparent business practices, and exceptional service — making Indian agricultural exports synonymous with trust and excellence.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-off-white border border-gold-500/20">
              <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                <Eye size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy-950 mb-4">Our Vision</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">
                To become India&apos;s most trusted and recognized agricultural export brand — known globally for quality, reliability, and deep agricultural expertise — while contributing to farmer prosperity and sustainable agricultural development in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              Our Core <span className="gold-text">Values</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map(v => (
              <div key={v.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm card-hover text-center group">
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
            Reach out to our team and let&apos;s discuss how we can serve your import needs.
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
