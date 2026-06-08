'use client'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'United States', 'United Kingdom', 'Germany', 'France', 'Netherlands',
  'Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam',
  'South Africa', 'Kenya', 'Nigeria', 'Egypt', 'Ethiopia',
  'Australia', 'New Zealand', 'Canada', 'Japan', 'China', 'South Korea',
  'Other',
]

const products = [
  'Fresh Mangoes', 'Fresh Bananas', 'Fresh Papaya', 'Fresh Grapes', 'Fresh Pomegranate',
  'Onion', 'Potato', 'Tomato', 'Green Chilli', 'Okra',
  'Basmati Rice', 'Non-Basmati Rice',
  'Red Chilli', 'Turmeric', 'Black Pepper', 'Coriander', 'Cumin', 'Cardamom',
  'Mixed Products', 'Other',
]

type FormState = {
  name: string
  email: string
  phone: string
  country: string
  product: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', country: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.country) e.country = 'Please select your country'
    if (!form.product) e.product = 'Please select a product'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Please provide more detail (min 10 chars)'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const field = (key: keyof FormState, val: string) => {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }))
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h3 className="font-display font-bold text-3xl text-navy-950 mb-3 tracking-wide">Enquiry Received!</h3>
        <p className="text-gray-600 text-lg leading-relaxed">Thank you for reaching out. Our team will contact you within one business day.</p>
      </div>
    )
  }

  const inputCls = (key: keyof FormState) =>
    `w-full px-5 py-3.5 rounded-xl border text-sm transition-all outline-none focus-ring-premium ${
      errors[key]
        ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20'
        : 'border-gray-300 bg-white/80 backdrop-blur focus:border-gold-500 focus:bg-white focus:shadow-lg focus:shadow-gold-500/20'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Full Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Your full name" value={form.name}
            onChange={e => field('name', e.target.value)} className={inputCls('name')} />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Email Address <span className="text-red-500">*</span></label>
          <input type="email" placeholder="your@email.com" value={form.email}
            onChange={e => field('email', e.target.value)} className={inputCls('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Phone Number <span className="text-red-500">*</span></label>
          <input type="tel" placeholder="+1 234 567 8900" value={form.phone}
            onChange={e => field('phone', e.target.value)} className={inputCls('phone')} />
          {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Country <span className="text-red-500">*</span></label>
          <select value={form.country} onChange={e => field('country', e.target.value)} className={inputCls('country')}>
            <option value="">Select your country</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.country}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Product Requirement <span className="text-red-500">*</span></label>
        <select value={form.product} onChange={e => field('product', e.target.value)} className={inputCls('product')}>
          <option value="">Select a product</option>
          {products.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        {errors.product && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.product}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-950 mb-2 tracking-wide">Message <span className="text-red-500">*</span></label>
        <textarea rows={6} placeholder="Please describe your requirement — quantity, packaging preference, destination port, etc."
          value={form.message} onChange={e => field('message', e.target.value)}
          className={`${inputCls('message')} resize-none`} />
        {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-4 btn-premium shimmer-btn text-navy-950 font-bold text-base rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative z-10">
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-gray-600 text-xs text-center tracking-wide">
        We typically respond within 1 business day. Monday–Friday: 9 AM–6 PM IST.
      </p>
    </form>
  )
}
