import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Deekshi Global Exim for export enquiries. Call +91 9493928088 or email deekshiglobalexim@gmail.com.',
}

const faqs = [
  { q: 'What is the minimum order quantity for export?', a: 'Minimum order quantities vary by product. Generally, we work with container-load (FCL) and less-than-container-load (LCL) shipments. Contact us with your requirements for specific MOQ details.' },
  { q: 'Which countries do you export to?', a: 'We export to the Middle East, Southeast Asia, East Africa, Europe, and other global markets. Our APEDA and IEC certifications enable worldwide export.' },
  { q: 'Do you provide product samples?', a: 'Yes, we can arrange product samples for serious buyers. Sample costs and logistics would be discussed on a case-by-case basis.' },
  { q: 'What are the payment terms?', a: 'We typically work on Letter of Credit (LC), Telegraphic Transfer (TT), or other mutually agreed payment methods. Terms are negotiated based on order value and buyer history.' },
  { q: 'Can you handle all export documentation?', a: 'Absolutely. We handle complete export documentation including Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and all other required documents.' },
  { q: 'How long does shipping take?', a: 'Transit times depend on destination and shipping mode. Sea freight typically takes 10–30 days; air freight 3–7 days. We provide tracking details for all shipments.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-display font-bold text-5xl text-white mb-6">
            Let&apos;s <span className="gold-text">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a product requirement or export enquiry? Our team is ready to assist you with pricing, samples, and complete export solutions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-pad bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy-950 rounded-2xl p-7 text-white">
                <h2 className="font-display font-bold text-2xl mb-6">Contact Information</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:+919493928088" className="text-white hover:text-gold-400 font-medium transition-colors">+91 9493928088</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:deekshiglobalexim@gmail.com" className="text-white hover:text-gold-400 font-medium transition-colors break-all text-sm">deekshiglobalexim@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Address</div>
                      <p className="text-white font-medium">Warangal, Telangana, India — 506001</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-7 pt-7 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-gold-500" />
                    <h3 className="text-gold-400 font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                      { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                      { day: 'Sunday', time: 'Closed' },
                    ].map(h => (
                      <div key={h.day} className="flex justify-between">
                        <span className="text-gray-400">{h.day}</span>
                        <span className={h.time === 'Closed' ? 'text-red-400' : 'text-white'}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="mt-7 pt-7 border-t border-white/10">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: '#', label: 'Facebook' },
                      { icon: Instagram, href: '#', label: 'Instagram' },
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a key={label} href={href} aria-label={label}
                        className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 aspect-video flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121614.50044219082!2d79.47456!3d17.97740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334e64ed3eb7f5%3A0x606f4de7a1d3d5c!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Warangal, Telangana, India"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display font-bold text-3xl text-navy-950 mb-2">Send Us an Enquiry</h2>
                <p className="text-gray-600 text-sm mb-8">Fill in your details and we&apos;ll get back to you within one business day.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-navy-950 mb-4">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-100 bg-off-white overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-navy-950 hover:text-gold-600 transition-colors">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-open:text-gold-500 group-open:border-gold-500 transition-all">
                    <svg className="w-3 h-3 group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 12 12">
                      <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
