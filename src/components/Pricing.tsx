import { Link } from 'react-router-dom'
import { Check, Minus } from 'lucide-react'
import { useState } from 'react'

// NOTE: Pricing figures below are placeholders pending confirmation — see chat summary.
const plans = [
  { name: 'Starter', price: { annual: 'PKR 180,000', term: 'PKR 65,000' }, period: { annual: '/year', term: '/term' }, desc: 'Up to 300 students', badge: '', cta: 'bg-navy hover:bg-navy-mid text-white', features: ['Up to 300 students', '7 core modules', 'Email support', '2 admin users', 'Parent portal'] },
  { name: 'Growth', price: { annual: 'PKR 420,000', term: 'PKR 155,000' }, period: { annual: '/year', term: '/term' }, desc: 'Up to 1,200 students', badge: 'Most schools choose this', cta: 'bg-amber hover:bg-amber-dark text-navy-deep', features: ['Up to 1,200 students', '14 modules', 'Priority support', 'Advanced analytics', '10 admin users', 'AI report insights'] },
  { name: 'Enterprise', price: { annual: 'Custom', term: 'Custom' }, period: { annual: '', term: '' }, desc: 'Unlimited students, multi-campus', badge: '', cta: 'bg-navy-deep hover:bg-navy text-white', features: ['Unlimited students', 'All 17 modules', 'Dedicated support', 'Multi-campus dashboard', 'On-site setup assistance'] },
]

const tableRows = [
  { feature: 'Students', starter: '300', growth: '1,200', enterprise: 'Unlimited' },
  { feature: 'Modules', starter: '7', growth: '14', enterprise: '17' },
  { feature: 'Admin users', starter: '2', growth: '10', enterprise: 'Unlimited' },
  { feature: 'Parent portal', starter: true, growth: true, enterprise: true },
  { feature: 'AI report insights', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-campus', starter: false, growth: false, enterprise: true },
]

export default function Pricing() {
  const [cycle, setCycle] = useState<'annual' | 'term'>('annual')
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3">Simple, transparent pricing</h2>
          <p className="text-slate text-lg">No setup fees. Cancel anytime.</p>
        </div>
        <div className="inline-flex items-center bg-mist border border-navy/10 rounded-lg p-1 mb-10">
          <button onClick={() => setCycle('annual')} className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-colors ${cycle === 'annual' ? 'bg-navy text-white' : 'text-slate hover:text-navy'}`}>
            Annual <span className="text-amber-dark text-xs font-bold ml-1">-20%</span>
          </button>
          <button onClick={() => setCycle('term')} className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-colors ${cycle === 'term' ? 'bg-navy text-white' : 'text-slate hover:text-navy'}`}>
            Per term
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map(plan => (
            <div key={plan.name} className={`relative rounded-xl p-8 border ${plan.badge ? 'border-amber border-2' : 'border-navy/10'}`}>
              {plan.badge && <span className="absolute -top-3 left-8 bg-amber text-navy-deep text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span>}
              <h3 className="text-xl font-display font-bold text-navy-deep mb-1">{plan.name}</h3>
              <p className="text-slate-light text-sm mb-5">{plan.desc}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-display font-bold text-navy-deep">{plan.price[cycle]}</span>
                <span className="text-slate-light mb-1 text-sm">{plan.period[cycle]}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-slate"><Check size={15} className="text-emerald shrink-0" /> {f}</li>)}
              </ul>
              <Link to="/signup" className={`block text-center font-display font-semibold py-3 rounded-lg transition-colors ${plan.cta}`}>
                {plan.name === 'Enterprise' ? 'Talk to sales' : 'Get started'}
              </Link>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-navy/10 overflow-hidden">
          <div className="grid grid-cols-4 bg-navy-deep text-white text-sm font-semibold px-6 py-4">
            <div>Feature</div>
            {plans.map(p => <div key={p.name} className="text-center">{p.name}</div>)}
          </div>
          {tableRows.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-4 px-6 py-3.5 text-sm ${i % 2 === 0 ? 'bg-mist' : 'bg-white'}`}>
              <div className="text-slate font-medium">{row.feature}</div>
              {(['starter', 'growth', 'enterprise'] as const).map(plan => (
                <div key={plan} className="text-center">
                  {typeof row[plan] === 'boolean'
                    ? (row[plan] ? <Check size={16} className="text-emerald mx-auto" /> : <Minus size={16} className="text-navy/20 mx-auto" />)
                    : <span className="text-navy-deep font-semibold">{row[plan]}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
