import { useWizard } from '../../context/WizardContext'
export default function WizardStep7() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const d = data.step7
  return (
    <div>
      <div className="text-3xl mb-2">📅</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">Schedule Training</h2>
      <p className="text-gray-500 text-sm mb-6">We will walk your team through Eldermin</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
          <input type="date" value={d.preferredDate} onChange={e => updateData('step7', { preferredDate: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time</label>
          <select value={d.preferredTime} onChange={e => updateData('step7', { preferredTime: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30">
            <option value="">Select time...</option>
            {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'].map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Training Mode</label>
          <div className="grid grid-cols-3 gap-2">
            {[{ val: 'virtual', label: 'Virtual', desc: 'Zoom session' }, { val: 'onsite', label: 'On-site', desc: 'We come to you' }, { val: 'hybrid', label: 'Hybrid', desc: 'Both options' }].map(opt => (
              <button key={opt.val} onClick={() => updateData('step7', { trainingMode: opt.val })} className={`p-3 rounded-xl border text-center transition-all ${d.trainingMode === opt.val ? 'bg-navy text-white border-navy' : 'border-gray-200 hover:border-navy/40'}`}>
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className={`text-xs ${d.trainingMode === opt.val ? 'text-blue-pale' : 'text-gray-400'}`}>{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={nextStep} className="flex-1 bg-amber hover:bg-amber-dark text-white font-bold py-3 rounded-xl transition-colors">Continue →</button>
      </div>
    </div>
  )
}