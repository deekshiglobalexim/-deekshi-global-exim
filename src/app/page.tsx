import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import StatsSection from '@/components/sections/StatsSection'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import CertificationsPreview from '@/components/sections/CertificationsPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Deekshi Global Exim | Premium Indian Agricultural Exports',
  description: 'Certified Indian exporter of premium rice, fruits, vegetables, spices, and dehydrated products. IEC certified, APEDA registered, FSSAI licensed for international trade.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <FeaturedProducts />
      <CertificationsPreview />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
