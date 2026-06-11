import { Shield, Globe, Wheat, Truck, FileText, DollarSign } from 'lucide-react'

const cards = [
  {
    icon: Wheat,
    title: 'Rice Expertise & AP/Telangana Sourcing',
    desc: 'Deep expertise in premium rice varieties with established sourcing networks across Andhra Pradesh and Telangana - India\'s rice heartland. Direct farm partnerships ensure consistent Sona Masoori and Basmati quality.',
  },
  {
    icon: Truck,
    title: 'Bulk Supply for Container Loads',
    desc: 'Capable of fulfilling large-volume orders for both Full Container Load (FCL) and Less than Container Load (LCL) shipments. Reliable supply chain for consistent monthly dispatches.',
  },
  {
    icon: Shield,
    title: 'International Food Safety Compliance',
    desc: 'FSSAI Central Licensed with HACCP awareness protocols. All exports meet phytosanitary requirements and destination-specific food safety standards for worry-free imports.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Direct-Farm Pricing',
    desc: 'Bypass middlemen with our direct sourcing model from farmers and cooperatives. Pass on significant cost advantages while maintaining premium export-grade quality.',
  },
  {
    icon: FileText,
    title: 'Reliable Export Documentation',
    desc: 'Complete, accurate documentation for seamless customs clearance: Commercial Invoice, Packing List, Bill of Lading, Phytosanitary Certificate, Certificate of Origin, and fumigation reports.',
  },
  {
    icon: Globe,
    title: 'Multi-Market Experience',
    desc: 'Active exports to the Middle East, Southeast Asia, and Africa. We understand destination-specific regulations, labeling requirements, and packaging standards for each market.',
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
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            From rice fields in Andhra Pradesh and Telangana to your warehouse - we deliver premium Indian agricultural products with full compliance, competitive pricing, and reliable logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title}
              className="relative card-premium shadow-premium-lg p-8 rounded-2xl border border-gray-200 group overflow-hidden transition-premium hover:shadow-gold-glow hover:border-gold-500/30">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-gold-500/8 to-transparent rounded-bl-3xl transition-all duration-500 group-hover:from-gold-500/15" />

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
