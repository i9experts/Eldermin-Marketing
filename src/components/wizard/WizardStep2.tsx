import { useWizard } from '../../context/WizardContext'
export default function WizardStep2() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const d = data.step2
  return (
    <div>
      <div className="text-3xl mb-2">👤</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">Administrator Details</h2>
      <p className="text-gray-500 text-sm mb-6">Who will be the primary admin?</p>
      <div className="space-y-4">
        {[
          { key: 'adminName', label: 'Full Name', type: 'text', placeholder: 'e.g. Dr. Adaeze Okonkwo' },
          { key: 'adminEmail', label: 'Email Address', type: 'email', placeholder: 'admin@school.edu.ng' },
          { key: 'adminPhone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
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
            {['Principal', 'Proprietor', 'Director', 'Bursar', 'IT Administrator', 'Other'].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={nextStep} className="flex-1 bg-amber hover:bg-amber-dark text-white font-bold py-3 rounded-xl transition-colors">Continue →</button>
      </div>
    </div>
  )
}