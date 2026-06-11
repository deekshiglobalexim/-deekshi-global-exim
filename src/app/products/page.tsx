import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  PackageCheck,
  Ship,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products | Deekshi Global Exim',
  description:
    'Premium Indian rice, fresh fruits, vegetables, spices, and dehydrated products for international bulk buyers.',
}

type Product = {
  name: string
  img: string
  desc: string
}

type Category = {
  id: string
  name: string
  eyebrow: string
  desc: string
  products: Product[]
}

const categories: Category[] = [
  {
    id: 'rice',
    name: 'Rice',
    eyebrow: 'Highest Priority Export Category',
    desc: 'Premium Indian rice varieties sourced through reliable supply channels and prepared for bulk international trade.',
    products: [
      {
        name: 'Sona Masoori Rice',
        img: '/products/sona-masoori.jpg',
        desc: 'Lightweight, aromatic Sona Masoori rice supplied in bulk with export quality selection, dependable sourcing, and packaging aligned for global markets.',
      },
      {
        name: 'Basmati Rice',
        img: '/products/basmati.jpg',
        desc: 'Long-grain Basmati rice known for aroma, purity, and grain consistency, supplied to international buyers under strict export standards.',
      },
      {
        name: 'Non-Basmati Rice',
        img: '/products/non-basmati.jpg',
        desc: 'Reliable non-Basmati rice supply for wholesale importers, distributors, and food service buyers seeking consistent Indian origin quality.',
      },
    ],
  },
  {
    id: 'fresh-fruits',
    name: 'Fresh Fruits',
    eyebrow: 'Premium Farm Fresh Supply',
    desc: 'Carefully selected Indian fruits handled for freshness, shelf life, and international buyer expectations.',
    products: [
      {
        name: 'Mango',
        img: '/products/mango.jpg',
        desc: 'Export quality Indian mangoes sourced from trusted growing regions and supplied in bulk for retail, wholesale, and global fresh produce markets.',
      },
      {
        name: 'Pomegranate',
        img: '/products/pomegranate.jpg',
        desc: 'Premium pomegranates selected for color, firmness, and aril quality, with reliable sourcing for international fresh fruit importers.',
      },
      {
        name: 'Grapes',
        img: '/products/grapes.jpg',
        desc: 'Fresh Indian grapes supplied with attention to bunch quality, handling standards, and buyer-ready bulk export requirements.',
      },
      {
        name: 'Banana',
        img: '/products/banana.jpg',
        desc: 'Bulk banana supply from dependable Indian farms, packed for freshness and aligned with international produce trade standards.',
      },
    ],
  },
  {
    id: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    eyebrow: 'Reliable Daily Trade Products',
    desc: 'Fresh vegetables procured through stable grower networks for bulk buyers and overseas distribution channels.',
    products: [
      {
        name: 'Onion',
        img: '/products/onion.jpg',
        desc: 'Export grade onions with strong shelf life, consistent sizing, and dependable bulk supply for international wholesale markets.',
      },
      {
        name: 'Tomato',
        img: '/products/tomato.jpg',
        desc: 'Fresh tomatoes selected for firmness and quality, sourced for bulk export programs and global food supply chains.',
      },
      {
        name: 'Potato',
        img: '/products/potato.jpg',
        desc: 'Indian potatoes supplied in bulk with quality sorting, reliable sourcing, and packaging support for international buyers.',
      },
      {
        name: 'Green Chilli',
        img: '/products/green-chilli.jpg',
        desc: 'Fresh green chillies selected for heat, color, and freshness, prepared for export markets requiring consistent Indian produce.',
      },
    ],
  },
  {
    id: 'indian-spices',
    name: 'Indian Spices',
    eyebrow: 'Authentic Indian Origin',
    desc: 'Selected spices from India supplied for processors, distributors, and importers seeking consistent quality and traceable sourcing.',
    products: [
      {
        name: 'Red Chilli',
        img: '/products/red-chilli.jpg',
        desc: 'Indian red chilli supplied for global spice buyers with focus on color, pungency, export quality, and bulk shipment readiness.',
      },
      {
        name: 'Turmeric',
        img: '/products/turmeric.jpg',
        desc: 'Export quality turmeric with dependable sourcing and quality selection for international spice, food, and ingredient markets.',
      },
      {
        name: 'Black Pepper',
        img: '/products/black-pepper.jpg',
        desc: 'Premium black pepper sourced for aroma, bold flavor, and consistent quality, suitable for bulk export and global spice distribution.',
      },
      {
        name: 'Coriander',
        img: '/products/coriander.jpg',
        desc: 'Coriander supplied for international buyers seeking clean, aromatic Indian spice products with reliable bulk availability.',
      },
    ],
  },
  {
    id: 'dehydrated-products',
    name: 'Dehydrated Products',
    eyebrow: 'Shelf Stable Ingredient Supply',
    desc: 'Dehydrated ingredients prepared for longer shelf life, convenient logistics, and international food manufacturing requirements.',
    products: [
      {
        name: 'Garlic Powder',
        img: '/products/garlic-powder.jpg',
        desc: 'Fine garlic powder supplied for food processors, seasoning brands, and importers requiring export quality, shelf stable bulk ingredients.',
      },
      {
        name: 'Onion Powder',
        img: '/products/onion-powder.jpg',
        desc: 'Dehydrated onion powder with consistent flavor and texture, sourced for global ingredient markets and bulk industrial supply.',
      },
    ],
  },
]

const exportHighlights = [
  'Export Quality Selection',
  'Bulk Supply Capability',
  'International Buyer Support',
  'Reliable Indian Sourcing',
]

export default function ProductsPage() {
  return (
    <main className="bg-off-white">
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-off-white to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-gold-300">
                Products Portfolio
              </p>

              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Premium Indian Products for{' '}
                <span className="gold-text">Global Importers</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
                Deekshi Global Exim supplies rice, fresh produce, spices, and
                dehydrated products with export-focused sourcing, bulk order
                coordination, and buyer-ready quality standards for global
                markets.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {exportHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold-300/30 bg-white/10 p-6 shadow-premium-lg backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['5', 'Product Categories'],
                  ['17', 'Export Products'],
                  ['100%', 'Local Image Paths'],
                  ['B2B', 'Bulk Supply Focus'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-navy-900/70 p-5"
                  >
                    <p className="font-display text-3xl font-bold text-gold-300">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-gray-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[72px] z-40 border-b border-navy-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-3 overflow-x-auto py-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="whitespace-nowrap rounded-full border border-navy-950/10 bg-white px-5 py-2 text-sm font-bold text-navy-950 shadow-sm transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {categories.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-36 py-16 sm:py-20 ${
            index % 2 === 0 ? 'bg-off-white' : 'bg-white'
          }`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold-600">
                  {cat.eyebrow}
                </p>
                <h2 className="font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                  {cat.name}
                </h2>
                <div className="gold-divider mt-4" />
                <p className="mt-5 text-base leading-8 text-gray-600">
                  {cat.desc}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-navy-950 px-6 py-3 text-sm font-bold text-white shadow-premium transition hover:-translate-y-1 hover:bg-navy-900"
              >
                Enquire About {cat.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {cat.products.map((product) => (
                <article
                  key={product.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-premium transition duration-500 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-premium-lg"
                >
                  <div className="relative h-72 overflow-hidden bg-navy-950 sm:h-80">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-transparent" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-gold-glow">
                        <Award className="h-3.5 w-3.5" />
                        Export Grade
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wide text-navy-950 shadow-lg">
                        <PackageCheck className="h-3.5 w-3.5" />
                        Bulk Supply
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
                        Deekshi Global Exim
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-bold text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-7 text-gray-600">
                      {product.desc}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5 text-xs font-bold text-navy-950">
                      <span className="flex items-center gap-2">
                        <Globe2 className="h-4 w-4 text-gold-600" />
                        Global Markets
                      </span>
                      <span className="flex items-center gap-2">
                        <Ship className="h-4 w-4 text-gold-600" />
                        Export Ready
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-black text-white shadow-gold-glow transition hover:-translate-y-1 hover:bg-gold-600"
                    >
                      Request Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold-300">
            International Bulk Enquiries
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Source Indian agricultural products with confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300">
            Share your product requirement, destination market, packaging
            preference, and expected quantity. Our team will coordinate a
            professional export quotation for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-gold-glow transition hover:-translate-y-1 hover:bg-gold-600"
          >
            Get Bulk Export Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
