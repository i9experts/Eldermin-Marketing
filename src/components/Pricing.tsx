import { Link } from 'react-router-dom'
import { Check, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const plans = [
  { name: 'Starter', price: { annual: '₦180,000', term: '₦65,000' }, period: { annual: '/year', term: '/term' }, desc: 'Up to 300 students', color: 'border-gray-200', badge: '', cta: 'bg-navy hover:bg-navy-mid text-white', features: ['Up to 300 students', '7 core modules', 'Email support', 'Basic reports', '2 admin users', 'Parent portal'] },
  { name: 'Growth', price: { annual: '₦420,000', term: '₦155,000' }, period: { annual: '/year', term: '/term' }, desc: 'Up to 1,200 students', color: 'border-amber', badge: 'Most Popular', cta: 'bg-amber hover:bg-amber-dark text-white', features: ['Up to 1,200 students', '14 modules', 'Priority support', 'Advanced analytics', '10 admin users', 'Parent portal', 'SMS bundle', 'AI report comments'] },
  { name: 'Enterprise', price: { annual: 'Custom', term: 'Custom' }, period: { annual: '', term: '' }, desc: 'Unlimited students', color: 'border-navy', badge: 'Best Value', cta: 'bg-navy-deep hover:bg-navy text-white', features: ['Unlimited students', 'All 17 modules', '24/7 dedicated support', 'Custom integrations', 'Unlimited users', 'Multi-branch dashboard', 'On-site training', 'SLA guarantee', 'White-label option'] },
]

const tableRows = [
  { feature: 'Students', starter: '300', growth: '1,200', enterprise: 'Unlimited' },
  { feature: 'Modules', starter: '7', growth: '14', enterprise: '17' },
  { feature: 'Admin users', starter: '2', growth: '10', enterprise: 'Unlimited' },
  { feature: 'Parent portal', starter: true, growth: true, enterprise: true },
  { feature: 'SMS notifications', starter: false, growth: true, enterprise: true },
  { feature: 'AI report comments', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-branch', starter: false, growth: false, enterprise: true },
  { feature: 'On-site training', starter: false, growth: false, enterprise: true },
  { feature: 'SLA guarantee', starter: false, growth: false, enterprise: true },
  { feature: 'White-label', starter: false, growth: false, enterprise: true },
]

export default function Pricing() {
  const [cycle, setCycle] = useState<'annual' | 'term'>('annual')

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-lg mb-6">No setup fees. No hidden costs. Cancel anytime.</p>
          {/* Toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button onClick={() => setCycle('annual')} className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${cycle === 'annual' ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy'}`}>
              Annual <span className="text-amber text-xs font-bold ml-1">-20%</span>
            </button>
            <button onClick={() => setCycle('term')} className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${cycle === 'term' ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy'}`}>
              Per Term
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} shadow-sm hover:shadow-xl transition-shadow`}>
              {plan.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-white text-xs font-bold px-4 py-1 rounded-full">{plan.badge}</span>}
              <h3 className="text-xl font-bold text-navy-deep mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-navy-deep">{plan.price[cycle]}</span>
                <span className="text-gray-400 mb-1 text-sm">{plan.period[cycle]}</span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><Check size={15} className="text-amber shrink-0" /> {f}</li>)}
              </ul>
              <Link to="/signup" className={`block text-center font-bold py-3 rounded-xl transition-colors ${plan.cta}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 bg-navy-deep text-white text-sm font-bold px-6 py-4">
            <div>Feature</div>
            {plans.map(p => <div key={p.name} className="text-center">{p.name}</div>)}
          </div>
          {tableRows.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-4 px-6 py-3.5 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="text-gray-700 font-medium">{row.feature}</div>
              {(['starter', 'growth', 'enterprise'] as const).map(plan => (
                <div key={plan} className="text-center">
                  {typeof row[plan] === 'boolean' ? (
                    row[plan] ? <Check size={16} className="text-amber mx-auto" /> : <Minus size={16} className="text-gray-300 mx-auto" />
                  ) : (
                    <span className="text-navy-deep font-semibold">{row[plan]}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}