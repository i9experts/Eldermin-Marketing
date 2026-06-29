import { useWizard } from '../../context/WizardContext'
export default function WizardStep1() {
  const { data, updateData, nextStep } = useWizard()
  const d = data.step1
  return (
    <div>
      <div className="text-3xl mb-2">🏫</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">School Information</h2>
      <p className="text-gray-500 text-sm mb-6">Tell us about your institution</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">School Name</label>
          <input type="text" value={d.schoolName} onChange={e => updateData('step1', { schoolName: e.target.value })} placeholder="e.g. Greenfield Academy" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">School Type</label>
          <select value={d.schoolType} onChange={e => updateData('step1', { schoolType: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
            <option value="">Select type...</option>
            {['Nursery/Primary', 'Junior Secondary', 'Senior Secondary', 'Combined (K-12)', 'Higher Institution', 'Vocational'].map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
            <select value={d.country} onChange={e => updateData('step1', { country: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
              <option value="">Select...</option>
              {['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Uganda', 'Tanzania', 'Rwanda', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">State/Region</label>
            <input type="text" value={d.state} onChange={e => updateData('step1', { state: e.target.value })} placeholder="e.g. Lagos" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
          </div>
        </div>
      </div>
      <button onClick={nextStep} className="mt-8 w-full bg-amber hover:bg-amber-dark text-white font-bold py-3 rounded-xl transition-colors">Continue →</button>
    </div>
  )
}