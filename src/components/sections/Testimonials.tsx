import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mohammed Al-Rashid',
    country: 'UAE',
    flag: '\u{1F1E6}\u{1F1EA}',
    role: 'Food Import Manager',
    text: 'The Sona Masoori Rice from Deekshi Global Exim is exceptional - consistent grain quality, perfect moisture content, and the aroma is outstanding. Our customers specifically request this brand now. Bulk supply reliability has been flawless across 12 monthly shipments.',
    rating: 5,
  },
  {
    name: 'Zhang Wei',
    country: 'China',
    flag: '\u{1F1E8}\u{1F1F3}',
    role: 'Agricultural Commodities Buyer',
    text: 'We import both Basmati and non-Basmati rice varieties in container loads. Documentation is always complete and accurate, customs clearance is seamless every time. Their APEDA and FSSAI certifications give us full confidence in food safety compliance.',
    rating: 5,
  },
  {
    name: 'Priya Naidoo',
    country: 'South Africa',
    flag: '\u{1F1FF}\u{1F1E6}',
    role: 'Wholesale Distribution Director',
    text: 'From spices to fresh produce, every shipment meets international quality standards. Their phytosanitary documentation is thorough and delivery timelines are consistently met. A truly professional export partner for African markets.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            Trusted by Buyers <span className="gold-text">Worldwide</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="card-premium shadow-premium p-8 rounded-2xl border border-gray-200 group overflow-hidden relative transition-premium hover:shadow-premium-lg hover:border-gold-500/30">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote mark */}
              <Quote size={48} className="absolute top-3 right-3 text-gold-500/15 group-hover:text-gold-500/25 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500 hover:scale-110 transition-transform" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10 group-hover:text-gray-700 transition-colors">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200 group-hover:border-gold-500/20 transition-colors relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center text-2xl group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all">
                  {t.flag}
                </div>
                <div>
                  <div className="font-semibold text-navy-950 text-sm tracking-wide">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role} · {t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
