import { useWizard } from '../../context/WizardContext'
export default function WizardStep2() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const d = data.step2
  return (
    <div>
      <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Step 2</span>
      <h2 className="text-xl font-display font-bold text-navy-deep mb-1 mt-1">Administrator details</h2>
      <p className="text-gray-500 text-sm mb-6">Who will be the primary admin?</p>
      <div className="space-y-4">
        {[
          { key: 'adminName', label: 'Full name', type: 'text', placeholder: 'e.g. Ahmed Hassan' },
          { key: 'adminEmail', label: 'Email address', type: 'email', placeholder: 'admin@yourschool.edu.pk' },
          { key: 'adminPhone', label: 'Phone number', type: 'tel', placeholder: '+92 300 0000000' },
        ].map(field => (
          <div key={field.key}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
            <input type={field.type} value={d[field.key as keyof typeof d]} onChange={e => updateData('step2', { [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
          </div>
        ))}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
          <select value={d.role} onChange={e => updateData('step2', { role: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
            <option value="">Select role...</option>
            {['Principal', 'Owner', 'Director', 'Accountant', 'IT Administrator', 'Other'].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={nextStep} className="flex-1 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold py-3 rounded-xl transition-colors">Continue →</button>
      </div>
    </div>
  )
}
