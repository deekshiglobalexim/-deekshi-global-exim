import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our premium export-quality Indian agricultural products: Fresh Fruits, Vegetables, Basmati Rice, and Indian Spices.',
}

const categories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    emoji: '🥭',
    desc: "Premium tropical and seasonal fruits sourced from India's finest orchards.",
    products: [
      {
        name: 'Mango',
        desc: 'Alphonso, Kesar, Banganapalli — world-renowned Indian mango varieties.',
        img: 'https://source.unsplash.com/featured/1200x900/?mango',
      },
      {
        name: 'Banana',
        desc: 'Premium export-quality bananas packed for freshness.',
        img: 'https://source.unsplash.com/featured/1200x900/?banana',
      },
      {
        name: 'Papaya',
        desc: 'Sweet and nutritious papayas with vibrant orange flesh.',
        img: 'https://source.unsplash.com/featured/1200x900/?papaya',
      },
      {
        name: 'Grapes',
        desc: 'Seedless and seeded Indian grape varieties.',
        img: 'https://source.unsplash.com/featured/1200x900/?grapes',
      },
      {
        name: 'Pomegranate',
        desc: 'Premium Bhagwa and Ganesh pomegranates.',
        img: 'https://source.unsplash.com/featured/1200x900/?pomegranate',
      },
      {
        name: 'Seasonal Fruits',
        desc: 'Wide range of seasonal export-quality fruits.',
        img: 'https://source.unsplash.com/featured/1200x900/?fresh-fruits',
      },
    ],
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    emoji: '🥦',
    desc: 'Farm-fresh vegetables selected for export quality.',
    products: [
      {
        name: 'Onion',
        desc: 'Premium red and white onions with long shelf life.',
        img: 'https://source.unsplash.com/featured/1200x900/?onion',
      },
      {
        name: 'Potato',
        desc: 'Export-grade potatoes from India.',
        img: 'https://source.unsplash.com/featured/1200x900/?potato',
      },
      {
        name: 'Tomato',
        desc: 'Firm export-quality tomatoes.',
        img: 'https://source.unsplash.com/featured/1200x900/?tomato',
      },
      {
        name: 'Green Chilli',
        desc: 'Fresh Indian green chillies.',
        img: 'https://source.unsplash.com/featured/1200x900/?green-chilli',
      },
      {
        name: 'Okra',
        desc: 'Tender export-grade okra.',
        img: 'https://source.unsplash.com/featured/1200x900/?okra',
      },
      {
        name: 'Seasonal Vegetables',
        desc: 'Wide range of seasonal vegetables.',
        img: 'https://source.unsplash.com/featured/1200x900/?vegetables',
      },
    ],
  },
  {
    id: 'rice',
    name: 'Rice',
    emoji: '🌾',
    desc: 'Premium Indian rice varieties with world-class quality.',
    products: [
      {
        name: 'Basmati Rice',
        desc: 'Long-grain aromatic basmati rice.',
        img: 'https://source.unsplash.com/featured/1200x900/?basmati-rice',
      },
      {
        name: 'Non-Basmati Rice',
        desc: 'Sona Masoori, IR-64 and more.',
        img: 'https://source.unsplash.com/featured/1200x900/?rice',
      },
      {
        name: 'Premium Export Rice',
        desc: 'Custom export rice solutions.',
        img: 'https://source.unsplash.com/featured/1200x900/?rice-field',
      },
    ],
  },
  {
    id: 'spices',
    name: 'Indian Spices',
    emoji: '🌶️',
    desc: 'Authentic Indian spices trusted worldwide.',
    products: [
      {
        name: 'Red Chilli',
        desc: 'Premium Indian red chillies.',
        img: 'https://source.unsplash.com/featured/1200x900/?red-chilli',
      },
      {
        name: 'Turmeric',
        desc: 'High-curcumin export-quality turmeric.',
        img: 'https://source.unsplash.com/featured/1200x900/?turmeric',
      },
      {
        name: 'Black Pepper',
        desc: 'Kerala Malabar black pepper.',
        img: 'https://source.unsplash.com/featured/1200x900/?black-pepper',
      },
      {
        name: 'Coriander',
        desc: 'Premium coriander seeds and powder.',
        img: 'https://source.unsplash.com/featured/1200x900/?coriander',
      },
      {
        name: 'Cumin',
        desc: 'Premium Indian cumin.',
        img: 'https://source.unsplash.com/featured/1200x900/?cumin',
      },
      {
        name: 'Cardamom',
        desc: 'Premium green and black cardamom.',
        img: 'https://source.unsplash.com/featured/1200x900/?cardamom',
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">
            Our Products
          </p>

          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Premium <span className="gold-text">Agricultural Exports</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            High-quality fruits, vegetables, rice, and spices sourced from
            trusted Indian farms and processed to international export
            standards.
          </p>
        </div>
      </section>

      <div className="sticky top-[72px] bg-white border-b z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gold-500 hover:text-navy-950 transition whitespace-nowrap font-medium"
              >
                {cat.emoji} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {categories.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${
            index % 2 === 0 ? 'bg-off-white' : 'bg-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{cat.emoji}</span>

                  <h2 className="text-3xl font-display font-bold text-navy-950">
                    {cat.name}
                  </h2>
                </div>

                <p className="text-gray-600 max-w-2xl">{cat.desc}</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-white rounded-xl font-semibold hover:bg-navy-900"
              >
                Enquire About {cat.name}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                  <img
  src={product.img}
  alt={product.name}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-gold-500 text-navy-950 rounded-full text-xs font-bold">
                        <Award size={12} />
                        Export Grade
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-navy-950 mb-3">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                      {product.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 rounded-xl font-bold transition"
                    >
                      Request Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Need a <span className="gold-text">Custom Requirement?</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Contact us for bulk orders, customized packaging, and export
            inquiries.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 rounded-xl font-bold hover:scale-105 transition"
          >
            Get Custom Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
