import { Link } from 'react-router-dom'
import { moduleGroups } from '../data/modules'

export default function Solutions() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mt-3 mb-4">Every part of running a school, in one place</h1>
          <p className="text-slate text-xl">Seven groups. Seventeen modules. One connected system underneath all of them.</p>
        </div>
        <div className="space-y-16">
          {moduleGroups.map(g => (
            <div key={g.slug} id={g.slug} className="grid md:grid-cols-2 gap-12 items-start border-t border-navy/10 pt-12">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
                  <h2 className="text-2xl font-display font-bold text-navy-deep">{g.name}</h2>
                </div>
                <Link to="/signup" className="inline-block bg-navy hover:bg-navy-mid text-white font-display font-semibold px-6 py-3 rounded-lg transition-colors mt-2">Get started</Link>
              </div>
              <ul className="space-y-4">
                {g.modules.map(m => (
                  <li key={m.name} className="border border-navy/10 rounded-lg px-4 py-3">
                    <div className="font-display font-semibold text-navy-deep text-sm">{m.name}</div>
                    <div className="text-slate text-sm mt-0.5">{m.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
