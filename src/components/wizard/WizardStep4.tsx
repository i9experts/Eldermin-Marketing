import { useWizard } from '../../context/WizardContext'
import { allModuleNames as allModules } from '../../data/modules'
export default function WizardStep4() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const selected = data.step4.modules
  const toggle = (name: string) => updateData('step4', { modules: selected.includes(name) ? selected.filter(m => m !== name) : [...selected, name] })
  return (
    <div>
      <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Step 4</span>
      <h2 className="text-xl font-display font-bold text-navy-deep mb-1 mt-1">Choose your modules</h2>
      <p className="text-gray-500 text-sm mb-6">Select the modules you need ({selected.length} selected)</p>
      <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto">
        {allModules.map(name => (
          <button key={name} onClick={() => toggle(name)} className={`px-3 py-2 rounded-lg text-sm border transition-all text-left ${selected.includes(name) ? 'bg-navy text-white border-navy' : 'bg-white text-gray-700 border-gray-200 hover:border-navy/40'}`}>
            {name}
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
