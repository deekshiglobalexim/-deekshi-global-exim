import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our premium export-quality Indian agricultural products: Rice (Sona Masoori, Basmati), Fresh Fruits, Vegetables, and Indian Spices. Bulk supply available.',
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
