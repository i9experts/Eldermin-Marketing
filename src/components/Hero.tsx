import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      {/* ambient background texture — kept subtle so it reads as premium, not busy */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <span className="inline-flex items-center gap-2 border border-white/15 text-blue-100/80 text-xs font-mono px-3 py-1.5 rounded-md mb-7 tracking-wide">
            The intelligent operating system for value-oriented schools
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-[3.15rem] font-display font-bold leading-[1.15] mb-6 tracking-tight">
            <span className="text-white">Every great school </span>
            <span className="text-amber">deserves a great operating system.</span>
          </h1>
          <p className="text-navy-pale/80 text-lg mb-9 leading-relaxed max-w-lg">
            Run admissions, academics, finance, people, communication, and student development from one connected platform — built for schools that educate beyond academics, with specialised Tarbiyah, Hifz, and Nazrah tools for Islamic schools that want them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/wizard" className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-deep font-semibold px-7 py-3.5 rounded-lg text-base transition-colors shadow-lg shadow-amber/10">
              Apply for Eldermin <ArrowRight size={17} />
            </Link>
            <a href="#modules" className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-base transition-colors border border-white/20 hover:border-white/40">
              See the platform
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="rounded-xl bg-[#0F2540] border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-xs font-mono text-white/40">app.eldermin.com</span>
          </div>
          <img src="/screenshots/foundation/executive-dashboard.png" alt="Eldermin Executive Dashboard" className="w-full object-cover object-top" />
        </motion.div>
      </div>
    </section>
  )
}
