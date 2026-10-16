import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: '01', title: 'Tell us about your school', desc: 'Share your campuses, student numbers and the challenges you want to solve.' },
  { n: '02', title: 'Explore the right workflows', desc: 'Walk through the modules your team needs and agree your plan.' },
  { n: '03', title: 'Set up and invite your team', desc: 'Configure your institution, academic year and role-based access.' },
  { n: '04', title: 'Bring your school together', desc: 'Start using connected records and build a consistent daily rhythm.' },
]

export default function OnboardingSteps() {
  return (
    <section id="onboarding" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">A supported start</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">A clear path from first conversation to school life.</h2>
          <p className="text-muted text-lg">Start with your priorities. Build the setup around the way your school works.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map(s => (
            <div key={s.n}>
              <div className="font-mono text-2xl text-gold font-semibold mb-2">{s.n}</div>
              <h3 className="font-display font-semibold text-navy-deep mb-1.5">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact?intent=demo" className="inline-flex items-center justify-center gap-2 bg-navy-deep hover:bg-navy text-white font-display font-semibold px-7 py-3 rounded-lg transition-colors">
            Plan your move to Eldermin <ArrowRight size={16} />
          </Link>
          <Link to="/wizard" className="inline-flex items-center justify-center gap-2 border border-line hover:border-navy/30 text-navy-deep font-display font-semibold px-7 py-3 rounded-lg transition-colors">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
