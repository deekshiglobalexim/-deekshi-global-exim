import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import CertificationsPreview from '@/components/sections/CertificationsPreview'
import TradeProcess from '@/components/sections/TradeProcess'
import Testimonials from '@/components/sections/Testimonials'
import CtaBanner from '@/components/sections/CtaBanner'
import StatsSection from '@/components/sections/StatsSection'

export const metadata: Metadata = {
  title: 'Deekshi Global Exim | Trusted Agricultural Exporter from India',
  description: 'Premium exporter of fruits, vegetables, rice & spices from India. APEDA certified, IEC registered. Contact us for export enquiries.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <CertificationsPreview />
      <TradeProcess />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
