import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Wrench, Megaphone } from 'lucide-react'

const partnerTypes = [
  { icon: Wrench, title: 'Implementation Partners', desc: 'Consultants and IT firms who set up, configure, and train schools on Eldermin — especially useful for multi-campus institutions and group setups.' },
  { icon: Megaphone, title: 'Referral Partners', desc: 'Education consultants, association networks, and individuals who introduce schools to Eldermin and earn for qualified referrals.' },
  { icon: Handshake, title: 'Technology Partners', desc: 'Payment gateways, SMS providers, and other education-tech tools that want to integrate with Eldermin\'s module ecosystem.' },
]

const steps = [
  { n: '01', title: 'Tell us about you', desc: 'Send a short note about your organization and how you\'d like to work with Eldermin.' },
  { n: '02', title: 'A real conversation', desc: 'We talk through fit, terms, and what makes sense for both sides — no fixed template, every partnership is discussed directly.' },
  { n: '03', title: 'Onboard together', desc: 'Access to training material, a direct line to our team, and everything you need to represent Eldermin well.' },
]

export default function Partners() {
  return (
    <div>
      <section className="bg-navy-deep text-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs text-amber uppercase tracking-widest">Partners</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight">Become an Eldermin partner</h1>
          <p className="text-navy-pale/80 text-xl leading-relaxed">
            We're early, and we're building our partner program the same way we build everything else — directly, with real conversations instead of a fixed one-size-fits-all tier sheet.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Ways to partner</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Three ways to work with us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {partnerTypes.map(p => (
            <div key={p.title} className="border border-navy/10 rounded-xl p-6">
              <p.icon size={22} className="text-navy mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-navy-deep mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">How it works</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Getting started is a conversation, not a form</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.n}>
                <div className="font-mono text-2xl text-amber font-semibold mb-2">{s.n}</div>
                <h3 className="font-display font-semibold text-navy-deep mb-1.5">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-deep mb-4 tracking-tight">Interested in partnering?</h2>
        <p className="text-slate text-lg mb-8">Reach out and tell us a bit about your organization — we'll take it from there.</p>
        <Link to="/contact?type=partner" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-white font-display font-semibold px-8 py-3.5 rounded-lg transition-colors">
          Contact our team <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
