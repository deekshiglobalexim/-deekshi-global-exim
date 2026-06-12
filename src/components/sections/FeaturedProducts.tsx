'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    num: '01',
    name: 'Basmati Rice',
    color: 'bg-blue-600',
    desc: 'Highly preferred for aroma, long grains and taste. Widely used in biryani, mandi and daily meals.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=90',
    href: '/products#rice',
  },
  {
    num: '02',
    name: 'Indian Spices',
    color: 'bg-orange-500',
    desc: 'High demand for spices like turmeric, cumin, chilli, coriander, cardamom, black pepper and more.',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=90',
    href: '/products#spices',
  },
  {
    num: '03',
    name: 'Fresh Fruits',
    color: 'bg-pink-500',
    desc: 'Popular fruits include mango, pomegranate, grapes, banana, and more for international markets.',
    img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=90',
    href: '/products#fruits',
  },
  {
    num: '04',
    name: 'Fresh Vegetables',
    color: 'bg-green-600',
    desc: 'High imports of onion, potato, tomato, okra, green chilli, drumstick and other vegetables.',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=90',
    href: '/products#vegetables',
  },
  {
    num: '05',
    name: 'Maize & Grains',
    color: 'bg-purple-600',
    desc: 'Premium quality maize and grain varieties sourced from Indian farms for bulk export worldwide.',
    img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=90',
    href: '/products#rice',
  },
  {
    num: '06',
    name: 'Dehydrated Products',
    color: 'bg-amber-600',
    desc: 'Garlic powder, onion powder, and other dehydrated ingredients for food processing and seasoning.',
    img: 'https://images.unsplash.com/photo-1599909533601-aa23d3ac4845?w=800&q=90',
    href: '/products#dehydrated',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
}

export default function FeaturedProducts() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-4">
            Our Product Range
          </div>
          <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
            What We <span className="gold-text">Export</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Premium Indian agricultural products sourced directly from farms and delivered worldwide.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-10"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={cardVariants}>
              <Link
                href={category.href}
                className="block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                {/* Header with number and name */}
                <div className={`${category.color} px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3`}>
                  <span className="text-white font-bold text-base sm:text-lg">{category.num}</span>
                  <h3 className="text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wide">
                    {category.name}
                  </h3>
                </div>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={category.img}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={85}
                  />
                </div>

                {/* Description */}
                <div className="p-3 sm:p-4">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                    {category.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-950 text-white font-bold text-base rounded-xl hover:bg-navy-900 transition-all duration-300 shadow-lg">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
