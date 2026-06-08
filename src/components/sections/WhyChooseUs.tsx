import { Shield, Globe, Star, Truck, Clock, DollarSign } from 'lucide-react'

const cards = [
  { icon: Shield, title: 'Certified Business', desc: 'Registered under GST, IEC, APEDA, FSSAI & ICEGATE — fully compliant with Indian export laws.' },
  { icon: Globe, title: 'Global Market Reach', desc: 'Our export network spans multiple continents. We connect Indian produce to international buyers efficiently.' },
  { icon: Star, title: 'Premium Quality', desc: 'Rigorous quality checks at sourcing, processing, and packaging stages ensure export-grade standards.' },
  { icon: Truck, title: 'Reliable Logistics', desc: 'Partnered with trusted freight and logistics providers for seamless door-to-port delivery.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'Strict adherence to shipment schedules and documentation timelines ensures on-time delivery.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Direct sourcing from farms and efficient operations allow us to offer the best market-competitive rates.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            The Deekshi Global Exim <span className="gold-text">Advantage</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            From farm to global destination — we handle every step with precision, transparency, and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={card.title}
              className="relative card-premium shadow-premium p-8 rounded-2xl border border-gray-200 group overflow-hidden transition-premium hover:shadow-premium-lg hover:border-gold-500/30">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/8 to-transparent rounded-bl-3xl transition-all duration-500 group-hover:from-gold-500/12" />

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-lg shadow-navy-950/30 group-hover:shadow-gold-500/30">
                <card.icon size={24} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display font-semibold text-xl text-navy-950 mb-3 tracking-wide">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.desc}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
