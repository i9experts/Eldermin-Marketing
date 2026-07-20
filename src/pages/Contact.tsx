import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Send } from 'lucide-react'

const inquiryTypes = ['General question', 'Sales / pricing', 'Partnership', 'Support (existing school)']

export default function Contact() {
  const [params] = useSearchParams()
  const initialType = params.get('type') === 'partner' ? 'Partnership' : 'General question'
  const [form, setForm] = useState({ name: '', email: '', school: '', type: initialType, message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.type}] Message from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSchool/Organization: ${form.school}\nInquiry type: ${form.type}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@eldermin.com?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <section className="bg-navy-deep text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs text-amber uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-5 tracking-tight">Get in touch</h1>
          <p className="text-navy-pale/80 text-xl">Question about pricing, a demo, or partnering with us — send it over.</p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr,1.3fr] gap-14">
        <div>
          <h2 className="text-xl font-display font-semibold text-navy-deep mb-6">Reach us directly</h2>
          <div className="space-y-5">
            <a href="mailto:hello@eldermin.com" className="flex items-start gap-3 group">
              <Mail size={18} className="text-navy mt-0.5 shrink-0" />
              <div>
                <div className="font-medium text-navy-deep group-hover:text-amber-dark transition-colors">hello@eldermin.com</div>
                <div className="text-slate-light text-sm">We reply within 1-2 business days</div>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-navy mt-0.5 shrink-0" />
              <div>
                <div className="font-medium text-navy-deep">Pakistan</div>
                <div className="text-slate-light text-sm">Serving schools nationwide</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-mist rounded-xl p-8 border border-navy/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your name</label>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">School / organization</label>
            <input value={form.school} onChange={e => setForm({ ...form, school: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 bg-white" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">What's this about?</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 bg-white">
              {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 bg-white resize-none" />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold py-3 rounded-lg transition-colors">
            Send message <Send size={16} />
          </button>
          <p className="text-xs text-slate-light text-center">This opens your email app with your message ready to send to hello@eldermin.com.</p>
        </form>
      </section>
    </div>
  )
}
