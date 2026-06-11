import { Wheat, Shield, Truck, FileText } from 'lucide-react'

const cards = [
  {
    icon: Wheat,
    title: 'Direct Farm Sourcing',
    desc: 'Established partnerships with farmers and cooperatives ensure consistent quality and competitive pricing for all products.',
  },
  {
    icon: Shield,
    title: 'Quality Compliance',
    desc: 'All exports meet international food safety standards with FSSAI certification and phytosanitary compliance.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    desc: 'Efficient supply chain for both FCL and LCL shipments with consistent monthly dispatch schedules.',
  },
  {
    icon: FileText,
    title: 'Complete Documentation',
    desc: 'Full export documentation support including Bill of Lading, Certificate of Origin, and phytosanitary certificates.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Why International Buyers Choose Us
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            The Deekshi Global Exim <span className="gold-text">Advantage</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title}
              className="relative card-premium shadow-premium-lg p-8 rounded-2xl border border-gray-200 group overflow-hidden transition-premium hover:shadow-gold-glow hover:border-gold-500/30">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-gold-500/8 to-transparent rounded-bl-3xl transition-all duration-500 group-hover:from-gold-500/15" />

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-lg shadow-navy-950/30 group-hover:shadow-gold-500/30">
                <card.icon size={24} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display font-semibold text-xl text-navy-950 mb-3 tracking-wide">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
