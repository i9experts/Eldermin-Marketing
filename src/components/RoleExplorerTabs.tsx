import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { roles } from '../data/roles'
import DashboardMock from './DashboardMock'

export default function RoleExplorerTabs() {
  const [active, setActive] = useState(roles[0])
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i
    if (e.key === 'ArrowRight') next = (i + 1) % roles.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + roles.length) % roles.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = roles.length - 1
    else return
    e.preventDefault()
    setActive(roles[next])
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div role="tablist" aria-label="Explore Eldermin by role" className="flex flex-wrap gap-2 mb-8 border-b border-line">
        {roles.map((r, i) => (
          <button
            key={r.key}
            ref={el => { tabRefs.current[i] = el }}
            role="tab"
            aria-selected={active.key === r.key}
            tabIndex={active.key === r.key ? 0 : -1}
            onClick={() => setActive(r)}
            onKeyDown={e => onKeyDown(e, i)}
            className={`px-4 py-3 font-medium text-sm border-b-2 -mb-px transition-colors ${active.key === r.key ? 'border-gold text-navy-deep' : 'border-transparent text-muted hover:text-navy'}`}
          >
            {r.tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-labelledby={active.key} className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center animate-[appear_0.5s_ease-out]">
        <div>
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">{active.eyebrow}</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-deep mt-3 mb-4 leading-tight">{active.title}</h3>
          <p className="text-muted text-lg mb-6 leading-relaxed">{active.body}</p>
          <ul className="space-y-2.5 mb-7">
            {active.bullets.map(b => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {b}
              </li>
            ))}
          </ul>
          <Link to={`/contact?intent=demo&role=${encodeURIComponent(active.tab)}`} className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold-dark transition-colors">
            See it for your school <ArrowRight size={15} />
          </Link>
        </div>
        <DashboardMock role={active} />
      </div>
    </div>
  )
}
