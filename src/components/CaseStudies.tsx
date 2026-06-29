import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const cases = [
  { emoji: '🕌', school: 'Al-Noor Islamic School', location: 'Kano, Nigeria', type: 'Islamic School · 620 students', headline: 'How Al-Noor cut fee defaults by 34% in one term', result: '34% fewer defaults', desc: 'By switching to Eldermin\'s automated fee reminders and online payment, Al-Noor collected 98% of fees by week 3 of term — up from 64%.', tags: ['Finance', 'Parent Portal'] },
  { emoji: '🏫', school: 'Hillcrest International', location: 'Abuja, Nigeria', type: 'Int\'l School · 1,100 students', headline: 'Timetabling 3 campuses in under 2 hours', result: '2-hour timetable', desc: 'Hillcrest\'s admin team used to spend 4 days manually scheduling. Eldermin\'s AI timetabling engine now produces conflict-free schedules in under 2 hours.', tags: ['Academics', 'AI'] },
  { emoji: '🌍', school: 'Crown Educational Group', location: 'Nigeria · Ghana · UK', type: 'School Network · 12 branches', headline: 'One dashboard for 12 schools across 3 countries', result: '12 schools unified', desc: 'Crown\'s leadership now sees real-time enrolment, finances, and academic performance across all 12 branches from a single multi-tenant dashboard.', tags: ['Multi-branch', 'Analytics'] },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">Customer Stories</h2>
          <p className="text-gray-500 text-lg">How leading schools are using Eldermin to achieve more</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div key={c.school} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="bg-gradient-to-br from-navy-deep to-navy-mid h-36 flex items-center justify-center relative">
                <span className="text-7xl opacity-20">{c.emoji}</span>
                <div className="absolute bottom-4 left-5">
                  <span className="bg-amber text-white text-xs font-bold px-3 py-1 rounded-full">{c.result}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-400 mb-1">{c.type} · {c.location}</div>
                <h3 className="font-bold text-navy-deep mb-3 leading-snug group-hover:text-amber transition-colors">{c.headline}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map(tag => <span key={tag} className="text-xs bg-blue-pale text-navy px-2.5 py-1 rounded-full font-medium">{tag}</span>)}
                </div>
                <button className="flex items-center gap-1 text-amber font-semibold text-sm group-hover:gap-2 transition-all">
                  Read case study <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}