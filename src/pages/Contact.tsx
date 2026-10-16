import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MessageCircle, Building2, CheckCircle2, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import { offices } from '../data/team'

const roleOptions = ['Owner / Director', 'Principal / Campus Head', 'Administrator', 'Teacher', 'Finance team', 'Partner / Reseller', 'Other']
const studentOptions = ['Under 100', '100–300', '301–700', '701–1,200', 'More than 1,200', 'Not applicable']
const interestOptions = ['Personalised demonstration', 'Starter plan', 'Growth plan', 'Enterprise / multi-campus', 'Partnership opportunity', 'General enquiry']

const checklist = ['A walkthrough focused on your needs', 'Answers about modules, plans and setup', 'A clear next step, without the guesswork']

export default function Contact() {
  const [params] = useSearchParams()
  const plan = params.get('plan')
  const isPartnerIntent = params.get('intent') === 'partner'
  const module_ = params.get('module')
  const role = params.get('role')

  const initialInterest = isPartnerIntent
    ? 'Partnership opportunity'
    : plan
      ? (plan === 'Enterprise' ? 'Enterprise / multi-campus' : `${plan} plan`)
      : ''
  const initialMessage = module_ ? `I would like to explore ${module_}.` : role ? `I'd like to see this for ${role}.` : ''

  const [form, setForm] = useState({
    name: '', phone: '', school: '',
    role: isPartnerIntent ? 'Partner / Reseller' : '',
    students: isPartnerIntent ? 'Not applicable' : '',
    interest: initialInterest,
    message: initialMessage,
    consent: false,
  })
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    // Track this lead in the CRM pipeline too, not just via WhatsApp - the
    // WhatsApp handoff below is a client-side redirect only, nothing is
    // otherwise sent anywhere, so without this the lead would never reach
    // our pipeline at all.
    fetch(`${import.meta.env.VITE_API_URL || 'https://api.eldermin.com'}/api/v1/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'contact_form',
        schoolName: form.school,
        adminName: form.name,
        adminPhone: form.phone,
        inquiryType: form.interest || 'General enquiry',
        message: form.message,
        role: form.role,
        studentNumbers: form.students,
      }),
    }).catch(() => {})

    const text = `Assalamu Alaikum, I would like to enquire about Eldermin.\n\nName: ${form.name}\nSchool: ${form.school}\nRole: ${form.role}\nPhone: ${form.phone}\nStudents: ${form.students}\nInterest: ${form.interest}\nPriority: ${form.message || 'To discuss during our conversation'}`
    window.location.href = `https://wa.me/923002517280?text=${encodeURIComponent(text)}`
  }

  return (
    <div>
      <PageHero
        crumb={isPartnerIntent ? 'Explore a partnership' : "Let's talk"}
        eyebrow={isPartnerIntent ? 'Explore a partnership' : "Let's talk"}
        title={<>Show us your school.<br />We'll show you what's possible.</>}
        lead="Tell us what you want to improve. We will help you explore the right workflows and agree the next step."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr,1.3fr] gap-14">
          <div>
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">A useful first conversation</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-deep mt-3 mb-6 leading-tight">Your school.<br />Your priorities.</h2>
            <ul className="space-y-2.5 mb-8">
              {checklist.map(c => (
                <li key={c} className="flex items-start gap-2.5 text-ink text-sm"><CheckCircle2 size={16} className="text-green mt-0.5 shrink-0" /> {c}</li>
              ))}
            </ul>

            <div className="space-y-5 pb-8 border-b border-line mb-8">
              <a href="mailto:support@eldermin.com" className="flex items-start gap-3 group">
                <Mail size={18} className="text-navy mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-navy-deep group-hover:text-gold-dark transition-colors">Email our team</div>
                  <div className="text-muted text-sm">support@eldermin.com</div>
                </div>
              </a>
              <a href="tel:+923011167555" className="flex items-start gap-3 group">
                <Phone size={18} className="text-navy mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-navy-deep group-hover:text-gold-dark transition-colors">Call our head office</div>
                  <div className="text-muted text-sm">+92 301 1167555</div>
                </div>
              </a>
              <a href="https://wa.me/923002517280" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MessageCircle size={18} className="text-navy mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-navy-deep group-hover:text-gold-dark transition-colors">WhatsApp sales enquiries</div>
                  <div className="text-muted text-sm">+92 300 2517280 ↗</div>
                </div>
              </a>
            </div>

            <p className="text-xs text-muted">
              Already using Eldermin?{' '}
              <a href="mailto:support@eldermin.com" className="underline hover:text-navy">Contact support</a> or{' '}
              <a href="https://app.eldermin.com/login" target="_blank" rel="noopener noreferrer" className="underline hover:text-navy">sign in to your school</a>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-paper rounded-card p-8 border border-line">
            <h3 className="text-xl font-display font-bold text-navy-deep mb-1">{isPartnerIntent ? 'Explore a partnership' : 'Arrange a school demonstration'}</h3>
            <p className="text-muted text-sm mb-5">A few details will help us make it relevant.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Your name *</label>
                <input required maxLength={100} autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Phone / WhatsApp *</label>
                <input required type="tel" minLength={7} maxLength={25} autoComplete="tel" placeholder="+92…" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">School / organisation *</label>
              <input required maxLength={160} autoComplete="organization" value={form.school} onChange={e => setForm({ ...form, school: e.target.value })}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Your role *</label>
                <select required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white">
                  <option value="">Select your role</option>
                  {roleOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Student numbers *</label>
                <select required value={form.students} onChange={e => setForm({ ...form, students: e.target.value })}
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white">
                  <option value="">Select school size</option>
                  {studentOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">What would you like to discuss?</label>
              <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white">
                <option value="">Select…</option>
                {interestOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Your main priority (optional)</label>
              <textarea rows={3} maxLength={1500} placeholder="For example: fee reporting, teacher workflows or connecting campuses…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white resize-none" />
            </div>
            <label className="flex items-start gap-2.5 text-sm text-muted">
              <input required type="checkbox" checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })} className="mt-0.5" />
              I agree that Eldermin may contact me about this enquiry by phone or WhatsApp.
            </label>
            <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-deep font-display font-semibold py-3 rounded-lg transition-colors disabled:opacity-60">
              Continue to WhatsApp <Send size={16} />
            </button>
            <p className="text-xs text-muted text-center">Your details prepare a WhatsApp message. Review it and press Send in WhatsApp to contact our team. Nothing is submitted automatically.</p>
          </form>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">Our locations</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Connected locally. Thinking globally.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {offices.map(o => (
              <div key={o.city} className="bg-white border border-line rounded-xl p-6">
                <Building2 size={20} className="text-navy mb-4" strokeWidth={1.75} />
                <span className="font-mono text-[10px] text-gold-dark uppercase tracking-widest">{o.eyebrow}</span>
                <h3 className="font-display font-semibold text-navy-deep mt-1.5 mb-1.5">{o.city}</h3>
                {o.lines.map(l => <p key={l} className="text-muted text-sm leading-relaxed">{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
