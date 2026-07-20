import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { moduleGroups } from '../data/modules'

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="bg-white border border-navy/10 rounded-xl shadow-xl p-7 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 w-[min(92vw,920px)]">
      {moduleGroups.map(g => (
        <div key={g.slug}>
          <Link to={`/solutions#${g.slug}`} onClick={onNavigate} className="flex items-center gap-2 mb-3 group/head">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: g.color }} />
            <span className="font-semibold text-navy-deep text-[0.78rem] uppercase tracking-wide group-hover/head:text-amber-dark transition-colors">{g.name}</span>
          </Link>
          <ul className="space-y-2.5">
            {g.modules.map(m => (
              <li key={m.name}>
                <Link to={`/solutions#${g.slug}`} onClick={onNavigate} className="block group/item">
                  <div className="text-sm text-slate group-hover/item:text-navy-deep font-medium transition-colors">{m.name}</div>
                  <div className="text-xs text-slate-light leading-snug">{m.desc}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-span-2 md:col-span-4 border-t border-navy/10 pt-5 flex items-center justify-between">
        <div>
          <div className="font-semibold text-navy-deep text-sm">All 17 modules, one platform</div>
          <div className="text-xs text-slate-light">No add-on marketplace to shop through later.</div>
        </div>
        <Link to="/solutions" onClick={onNavigate} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber-dark transition-colors shrink-0">
          See every module <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
