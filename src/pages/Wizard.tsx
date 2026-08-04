import { useWizard } from '../context/WizardContext'
import WizardHeader from '../components/wizard/WizardHeader'
import WizardStep1 from '../components/wizard/WizardStep1'
import WizardStep2 from '../components/wizard/WizardStep2'
import WizardStep3 from '../components/wizard/WizardStep3'
import WizardStep4 from '../components/wizard/WizardStep4'
import WizardStep5 from '../components/wizard/WizardStep5'
import WizardStep6 from '../components/wizard/WizardStep6'
import WizardStep7 from '../components/wizard/WizardStep7'
import WizardStep8 from '../components/wizard/WizardStep8'
import { motion, AnimatePresence } from 'framer-motion'

const stepComponents = [WizardStep1, WizardStep2, WizardStep3, WizardStep4, WizardStep5, WizardStep6, WizardStep7, WizardStep8]

export default function Wizard() {
  const { step } = useWizard()
  const StepComponent = stepComponents[step - 1]
  return (
    <div className="min-h-screen bg-gradient-to-br from-mist to-white py-10 px-4">
      <div className="max-w-2xl mx-auto rounded-2xl shadow-xl overflow-hidden">
        <WizardHeader step={step} />
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="bg-white p-8">
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-center text-xs text-slate-light mt-4 max-w-2xl mx-auto">
        Submitting this application doesn't activate your account instantly — our team reviews every school's details first.
      </p>
    </div>
  )
}