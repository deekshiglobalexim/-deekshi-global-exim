import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      {/* BG accents */}
      <div className="absolute inset-0 dots-bg opacity-25" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-2xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
          Ready to Source Premium <span className="gold-text">Indian Products</span>?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Get competitive pricing, product samples, and full compliance documentation for your next shipment.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105"
          >
            Request Quotation
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-500/60 text-gold-300 font-semibold text-base rounded-xl hover:bg-gold-500/15 hover:border-gold-400 transition-all duration-300 hover:shadow-gold-glow"
          >
            View Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
