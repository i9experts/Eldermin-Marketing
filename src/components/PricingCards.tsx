import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { plans } from '../data/pricing'

export default function PricingCards({ showToggle = true }: { showToggle?: boolean }) {
  const [cycle, setCycle] = useState<'annual' | 'monthly'>('annual')

  return (
    <div>
      {showToggle && (
        <div className="inline-flex items-center bg-paper border border-line rounded-lg p-1 mb-10">
          <button onClick={() => setCycle('annual')} className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-colors ${cycle === 'annual' ? 'bg-navy text-white' : 'text-muted hover:text-navy'}`}>
            Annual price
          </button>
          <button onClick={() => setCycle('monthly')} className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-colors ${cycle === 'monthly' ? 'bg-navy text-white' : 'text-muted hover:text-navy'}`}>
            Monthly equivalent
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(plan => {
          const custom = plan.annual === 'Custom'
          const price = custom ? 'Custom' : cycle === 'annual' ? plan.annual : plan.monthly
          return (
            <div key={plan.name} className={`relative rounded-card p-8 border ${plan.featured ? 'border-gold border-2' : 'border-line'}`}>
              {plan.featured && <span className="absolute -top-3 left-8 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full">For growing schools</span>}
              <h3 className="text-xl font-display font-bold text-navy-deep mb-1">{plan.name}</h3>
              <p className="text-muted text-sm mb-5">{plan.tagline}</p>
              <div className="flex items-end gap-1.5 mb-1">
                {!custom && <span className="text-sm text-muted font-medium mb-1.5">PKR</span>}
                <span className="text-3xl font-display font-bold text-navy-deep">{price}</span>
              </div>
              <p className="text-muted text-xs mb-6">{custom ? plan.priceNote.annual : plan.priceNote[cycle]}</p>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map(f => <li key={f} className="flex items-start gap-2 text-sm text-ink"><Check size={15} className="text-green shrink-0 mt-0.5" /> {f}</li>)}
              </ul>
              <Link
                to={`/contact?intent=demo&plan=${encodeURIComponent(plan.name)}`}
                className={`block text-center font-display font-semibold py-3 rounded-lg transition-colors ${plan.featured ? 'bg-gold hover:bg-gold-dark text-navy-deep' : 'bg-navy hover:bg-navy-deep text-white'}`}
              >
                {plan.cta} →
              </Link>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-muted mt-8 max-w-2xl">Prices shown in PKR. Confirm module inclusions, tax treatment and service terms with our team before subscribing.</p>
    </div>
  )
}
