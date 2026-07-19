import { useWizard } from '../../context/WizardContext'
export default function WizardStep1() {
  const { data, updateData, nextStep } = useWizard()
  const d = data.step1
  return (
    <div>
      <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Step 1</span>
      <h2 className="text-xl font-display font-bold text-navy-deep mb-1 mt-1">School information</h2>
      <p className="text-gray-500 text-sm mb-6">Tell us about your institution</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">School name</label>
          <input type="text" value={d.schoolName} onChange={e => updateData('step1', { schoolName: e.target.value })} placeholder="e.g. Al Huda International" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">School type</label>
          <select value={d.schoolType} onChange={e => updateData('step1', { schoolType: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
            <option value="">Select type...</option>
            {['Nursery/Primary', 'Middle School', 'Secondary/O-Level', 'Combined (K-12)', 'Madrasa', 'Higher Institution'].map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
            <select value={d.country} onChange={e => updateData('step1', { country: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
              <option value="">Select...</option>
              {['Pakistan', 'United Arab Emirates', 'Saudi Arabia', 'United Kingdom', 'United States', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
            <input type="text" value={d.state} onChange={e => updateData('step1', { state: e.target.value })} placeholder="e.g. Lahore" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
          </div>
        </div>
      </div>
      <button onClick={nextStep} className="mt-8 w-full bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold py-3 rounded-xl transition-colors">Continue →</button>
    </div>
  )
}
