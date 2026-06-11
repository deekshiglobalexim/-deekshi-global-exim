import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight, ShieldCheck, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our premium export-quality Indian agricultural products: Rice (Sona Masoori, Basmati), Fresh Fruits, Vegetables, and Indian Spices. Bulk supply available.',
}

const categories = [
  {
    id: 'rice',
    name: 'Rice',
    emoji: '🌾',
    desc: 'Our #1 export product. Premium Indian rice varieties sourced from Andhra Pradesh, Telangana, and Punjab. Available in bulk supply with custom packaging for international buyers.',
    products: [
      {
        name: 'Sona Masoori Rice (AP & Telangana)',
        desc: 'Premium Sona Masoori rice sourced directly from the fertile fields of Andhra Pradesh and Telangana. Light, aromatic, and low in starch. Ideal for daily consumption markets. Available in 5kg to 50kg export packing.',
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=90',
      },
      {
        name: 'Basmati Rice',
        desc: 'Long-grain aromatic Basmati rice aged to perfection. Superior cooking quality with excellent elongation. Meets all international food safety standards. Bulk supply available for wholesale importers.',
        img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=90',
      },
      {
        name: 'Non-Basmati Rice (IR-64, Parboiled)',
        desc: 'High-quality Non-Basmati varieties including IR-64, Parboiled, and Broken rice. Competitively priced for bulk international orders. Consistent quality with every shipment.',
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=90',
      },
    ],
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    emoji: '🥭',
    desc: "Premium tropical and seasonal fruits sourced from India's finest orchards. Export-quality with cold chain management for reliable international delivery.",
    products: [
      {
        name: 'Mango',
        desc: 'Alphonso, Kesar, Banganapalli, and Totapuri varieties from certified orchards. Packed at peak ripeness with hot water treatment for phytosanitary compliance. Bulk supply available for international fruit importers.',
        img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=90',
      },
      {
        name: 'Banana',
        desc: 'Premium Cavendish and Robusta bananas harvested at optimal ripeness stage for long-distance export. Consistent sizing and quality. Available year-round in bulk quantities.',
        img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=90',
      },
      {
        name: 'Papaya',
        desc: 'Sweet and nutritious Red Lady papayas with vibrant orange flesh. Export-quality with extended shelf life. Available in customized packaging for retail and wholesale markets.',
        img: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=600&q=90',
      },
      {
        name: 'Grapes',
        desc: 'Premium Thompson Seedless and Sharad Seedless grapes from Nashik vineyards. Pre-cooled and packed for maximum freshness during international transit.',
        img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=90',
      },
      {
        name: 'Pomegranate',
        desc: 'Premium Bhagwa pomegranates with deep red arils and high juice content. Sorted by size and quality grade. Bulk export supply with consistent availability.',
        img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=90',
      },
      {
        name: 'Seasonal Fruits',
        desc: 'Wide range of seasonal export-quality fruits including guava, watermelon, and citrus. Contact us for current availability and bulk pricing.',
        img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=90',
      },
    ],
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    emoji: '🥦',
    desc: 'Farm-fresh vegetables selected for export quality. Rigorous quality control at every stage from harvest to delivery. Bulk supply for international markets.',
    products: [
      {
        name: 'Onion',
        desc: 'Premium red and white onions with extended shelf life and consistent sizing. Sourced from Maharashtra and Karnataka. Bulk supply available in mesh bags, jute bags, or customized packaging.',
        img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=90',
      },
      {
        name: 'Potato',
        desc: 'Export-grade potatoes with uniform size and minimal defects. Cold stored for year-round availability. Available in bulk quantities with competitive pricing for international buyers.',
        img: 'https://images.unsplash.com/photo-1518977676601-b53f82ber40?w=600&q=90',
      },
      {
        name: 'Tomato',
        desc: 'Firm export-quality tomatoes with excellent color and shelf life. Sorted and graded to international standards. Available in bulk supply with proper temperature-controlled logistics.',
        img: 'https://images.unsplash.com/photo-1546470427-0d62b9f43ce8?w=600&q=90',
      },
      {
        name: 'Green Chilli',
        desc: 'Fresh Indian green chillies with consistent pungency levels. Export-quality with proper cold chain handling. Available in bulk for food processing and retail markets.',
        img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=90',
      },
      {
        name: 'Okra (Lady Finger)',
        desc: 'Tender export-grade okra with uniform size and vibrant green color. Sorted and packed for international markets with maximum freshness retention.',
        img: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=600&q=90',
      },
      {
        name: 'Seasonal Vegetables',
        desc: 'Wide range of seasonal vegetables including drumstick, bitter gourd, and curry leaves. Contact us for current availability and export pricing.',
        img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=90',
      },
    ],
  },
  {
    id: 'spices',
    name: 'Indian Spices',
    emoji: '🌶️',
    desc: 'Authentic Indian spices trusted worldwide. Processed in FSSAI-certified facilities meeting international food safety standards. Bulk supply with certificates of analysis.',
    products: [
      {
        name: 'Red Chilli',
        desc: 'Premium Teja, Byadagi, and Kashmiri red chillies with intense color and high ASTA values. Available in whole, crushed, and powder forms. Bulk supply for spice importers worldwide.',
        img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&q=90',
      },
      {
        name: 'Turmeric',
        desc: 'High-curcumin Erode and Sangli turmeric. Available in finger, polished, and powder forms. Lab-tested with certificate of analysis for curcumin content. Bulk export supply available.',
        img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=90',
      },
      {
        name: 'Black Pepper',
        desc: 'Premium Malabar and Tellicherry black pepper from Kerala. Bold grade with high piperine content. Sorted, graded, and steam-sterilized for international food safety compliance.',
        img: 'https://images.unsplash.com/photo-1599909533601-aa539e4e2a7e?w=600&q=90',
      },
      {
        name: 'Garlic Powder',
        desc: 'Premium dehydrated garlic powder processed from select Indian garlic varieties. Consistent flavor and aroma. Available in bulk quantities meeting international food processing standards.',
        img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=90',
      },
      {
        name: 'Coriander',
        desc: 'Premium coriander seeds and powder from Rajasthan and Madhya Pradesh. Clean, well-dried, and sorted. Bulk supply available with consistent quality for international spice blenders.',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=90',
      },
      {
        name: 'Cumin',
        desc: 'Premium Indian cumin seeds from Gujarat and Rajasthan. High volatile oil content with intense aroma. Sorted and cleaned to international standards. Bulk export supply available.',
        img: 'https://images.unsplash.com/photo-1599909533601-aa539e4e2a7e?w=600&q=90',
      },
      {
        name: 'Cardamom',
        desc: 'Premium green cardamom from Kerala and Karnataka. Bold grade with intense aroma and flavor. Hand-picked and sorted for export quality. Available in bulk for international buyers.',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=90',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-6">
            <Package size={14} />
            Premium Export Products
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Premium <span className="gold-text">Rice & Agricultural Exports</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            India&apos;s finest rice varieties, fresh fruits, vegetables, and spices. Sourced from trusted farms, processed to international standards, and delivered in bulk worldwide. Rice is our #1 export product.
          </p>
        </div>
      </section>

      <div className="sticky top-[72px] bg-white border-b z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gold-500 hover:text-navy-950 transition whitespace-nowrap font-medium text-sm"
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

                  {cat.id === 'rice' && (
                    <span className="px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full">
                      #1 Export
                    </span>
                  )}
                </div>

                <p className="text-gray-600 max-w-2xl">{cat.desc}</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-white rounded-xl font-semibold hover:bg-navy-900 transition self-start"
              >
                Enquire About {cat.name}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-premium-lg border border-gray-100 hover:border-gold-500/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={90}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-gold-500 text-navy-950 rounded-full text-xs font-bold shadow-lg">
                        <Award size={12} />
                        Export Grade
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur text-navy-950 rounded-full text-xs font-semibold">
                        <ShieldCheck size={10} className="text-gold-500" />
                        Bulk Supply Available
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-950 mb-3 font-display">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
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
            Contact us for bulk orders, customized packaging, private labeling, and export inquiries. We supply rice, fruits, vegetables, and spices to buyers worldwide.
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
