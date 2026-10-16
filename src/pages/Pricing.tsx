import { Check, Minus } from 'lucide-react'
import PageHero from '../components/PageHero'
import PricingCards from '../components/PricingCards'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'
import { comparisonRows, plans } from '../data/pricing'

export default function Pricing() {
  return (
    <div>
      <PageHero
        crumb="Plans & pricing"
        eyebrow="Plans & pricing"
        title={<>Choose a starting point.<br />Build a more connected school.</>}
        lead="Compare capacity, module access and support. We will help you understand which workflows belong in your plan."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl font-display font-bold text-navy-deep mb-3 tracking-tight">Clear plans. A supported start.</h2>
            <p className="text-muted text-lg">Annual prices, with a monthly equivalent to make comparison easier.</p>
          </div>

          <div className="flex justify-center">
            <PricingCards />
          </div>

          <div className="rounded-xl border border-line overflow-hidden mt-16">
            <div className="grid grid-cols-4 bg-navy-deep text-white text-sm font-semibold px-6 py-4">
              <div>Your school's needs</div>
              {plans.map(p => <div key={p.name} className="text-center">{p.name}</div>)}
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 px-6 py-3.5 text-sm ${i % 2 === 0 ? 'bg-paper' : 'bg-white'}`}>
                <div className="text-muted font-medium">{row.feature}</div>
                {(['starter', 'growth', 'enterprise'] as const).map(key => (
                  <div key={key} className="text-center">
                    {typeof row[key] === 'boolean'
                      ? (row[key] ? <Check size={16} className="text-green mx-auto" /> : <Minus size={16} className="text-navy/20 mx-auto" />)
                      : <span className="text-navy-deep font-semibold">{row[key]}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-xs text-muted mt-6 max-w-2xl">Monthly equivalents are annual totals divided by 12, not monthly payment offers. Ask our team about billing arrangements, cancellation terms and the exact modules included in each plan.</p>
        </div>
      </section>

      <FaqAccordion />
      <CtaBand />
    </div>
  )
}
