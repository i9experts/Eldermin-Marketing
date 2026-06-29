import { motion } from 'framer-motion'
import { Building2, Users, LayoutGrid, Globe2 } from 'lucide-react'

const stats = [
  { icon: Building2, value: '200+', label: 'Institutions' },
  { icon: Users, value: '80,000+', label: 'Students Managed' },
  { icon: LayoutGrid, value: '17', label: 'ERP Modules' },
  { icon: Globe2, value: '14', label: 'Countries' },
  { icon: Users, value: '99.9%', label: 'Uptime SLA' },
]

export default function StatsStrip() {
  return (
    <section className="bg-navy py-12 border-y border-navy-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="flex flex-col items-center gap-1">
              <s.icon size={20} className="text-amber mb-1" />
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-blue-pale/60 text-xs uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}