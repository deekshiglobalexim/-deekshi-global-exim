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
import PriorityExportProducts from '@/components/sections/PriorityExportProducts'

export const metadata: Metadata = {
  title: 'Deekshi Global Exim | Trusted Agricultural Exporter from India',
  description: 'India\'s leading rice exporter specializing in Sona Masoori, Basmati & Non-Basmati rice, along with premium fruits, vegetables & spices. IEC registered, APEDA certified for international trade.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <PriorityExportProducts />
      <WhyChooseUs />
      <FeaturedProducts />
      <CertificationsPreview />
      <TradeProcess />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
