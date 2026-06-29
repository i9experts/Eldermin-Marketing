import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Salah attendance tracking per prayer',
  'Quran memorisation (Hifz) progress tracker',
  'Islamic Studies grading module',
  'Halal canteen management',
  'Separate prayer time scheduling in timetable',
  'Islamic calendar integration (Hijri dates)',
  'Gender-separated portals & dashboards',
  'Tarbiyah report card alongside academics',
]

export default function TarbiyahSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep to-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-amber/20 text-amber-light text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-5">Exclusive Feature</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Tarbiyah Module<br />
            <span className="text-amber">Built for Islamic Schools</span>
          </h2>
          <p className="text-blue-pale/75 text-lg leading-relaxed mb-8">
            Eldermin is the only school ERP with a dedicated Tarbiyah module — tracking spiritual development alongside academics. Purpose-built for Islamic schools, madrasas, and integrated schools.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map(f => (
              <li key={f} className="flex items-start gap-2 text-sm text-blue-pale/80">
                <Check size={15} className="text-amber mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
          <div className="text-6xl text-center mb-5">🕌</div>
          <div className="space-y-3">
            {[
              { label: 'Fajr Attendance', val: '92%', color: '#F5A623' },
              { label: 'Quran Hifz Progress', val: '64%', color: '#4A90C4' },
              { label: 'Tarbiyah Score Avg', val: '88%', color: '#22c55e' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-xs text-blue-pale/60 mb-1"><span>{item.label}</span><span className="text-white font-bold">{item.val}</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: item.val }} transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full" style={{ background: item.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center">
            {[{ v: '5×', l: 'Daily prayer slots' }, { v: 'Hijri', l: 'Calendar support' }, { v: '♂♀', l: 'Gender portals' }, { v: 'AI', l: 'Report comments' }].map(item => (
              <div key={item.l} className="bg-white/5 rounded-xl p-3">
                <div className="text-amber font-extrabold text-lg">{item.v}</div>
                <div className="text-blue-pale/50 text-[10px]">{item.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}