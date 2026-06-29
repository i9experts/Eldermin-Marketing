import { useWizard } from '../../context/WizardContext'
const integrations = [
  { emoji: '💰', name: 'Paystack', desc: 'Online fee payment' },
  { emoji: '🏦', name: 'Flutterwave', desc: 'Multi-currency payments' },
  { emoji: '📱', name: 'Twilio SMS', desc: 'Bulk SMS messaging' },
  { emoji: '📧', name: 'Mailchimp', desc: 'Email campaigns' },
  { emoji: '📊', name: 'Google Classroom', desc: 'LMS integration' },
  { emoji: '☁️', name: 'Google Drive', desc: 'Document storage' },
  { emoji: '🔗', name: 'Zoom', desc: 'Virtual classes' },
  { emoji: '📒', name: 'QuickBooks', desc: 'Accounting sync' },
]
export default function WizardStep6() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const selected = data.step6.integrations
  const toggle = (name: string) => updateData('step6', { integrations: selected.includes(name) ? selected.filter(i => i !== name) : [...selected, name] })
  return (
    <div>
      <div className="text-3xl mb-2">🔗</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">Integrations</h2>
      <p className="text-gray-500 text-sm mb-6">Connect your existing tools (optional)</p>
      <div className="grid grid-cols-2 gap-3">
        {integrations.map(int => (
          <button key={int.name} onClick={() => toggle(int.name)} className={`flex items-start gap-2 p-3 rounded-xl border transition-all text-left ${selected.includes(int.name) ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 hover:border-navy/40'}`}>
            <span className="text-lg">{int.emoji}</span>
            <div>
              <div className="text-sm font-semibold">{int.name}</div>
              <div className={`text-xs ${selected.includes(int.name) ? 'text-blue-pale' : 'text-gray-400'}`}>{int.desc}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={nextStep} className="flex-1 bg-amber hover:bg-amber-dark text-white font-bold py-3 rounded-xl transition-colors">Continue →</button>
      </div>
    </div>
  )
}