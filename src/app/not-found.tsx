import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display font-bold text-9xl gold-text mb-4">404</div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 shimmer-btn text-navy-950 font-bold rounded-xl">
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}
