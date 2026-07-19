import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: '01', title: 'Tell us about your school', desc: 'Institution profile, campuses, academic year, grades and sections.' },
  { n: '02', title: 'Choose your modules', desc: 'Start with what you need — Eldermin flags dependencies so nothing breaks later.' },
  { n: '03', title: 'Invite your team', desc: 'Principal, accountant, HR, teachers, and parents get role-based access from day one.' },
  { n: '04', title: 'Go live', desc: 'Your dashboard is ready — real data, not a demo sandbox.' },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Getting started</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3">Onboarding is a guided setup, not a support ticket</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map(s => (
            <div key={s.n}>
              <div className="font-mono text-2xl text-amber font-semibold mb-2">{s.n}</div>
              <h3 className="font-display font-semibold text-navy-deep mb-1.5">{s.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/signup" className="inline-flex items-center gap-2 text-navy-deep font-semibold hover:text-amber-dark transition-colors">
          Start your setup <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
