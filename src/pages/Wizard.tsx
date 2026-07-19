import { useWizard } from '../context/WizardContext'
import WizardStep1 from '../components/wizard/WizardStep1'
import WizardStep2 from '../components/wizard/WizardStep2'
import WizardStep3 from '../components/wizard/WizardStep3'
import WizardStep4 from '../components/wizard/WizardStep4'
import WizardStep5 from '../components/wizard/WizardStep5'
import WizardStep6 from '../components/wizard/WizardStep6'
import WizardStep7 from '../components/wizard/WizardStep7'
import WizardStep8 from '../components/wizard/WizardStep8'
import { motion, AnimatePresence } from 'framer-motion'

const stepLabels = ['School Info', 'Admin Details', 'School Size', 'Modules', 'Plan', 'Integrations', 'Training', 'Confirm']
const stepComponents = [WizardStep1, WizardStep2, WizardStep3, WizardStep4, WizardStep5, WizardStep6, WizardStep7, WizardStep8]

export default function Wizard() {
  const { step } = useWizard()
  const StepComponent = stepComponents[step - 1]
  return (
    <div className="min-h-screen bg-gradient-to-br from-mist to-white py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-navy">Step {step} of 8</span>
            <span className="text-sm text-gray-400">{stepLabels[step - 1]}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-navy to-amber rounded-full" animate={{ width: `${(step / 8) * 100}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-xl p-8">
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}