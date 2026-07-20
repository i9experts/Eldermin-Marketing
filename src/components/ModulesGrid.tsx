import { Link } from 'react-router-dom'
import { moduleGroups } from '../data/modules'

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">All 17 modules</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">Everything a school runs, grouped the way you'd actually think about it</h2>
          <p className="text-slate text-lg">No add-on marketplace to shop through later. Every module below ships as part of Eldermin.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {moduleGroups.map(g => (
            <Link key={g.slug} to={`/solutions/${g.slug}`} className="rounded-xl border border-navy/10 p-6 hover:border-navy/25 transition-colors block">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
                <h3 className="font-semibold text-navy-deep text-sm tracking-wide">{g.name}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.modules.map(m => (
                  <li key={m.name} className="text-sm">
                    <div className="text-navy-deep font-medium">{m.name}</div>
                    <div className="text-slate-light text-xs leading-snug">{m.desc}</div>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
