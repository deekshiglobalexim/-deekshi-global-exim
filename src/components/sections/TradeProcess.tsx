const steps = [
  { num: '01', title: 'Product Sourcing', desc: 'Directly sourced from certified farms and reliable agricultural partners across India.', icon: '🌱' },
  { num: '02', title: 'Quality Inspection', desc: 'Multi-point quality checks to ensure every batch meets international food safety standards.', icon: '🔍' },
  { num: '03', title: 'Grading & Packaging', desc: 'Products are graded, sorted, and packed in export-grade packaging for freshness and transit protection.', icon: '📦' },
  { num: '04', title: 'Documentation', desc: 'Full compliance documentation — Phytosanitary, Certificate of Origin, commercial invoice, and more.', icon: '📋' },
  { num: '05', title: 'Customs Clearance', desc: 'Seamless ICEGATE and customs clearance handling by our experienced logistics team.', icon: '🛃' },
  { num: '06', title: 'International Shipping', desc: 'Sea, air or multimodal freight options with trusted shipping partners for global coverage.', icon: '🚢' },
  { num: '07', title: 'Delivery & Support', desc: 'On-time delivery to the buyer\'s destination with post-shipment support and communication.', icon: '✅' },
]

export default function TradeProcess() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Our Export Process
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            From Farm to <span className="gold-text">Global Destination</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            A transparent, step-by-step journey ensuring quality, compliance, and reliability at every stage.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className={`relative card-premium shadow-premium p-7 rounded-2xl border border-gray-200 group overflow-hidden transition-premium hover:shadow-premium-lg hover:border-gold-500/30 ${
              i === steps.length - 1 && steps.length % 4 !== 0 ? 'lg:col-span-2 lg:flex lg:items-start lg:gap-6' : ''
            }`}>
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`${i === steps.length - 1 ? 'lg:flex-shrink-0' : 'w-full'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{step.icon}</span>
                  <span className="font-display font-bold text-5xl text-gray-100 group-hover:text-gold-500/30 transition-colors duration-300">{step.num}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-3 tracking-wide group-hover:text-navy-900 transition-colors relative z-10">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">{step.desc}</p>
              
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full z-20 items-center justify-center text-navy-950 text-xs font-bold shadow-lg shadow-gold-500/30">→</div>
              )}

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
