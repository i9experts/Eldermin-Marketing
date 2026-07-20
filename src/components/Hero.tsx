import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 border border-white/15 text-blue-100/80 text-xs font-mono px-3 py-1.5 rounded-md mb-7 tracking-wide">
            Live in 8 schools across Pakistan
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-[3.1rem] font-display font-bold text-white leading-[1.15] mb-6 tracking-tight">
            Stop managing your school with multiple apps and endless spreadsheets.
          </h1>
          <p className="text-navy-pale/80 text-lg mb-9 leading-relaxed max-w-lg">
            Eldermin centralises admissions, academics, finance, HR, transport, and Tarbiyah into one powerful platform — giving your team complete visibility, automation, and control.
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

        <div className="rounded-xl bg-[#0F2540] border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-xs font-mono text-white/40">app.eldermin.com</span>
          </div>
          <img src="/screenshots/foundation/executive-dashboard.png" alt="Eldermin Executive Dashboard" className="w-full object-cover object-top" />
        </div>
      </div>
    </section>
  )
}
