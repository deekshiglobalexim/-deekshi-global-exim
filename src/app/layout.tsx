import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import PreLoader from '@/components/PreLoader'

export const metadata: Metadata = {
  title: {
    default: 'Deekshi Global Exim | Premium Agricultural Exporter from India',
    template: '%s | Deekshi Global Exim',
  },
  description: 'Deekshi Global Exim is a certified Import & Export company from Warangal, India, specializing in premium agricultural products — Fruits, Vegetables, Rice, and Spices for global markets.',
  keywords: [
    'Import Export Company India',
    'Agricultural Exporter India',
    'Rice Exporter India',
    'Spices Exporter India',
    'Fruit Exporter India',
    'Vegetable Exporter India',
    'APEDA Certified Exporter',
    'Deekshi Global Exim',
    'Export from Warangal',
    'Indian Basmati Rice Exporter',
    'Indian Spices Export',
  ],
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180' },
    ],
    shortcut: '/logo.png',
  },
  authors: [{ name: 'Deekshi Global Exim' }],
  creator: 'Deekshi Global Exim',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://deekshiglobalexim.com',
    title: 'Deekshi Global Exim | Premium Agricultural Exporter from India',
    description: 'Connecting Indian Agricultural Excellence to Global Markets. APEDA Certified. IEC Registered.',
    siteName: 'Deekshi Global Exim',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'Deekshi Global Exim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deekshi Global Exim | Premium Agricultural Exporter',
    description: 'Certified exporter of premium Indian fruits, vegetables, rice & spices to global markets.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <PreLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  )
}
