import { useWizard } from '../../context/WizardContext'
const allModules = [
  { emoji: '🎓', name: 'Admissions' }, { emoji: '📋', name: 'Student Records' },
  { emoji: '📅', name: 'Timetabling' }, { emoji: '✅', name: 'Attendance' },
  { emoji: '📝', name: 'Gradebook' }, { emoji: '📊', name: 'Result Computation' },
  { emoji: '💳', name: 'Fee Management' }, { emoji: '💼', name: 'Payroll' },
  { emoji: '👨‍💼', name: 'HR Management' }, { emoji: '📚', name: 'Library' },
  { emoji: '🍽️', name: 'Cafeteria' }, { emoji: '🚌', name: 'Transport' },
  { emoji: '🏥', name: 'Health Records' }, { emoji: '💬', name: 'Communication' },
  { emoji: '📱', name: 'Parent Portal' }, { emoji: '🔐', name: 'Access Control' },
  { emoji: '📈', name: 'Analytics' },
]
export default function WizardStep4() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const selected = data.step4.modules
  const toggle = (name: string) => updateData('step4', { modules: selected.includes(name) ? selected.filter(m => m !== name) : [...selected, name] })
  return (
    <div>
      <div className="text-3xl mb-2">🧩</div>
      <h2 className="text-xl font-bold text-navy-deep mb-1">Choose Your Modules</h2>
      <p className="text-gray-500 text-sm mb-6">Select the modules you need ({selected.length} selected)</p>
      <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto">
        {allModules.map(mod => (
          <button key={mod.name} onClick={() => toggle(mod.name)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-all ${selected.includes(mod.name) ? 'bg-navy text-white border-navy' : 'bg-white text-gray-700 border-gray-200 hover:border-navy/40'}`}>
            <span>{mod.emoji}</span> {mod.name}
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