import { Link } from 'react-router-dom'
import { faqs } from '../data/faq'

export default function FaqAccordion() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">A few things you may be wondering</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">Good questions.<br />Clear answers.</h2>
          <p className="text-muted text-lg">Have a question about your school's setup? <Link to="/contact" className="text-navy font-semibold hover:text-gold-dark transition-colors">Talk to a real person →</Link></p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map(f => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-navy-deep">
                {f.q}
                <span className="shrink-0 text-gold text-xl font-light group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-muted text-sm leading-relaxed mt-3 max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
