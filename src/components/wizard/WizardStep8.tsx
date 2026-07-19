import { useWizard } from '../../context/WizardContext'
export default function WizardStep8() {
  const { data, updateData, prevStep, submitWizard, isSubmitting } = useWizard()
  const d = data.step8
  const canSubmit = d.termsAccepted && d.dataPolicy && d.signature.length > 2
  return (
    <div>
      <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Step 8</span>
      <h2 className="text-xl font-display font-bold text-navy-deep mb-1 mt-1">Review & confirm</h2>
      <p className="text-gray-500 text-sm mb-6">Almost there — please review and agree to our terms.</p>
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-mist rounded-xl">
          <input type="checkbox" id="terms" checked={d.termsAccepted} onChange={e => updateData('step8', { termsAccepted: e.target.checked })} className="mt-0.5" />
          <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">I agree to the <a href="/legal" className="text-navy font-semibold underline" target="_blank">Terms of Service</a> and understand the subscription terms.</label>
        </div>
        <div className="flex items-start gap-3 p-3 bg-mist rounded-xl">
          <input type="checkbox" id="data" checked={d.dataPolicy} onChange={e => updateData('step8', { dataPolicy: e.target.checked })} className="mt-0.5" />
          <label htmlFor="data" className="text-sm text-gray-700 cursor-pointer">I consent to Eldermin's <a href="/legal" className="text-navy font-semibold underline" target="_blank">Data Processing Policy</a>.</label>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Digital signature (type your full name)</label>
          <input type="text" value={d.signature} onChange={e => updateData('step8', { signature: e.target.value })} placeholder="e.g. Ahmed Hassan" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 font-serif italic" />
        </div>
        <div className="bg-amber/10 border border-amber/20 rounded-xl p-4 text-sm text-gray-700">
          Almost set — our onboarding team will reach out within 24 hours to set up your account and schedule training.
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={prevStep} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">← Back</button>
        <button onClick={submitWizard} disabled={!canSubmit || isSubmitting} className="flex-1 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold py-3 rounded-xl transition-colors disabled:opacity-40">
          {isSubmitting ? 'Launching...' : 'Launch Dashboard'}
        </button>
      </div>
    </div>
  )
}
