import { useWizard } from '../../context/WizardContext'
import { Check } from 'lucide-react'
// NOTE: placeholder pricing pending confirmation
const plans = [
  { name: 'Starter', price: 'PKR 65,000/term', features: ['Up to 300 students', '7 core modules', 'Email support'] },
  { name: 'Growth', price: 'PKR 155,000/term', features: ['Up to 1,200 students', '14 modules', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom pricing', features: ['Unlimited students', 'All 17 modules', 'Dedicated support'] },
]
export default function WizardStep5() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const selected = data.step5.plan
  return (
    <div>
      <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Step 5</span>
      <h2 className="text-xl font-display font-bold text-navy-deep mb-1 mt-1">Choose your plan</h2>
      <p className="text-gray-500 text-sm mb-6">You can upgrade or downgrade at any time</p>
      <div className="space-y-3">
        {plans.map(plan => (
          <button key={plan.name} onClick={() => updateData('step5', { plan: plan.name })} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selected === plan.name ? 'border-navy bg-mist' : 'border-gray-200 hover:border-navy/40'}`}>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-display font-bold text-navy-deep">{plan.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{plan.features.join(' · ')}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-amber-dark">{plan.price}</span>
                {selected === plan.name && <Check size={16} className="text-navy" />}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={nextStep} className="flex-1 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold py-3 rounded-xl transition-colors">Continue →</button>
      </div>
    </div>
  )
}
