import { useWizard } from '../../context/WizardContext'
export default function WizardStep3() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const d = data.step3
  return (
    <div>
      <div className="text-3xl mb-2">📊</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">School Size</h2>
      <p className="text-gray-500 text-sm mb-6">Help us tailor your plan</p>
      <div className="space-y-4">
        {[
          { key: 'studentCount', label: 'Number of Students', placeholder: 'e.g. 450' },
          { key: 'staffCount', label: 'Number of Staff', placeholder: 'e.g. 60' },
          { key: 'classCount', label: 'Number of Classes', placeholder: 'e.g. 18' },
        ].map(field => (
          <div key={field.key}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
            <input type="number" value={d[field.key as keyof typeof d]} onChange={e => updateData('step3', { [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
          </div>
        ))}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Grade Range</label>
          <select value={d.gradeRange} onChange={e => updateData('step3', { gradeRange: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
            <option value="">Select...</option>
            {['Nursery 1 - Primary 6', 'JSS 1 - JSS 3', 'SSS 1 - SSS 3', 'Nursery - SSS 3 (K-12)', 'Pre-school only'].map(g => <option key={g} value={g}>{g}</option>)}
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