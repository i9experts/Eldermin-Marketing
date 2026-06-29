import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, BookOpen, Globe2, Building2 } from 'lucide-react'

const kpi = [
  { icon: Building2, value: '200+', label: 'Institutions' },
  { icon: Users, value: '80K+', label: 'Students' },
  { icon: BookOpen, value: '17', label: 'Modules' },
  { icon: Globe2, value: '14', label: 'Countries' },
]

const dashRows = [
  { name: 'Fee Collection', val: '₦42.3M', pct: 78, color: '#F5A623' },
  { name: 'Attendance Rate', val: '96.4%', pct: 96, color: '#4A90C4' },
  { name: 'Admissions Open', val: '388 students', pct: 62, color: '#22c55e' },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-deep via-navy to-navy-mid overflow-hidden min-h-[92vh] flex items-center">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Left copy */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 bg-amber/20 text-amber-light text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-light animate-pulse" /> Now serving 14 countries
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-5">
            The School ERP<br />
            <span className="text-amber">for Islamic &amp; Elite</span><br />
            Schools Worldwide
          </h1>
          <p className="text-blue-pale/75 text-lg mb-4 leading-relaxed max-w-xl">
            Eldermin unifies admissions, academics, finance, HR, and communication into one powerful platform — built for the nuances of Islamic and international schools.
          </p>
          {/* Social proof bar */}
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-blue-pale/60 mb-8 font-medium">
            <span>200+ institutions</span><span className="text-white/20">·</span>
            <span>14 countries</span><span className="text-white/20">·</span>
            <span>80,000+ students</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all border border-white/20">
              <Play size={18} fill="white" /> Watch 2-min Demo
            </button>
          </div>
        </motion.div>

        {/* Right dashboard mockup */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
          {/* Floating KPI badges */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-xl bg-amber/15 flex items-center justify-center">
              <Users size={20} className="text-amber" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-navy-deep leading-none">388</div>
              <div className="text-xs text-gray-500">Active Students</div>
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-xl bg-blue/15 flex items-center justify-center">
              <BookOpen size={20} className="text-blue" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-navy-deep leading-none">17</div>
              <div className="text-xs text-gray-500">Modules Active</div>
            </div>
          </motion.div>

          {/* Dashboard card */}
          <div className="bg-navy-deep/90 backdrop-blur rounded-3xl border border-white/10 shadow-2xl p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-white font-bold text-sm">Eldermin Dashboard</div>
                <div className="text-blue-pale/50 text-xs">Al-Noor Islamic School · Term 1, 2025</div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
            </div>
            {/* KPI row */}
            <div className="grid grid-cols-4 gap-2 mb-5">
              {kpi.map(k => (
                <div key={k.label} className="bg-white/5 rounded-xl p-2.5 text-center">
                  <k.icon size={14} className="text-amber mx-auto mb-1" />
                  <div className="text-white font-extrabold text-sm">{k.value}</div>
                  <div className="text-blue-pale/50 text-[10px]">{k.label}</div>
                </div>
              ))}
            </div>
            {/* Bar rows */}
            <div className="space-y-3">
              {dashRows.map(r => (
                <div key={r.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-blue-pale/70">{r.name}</span>
                    <span className="text-white font-semibold">{r.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${r.pct}%` }} transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full rounded-full" style={{ background: r.color }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Mini nav pills */}
            <div className="flex gap-2 mt-5 flex-wrap">
              {['Admissions','Finance','Academics','HR','Reports'].map((t, i) => (
                <span key={t} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? 'bg-amber text-white' : 'bg-white/10 text-blue-pale/70'}`}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}