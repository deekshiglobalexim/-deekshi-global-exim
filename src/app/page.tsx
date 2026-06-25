import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import AboutPreview from '@/components/sections/AboutPreview'
import StatsSection from '@/components/sections/StatsSection'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import ExportProcess from '@/components/sections/ExportProcess'
import ExportValues from '@/components/sections/ExportValues'
import CertificationsPreview from '@/components/sections/CertificationsPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import GovCertifications from '@/components/sections/GovCertifications'
import InternationalMarkets from '@/components/sections/InternationalMarkets'
import InquiryForm from '@/components/sections/InquiryForm'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Deekshi Global Exim | Premium Indian Agricultural Exports',
  description: 'Certified Indian exporter of premium rice, fruits, vegetables, spices, and dehydrated products. IEC certified, APEDA registered, FSSAI licensed for international trade.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <StatsSection />
      <FeaturedProducts />
      <ExportProcess />
      <ExportValues />
      <WhyChooseUs />
      <GovCertifications />
      <InternationalMarkets />
      <CertificationsPreview />
      <InquiryForm />
      <CtaBanner />
    </>
  )
}
