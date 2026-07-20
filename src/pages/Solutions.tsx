import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { moduleGroups } from '../data/modules'

export default function Solutions() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mt-3 mb-4 tracking-tight">Every part of running a school, in one place</h1>
          <p className="text-slate text-xl">Seven groups. Seventeen modules. One connected system underneath all of them.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {moduleGroups.map(g => (
            <Link key={g.slug} to={`/solutions/${g.slug}`} className="group border border-navy/10 hover:border-navy/30 rounded-xl p-6 transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
                <h2 className="font-display font-semibold text-navy-deep text-lg">{g.name}</h2>
              </div>
              <p className="text-slate text-sm mb-4 leading-relaxed">{g.blurb}</p>
              <div className="flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-amber-dark transition-colors">
                Explore {g.modules.length} module{g.modules.length > 1 ? 's' : ''} <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
