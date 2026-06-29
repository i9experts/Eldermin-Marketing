import { motion } from 'framer-motion'

const testimonials = [
  { quote: "Eldermin transformed how we run our school. What used to take our admin team 3 days now takes 3 hours. The AI-generated report comments alone save us 40 hours every term.", name: "Ustaz Abdullahi Musa", role: "Principal, Al-Noor Islamic School, Kano", avatar: "AM", rating: 5, tag: "Islamic School" },
  { quote: "The parent portal has completely changed our communication. Parents love getting real-time updates on their children's salah attendance and academic progress. Highly recommended.", name: "Mr. Babatunde Fashola", role: "Director, Hillcrest International School, Abuja", avatar: "BF", rating: 5, tag: "International School" },
  { quote: "As a school network with 12 branches across 3 countries, we needed one system that could handle everything. Eldermin's multi-branch support is exceptional — full visibility in one dashboard.", name: "Dr. Ngozi Adeyemi", role: "CEO, Crown Educational Group", avatar: "NA", rating: 5, tag: "School Network" },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">Loved by School Leaders</h2>
          <p className="text-gray-500 text-lg">From Islamic academies to international networks</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              className="bg-gradient-to-br from-blue-pale to-white rounded-2xl p-7 border border-blue/10 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, j) => <span key={j} className="text-amber">★</span>)}</div>
                <span className="text-[10px] font-bold bg-amber/10 text-amber-dark px-2.5 py-1 rounded-full">{t.tag}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shrink-0">{t.avatar}</div>
                <div>
                  <div className="font-bold text-navy-deep text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}