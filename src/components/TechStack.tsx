import { motion } from 'framer-motion'
import { Shield, Cloud, Brain, Smartphone, Lock, Globe2 } from 'lucide-react'

const stack = [
  { icon: Cloud, label: 'AWS Infrastructure', desc: 'Multi-region AWS hosting with 99.9% uptime SLA and auto-scaling.', color: 'text-orange-400', bg: 'bg-orange-50' },
  { icon: Shield, label: 'SOC 2 Compliant', desc: 'Annual third-party audits. Your data is encrypted at rest and in transit.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Brain, label: 'Powered by Claude AI', desc: 'Anthropic Claude generates report comments, flags at-risk students, and drafts parent communications.', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Smartphone, label: 'Native Mobile Apps', desc: 'iOS & Android apps for parents, students, and staff. Works offline too.', color: 'text-blue', bg: 'bg-blue/10' },
  { icon: Lock, label: '256-bit Encryption', desc: 'All data encrypted with AES-256. Role-based access controls throughout.', color: 'text-navy', bg: 'bg-navy/10' },
  { icon: Globe2, label: 'Multi-currency & Multi-lang', desc: 'Supports NGN, GHS, KES, USD, GBP. Arabic, English, French UI available.', color: 'text-amber', bg: 'bg-amber/10' },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">Enterprise-Grade Technology</h2>
          <p className="text-gray-500 text-lg">Built to the same standards as global SaaS platforms — at an African price point</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stack.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                <item.icon size={22} className={item.color} />
              </div>
              <h3 className="font-bold text-navy-deep mb-2">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}