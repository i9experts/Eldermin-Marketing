import { motion } from 'framer-motion'
import { TrendingUp, Clock, Zap } from 'lucide-react'

const cards = [
  { icon: TrendingUp, value: '18%', label: 'Average fee collection increase', desc: 'Automated reminders and online payment options mean fewer defaults and faster collection.', color: 'text-amber', bg: 'bg-amber/10' },
  { icon: Clock, value: '40 hrs', label: 'Saved per term per admin', desc: 'Automated timetabling, report cards, and payroll eliminate repetitive manual tasks.', color: 'text-blue', bg: 'bg-blue/10' },
  { icon: Zap, value: '3×', label: 'Faster admissions processing', desc: 'Online applications, digital document review, and automated offer letters cut your admission cycle.', color: 'text-green-500', bg: 'bg-green-500/10' },
]

export default function ROISection() {
  return (
    <section className="py-24 bg-blue-pale/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">Real Results from Real Schools</h2>
          <p className="text-gray-500 text-lg">Average outcomes reported by Eldermin schools in their first year</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div key={card.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-50">
              <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-5`}>
                <card.icon size={26} className={card.color} />
              </div>
              <div className={`text-5xl font-extrabold mb-2 ${card.color}`}>{card.value}</div>
              <div className="font-bold text-navy-deep mb-2">{card.label}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}