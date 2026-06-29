import { motion } from 'framer-motion'

const modules = [
  { emoji: '🎓', name: 'Admissions', desc: 'Online enrollment' },
  { emoji: '📋', name: 'Student Records', desc: '360° profiles' },
  { emoji: '📅', name: 'Timetabling', desc: 'Conflict-free' },
  { emoji: '✅', name: 'Attendance', desc: 'Biometric + manual' },
  { emoji: '📝', name: 'Gradebook', desc: 'CBT & continuous' },
  { emoji: '📊', name: 'Result Computation', desc: 'Auto report cards' },
  { emoji: '💳', name: 'Fee Management', desc: 'Online payments' },
  { emoji: '💼', name: 'Payroll', desc: 'PAYE & deductions' },
  { emoji: '👨‍💼', name: 'HR Management', desc: 'Staff lifecycle' },
  { emoji: '📚', name: 'Library', desc: 'Catalogue & loans' },
  { emoji: '🍽️', name: 'Cafeteria', desc: 'Canteen POS' },
  { emoji: '🚌', name: 'Transport', desc: 'Bus & GPS' },
  { emoji: '🏥', name: 'Health Records', desc: 'Medical & sick bay' },
  { emoji: '💬', name: 'Communication', desc: 'SMS, email, app' },
  { emoji: '📱', name: 'Parent Portal', desc: 'Real-time updates' },
  { emoji: '🔐', name: 'Access Control', desc: 'Roles & permissions' },
  { emoji: '📈', name: 'Analytics & AI', desc: 'Insights & reports' },
]

export default function ModulesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-pale/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">Complete ERP</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">All 17 Modules. One Platform.</h2>
          <p className="text-gray-500 text-lg">No integrations needed. No extra licenses. Everything included.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {modules.map((mod, i) => (
            <motion.div key={mod.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.035 }}
              className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group border border-gray-50">
              <div className="text-3xl mb-2">{mod.emoji}</div>
              <div className="text-xs font-bold text-navy-deep group-hover:text-amber transition-colors leading-snug">{mod.name}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{mod.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}