import { Link } from 'react-router-dom'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { moduleGroups } from '../data/modules'

export default function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 border border-white/15 text-blue-100/80 text-xs font-mono px-3 py-1.5 rounded-md mb-7 tracking-wide">
            Live in 8 schools across Pakistan
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-[3.3rem] font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Seventeen school systems.<br />
            <span className="text-amber">One operating system.</span>
          </h1>
          <p className="text-navy-pale/80 text-lg mb-9 leading-relaxed max-w-lg">
            Eldermin runs admissions, academics, finance, HR, and Tarbiyah for Islamic schools from a single platform — so nothing lives in a separate spreadsheet, register, or app ever again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-deep font-semibold px-7 py-3.5 rounded-lg text-base transition-colors">
              Start Free Trial <ArrowRight size={17} />
            </Link>
            <a href="#modules" className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-base transition-colors border border-white/20 hover:border-white/40">
              See what's inside
            </a>
          </div>
        </div>

        {/* TODO: replace with a real dashboard screenshot once provided */}
        <div className="rounded-xl bg-[#0F2540] border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-xs font-mono text-white/40">app.eldermin.com</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <LayoutGrid size={16} className="text-amber" />
              <span className="text-white/90 text-sm font-semibold">Module overview</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {moduleGroups.map(g => (
                <div key={g.slug} className="rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: g.color }} />
                    <span className="text-white/85 text-xs font-semibold">{g.name}</span>
                  </div>
                  <span className="text-white/40 text-[0.7rem]">{g.modules.length} module{g.modules.length > 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
