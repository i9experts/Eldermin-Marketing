import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import DashboardMock from './DashboardMock'
import { roles } from '../data/roles'

const audiences = ['School leaders', 'Teachers', 'Finance teams', 'Parents']

export default function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-green/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="inline-flex items-center gap-2 border border-white/15 text-white/70 text-xs font-mono px-3 py-1.5 rounded-md mb-7 tracking-wide">
              The intelligent school operating system
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-[3.15rem] font-display font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="text-white">Every part of your school.</span><br />
              <span className="text-gold">Better connected.</span>
            </h1>
            <p className="text-white/75 text-lg mb-9 leading-relaxed max-w-lg">
              Bring admissions, academics, finance and student development together. Give your team the clarity to focus on what matters: your learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <Link to="/wizard" className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-deep font-semibold px-7 py-3.5 rounded-lg text-base transition-colors shadow-lg shadow-gold/10">
                Get Started <ArrowRight size={17} />
              </Link>
              <Link to="/contact?intent=demo" className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-base transition-colors border border-white/20 hover:border-white/40">
                Book a demo
              </Link>
              <a href="#explore" className="flex items-center justify-center gap-2 text-white/70 hover:text-white font-medium px-5 py-3.5 rounded-lg text-base transition-colors">
                Explore the platform ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Built by educators', 'Designed for your whole school'].map(n => (
                <span key={n} className="inline-flex items-center gap-1.5 text-white/60 text-sm">
                  <CheckCircle2 size={14} className="text-green" /> {n}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <DashboardMock role={roles[0]} />
            <p className="text-center text-white/35 text-xs mt-3 font-mono">Illustrative dashboard · sample data</p>
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">Designed around the people in your school</p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map(a => (
              <span key={a} className="text-white/70 text-sm font-medium px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
