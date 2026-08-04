import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { moduleGroups } from '../data/modules'
import ScreenshotCarousel from '../components/ScreenshotCarousel'

export default function SolutionDetail() {
  const { slug } = useParams()
  const group = moduleGroups.find(g => g.slug === slug)
  if (!group) return <Navigate to="/solutions" replace />

  const idx = moduleGroups.findIndex(g => g.slug === slug)
  const next = moduleGroups[(idx + 1) % moduleGroups.length]

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm text-slate-light hover:text-navy transition-colors mb-8">
          <ArrowLeft size={14} /> All modules
        </Link>

        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-3 h-3 rounded-full" style={{ background: group.color }} />
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">{group.modules.length} module{group.modules.length > 1 ? 's' : ''}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mb-4 tracking-tight">{group.name}</h1>
        <p className="text-slate text-lg max-w-2xl mb-12 leading-relaxed">{group.blurb}</p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ScreenshotCarousel screenshots={group.screenshots} accent={group.color} />
          <div className="space-y-5">
            {group.modules.map(m => (
              <div key={m.name} className="border-l-2 pl-4" style={{ borderColor: group.color }}>
                <h3 className="font-semibold text-navy-deep">{m.name}</h3>
                <p className="text-slate text-sm mt-0.5">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-navy/10 pt-8">
          <Link to="/wizard" className="inline-block bg-navy hover:bg-navy-mid text-white font-semibold px-7 py-3 rounded-lg transition-colors">
            Get started with {group.name}
          </Link>
          <Link to={`/solutions/${next.slug}`} className="inline-flex items-center gap-1.5 text-navy font-medium hover:text-amber-dark transition-colors">
            Next: {next.name} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}
