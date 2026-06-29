import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const tabs = [
  { id: 'finance', label: 'Finance', emoji: '💰', headline: 'Full School Financial Control', desc: 'Fee collection, invoicing, payroll, budget management, and real-time P&L — all purpose-built for school finance teams.', features: ['Online fee payment (Paystack/Flutterwave)', 'Automated invoicing & reminders', 'Multi-currency support', 'Payroll & PAYE computation', 'Budget vs actual tracking', 'Audit trails & financial reports'], color: 'from-amber/10 to-amber/5' },
  { id: 'academics', label: 'Academics', emoji: '📚', headline: 'Empower Every Classroom', desc: 'Conflict-free timetables, digital gradebooks, automated report cards, and lesson planning — saving teachers hours every week.', features: ['Smart conflict-free timetabling', 'Digital gradebook & CBT support', 'Automated report card generation', 'Attendance (biometric + manual)', 'Lesson notes & scheme of work', 'E-learning & portal integration'], color: 'from-blue/10 to-blue/5' },
  { id: 'admissions', label: 'Admissions', emoji: '🎓', headline: 'End-to-End Enrollment', desc: 'Online applications, entrance exams, offer letters, and enrollment confirmation — reduce admission time by 70%.', features: ['Branded online application portal', 'Entrance exam scheduling', 'Document upload & verification', 'Automated offer letters', 'Real-time application tracking', 'Enrollment & class assignment'], color: 'from-green-500/10 to-green-500/5' },
  { id: 'students', label: 'Students', emoji: '🧑‍🎓', headline: 'Complete Student Lifecycle', desc: 'From first inquiry to alumni — health records, transport, library, cafeteria, and a full student portal.', features: ['360° student profile', 'Health & medical records', 'Transport & bus management', 'Library management', 'Cafeteria & canteen POS', 'Alumni tracking'], color: 'from-purple-500/10 to-purple-500/5' },
  { id: 'ai', label: 'AI Features', emoji: '🤖', headline: 'AI-Powered School Intelligence', desc: 'Powered by Claude AI — automated report generation, predictive fee default alerts, and smart timetabling suggestions.', features: ['AI-generated report comments', 'Fee default prediction', 'Smart timetable optimization', 'Parent communication drafting', 'Enrolment trend forecasting', 'Document OCR & digitisation'], color: 'from-indigo-500/10 to-indigo-500/5' },
]

export default function ProductTabs() {
  const [active, setActive] = useState(tabs[0])
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">One Platform, Every Need</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Five fully integrated product suites — no third-party patchwork</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActive(tab)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${active.id === tab.id ? 'bg-navy text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600 hover:bg-blue-pale'}`}>
              <span>{tab.emoji}</span> {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}
            className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">{active.emoji}</div>
              <h3 className="text-2xl font-bold text-navy-deep mb-3">{active.headline}</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{active.desc}</p>
              <ul className="space-y-2.5">
                {active.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-gray-700">
                    <Check size={16} className="text-amber shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-gradient-to-br ${active.color} rounded-3xl h-80 flex flex-col items-center justify-center border border-gray-100 shadow-inner gap-3`}>
              <span className="text-8xl opacity-40">{active.emoji}</span>
              <span className="text-sm text-gray-400 font-medium">{active.headline}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}