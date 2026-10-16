import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import DetailDialog from '../components/DetailDialog'
import { Icon } from '../components/icons'
import { categories, modules, type ModuleItem } from '../data/modules'

const pills = ['All', ...categories]

export default function Modules() {
  const [params] = useSearchParams()
  const initialCategory = pills.includes(params.get('category') || '') ? (params.get('category') as string) : 'All'
  const [category, setCategory] = useState(initialCategory)
  const [search, setSearch] = useState('')
  const [active, setActive] = useState<ModuleItem | null>(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return modules.filter(m => {
      if (category !== 'All' && m.category !== category) return false
      if (!q) return true
      return [m.title, m.category, m.desc, ...m.capabilities].join(' ').toLowerCase().includes(q)
    })
  }, [category, search])

  return (
    <div>
      <PageHero
        crumb="Module directory"
        eyebrow="Module directory"
        title={<>One connected platform.<br />Seventeen purposeful modules.</>}
        lead="Explore what your school needs today—and the capabilities you can grow into. Module availability depends on your selected plan."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="module-search" className="block text-sm font-semibold text-ink mb-1.5">Find a module or workflow</label>
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  id="module-search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Try fees, homework, Hifz or attendance…"
                  className="w-full border border-line rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </div>
            </div>
            <p aria-live="polite" className="text-sm text-muted whitespace-nowrap">{filtered.length} of {modules.length} modules</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {pills.map(p => (
              <button key={p} onClick={() => setCategory(p)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${category === p ? 'bg-navy text-white border-navy' : 'border-line text-ink hover:border-navy/30'}`}>
                {p}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted mb-4">No modules match this search or filter.</p>
              <button onClick={() => { setSearch(''); setCategory('All') }} className="text-navy font-semibold hover:text-gold-dark transition-colors">Clear filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(m => (
                <div key={m.title} className="bg-white rounded-xl border border-line p-6 hover:border-navy/25 hover:shadow-float transition-all flex flex-col">
                  <Icon name={m.icon} size={20} className="text-navy mb-4" strokeWidth={1.75} />
                  <span className="font-mono text-[10px] text-gold-dark uppercase tracking-widest">{m.category}</span>
                  <h3 className="font-display font-semibold text-navy-deep mt-1.5 mb-1.5">{m.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{m.desc}</p>
                  <button onClick={() => setActive(m)} className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors text-left">
                    Explore module →
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />

      <DetailDialog open={!!active} onClose={() => setActive(null)} title={active?.title || ''}>
        {active && (
          <>
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">{active.category}</span>
            <p className="text-ink leading-relaxed mt-3 mb-5">{active.desc}</p>
            <h4 className="font-display font-semibold text-navy-deep mb-3">Explore these capabilities</h4>
            <ul className="space-y-2 mb-6">
              {active.capabilities.map(c => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mb-5">Module access depends on your plan. Ask for a demonstration using your school's workflow.</p>
            <Link to={`/contact?intent=demo&module=${encodeURIComponent(active.title)}`} className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-navy-deep font-display font-semibold px-6 py-3 rounded-lg transition-colors">
              Discuss this module <ArrowRight size={16} />
            </Link>
          </>
        )}
      </DetailDialog>
    </div>
  )
}
