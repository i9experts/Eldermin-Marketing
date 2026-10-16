import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Icon } from './icons'
import { homeTeaserModules } from '../data/modules'

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">A complete operating system</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">Everything you run.<br />Working together.</h2>
          <p className="text-muted text-lg">Explore 17 modules across seven areas of school life. Choose the plan that fits your institution.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {homeTeaserModules.map(m => (
            <div key={m.title} className="bg-white rounded-xl border border-line p-6 hover:border-navy/25 hover:shadow-float transition-all">
              <Icon name={m.icon} size={20} className="text-navy mb-4" strokeWidth={1.75} />
              <span className="font-mono text-[10px] text-gold-dark uppercase tracking-widest">{m.category}</span>
              <h3 className="font-display font-semibold text-navy-deep mt-1.5 mb-1.5">{m.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/modules" className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold-dark transition-colors">
          Explore all 17 modules <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
