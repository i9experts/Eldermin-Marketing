import { createContext, useContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface WizardData {
  step1: { schoolName: string; schoolType: string; country: string; state: string }
  step2: { adminName: string; adminEmail: string; adminPhone: string; role: string }
  step3: { studentCount: string; staffCount: string; classCount: string; gradeRange: string }
  step4: { modules: string[] }
  step5: { plan: string; billingCycle: string }
  step6: { integrations: string[] }
  step7: { preferredDate: string; preferredTime: string; trainingMode: string }
  step8: { termsAccepted: boolean; dataPolicy: boolean; signature: string }
}

interface WizardContextType {
  step: number
  data: WizardData
  setStep: (s: number) => void
  updateData: (stepKey: keyof WizardData, values: Partial<WizardData[keyof WizardData]>) => void
  nextStep: () => void
  prevStep: () => void
  submitWizard: () => Promise<void>
  isSubmitting: boolean
}

const defaultData: WizardData = {
  step1: { schoolName: '', schoolType: '', country: '', state: '' },
  step2: { adminName: '', adminEmail: '', adminPhone: '', role: '' },
  step3: { studentCount: '', staffCount: '', classCount: '', gradeRange: '' },
  step4: { modules: [] },
  step5: { plan: '', billingCycle: 'annual' },
  step6: { integrations: [] },
  step7: { preferredDate: '', preferredTime: '', trainingMode: '' },
  step8: { termsAccepted: false, dataPolicy: false, signature: '' },
}

const WizardContext = createContext<WizardContextType | null>(null)

export function WizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<WizardData>(defaultData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const updateData = (stepKey: keyof WizardData, values: any) => {
    setData(prev => ({ ...prev, [stepKey]: { ...prev[stepKey], ...values } }))
  }

  const nextStep = () => {
    if (step < 8) setStep(s => s + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(s => s - 1)
  }

  const submitWizard = async () => {
    setIsSubmitting(true)
    const d = data
    const subject = encodeURIComponent(`New onboarding request: ${d.step1.schoolName || 'Unnamed school'}`)
    const body = encodeURIComponent(
      `SCHOOL\nName: ${d.step1.schoolName}\nType: ${d.step1.schoolType}\nCountry: ${d.step1.country}\nCity: ${d.step1.state}\n\n` +
      `ADMINISTRATOR\nName: ${d.step2.adminName}\nEmail: ${d.step2.adminEmail}\nPhone: ${d.step2.adminPhone}\nRole: ${d.step2.role}\n\n` +
      `SCHOOL SIZE\nStudents: ${d.step3.studentCount}\nStaff: ${d.step3.staffCount}\nClasses: ${d.step3.classCount}\nGrade range: ${d.step3.gradeRange}\n\n` +
      `MODULES SELECTED\n${d.step4.modules.join(', ') || 'None selected'}\n\n` +
      `PLAN\n${d.step5.plan}\n\n` +
      `INTEGRATIONS\n${d.step6.integrations.join(', ') || 'None selected'}\n\n` +
      `TRAINING\nDate: ${d.step7.preferredDate}\nTime: ${d.step7.preferredTime}\nMode: ${d.step7.trainingMode}\n\n` +
      `Signed: ${d.step8.signature}`
    )
    window.location.href = `mailto:sales@eldermin.com?subject=${subject}&body=${body}`
    setIsSubmitting(false)
    navigate('/thank-you')
  }

  return (
    <WizardContext.Provider value={{ step, data, setStep, updateData, nextStep, prevStep, submitWizard, isSubmitting }}>
      {children}
    </WizardContext.Provider>
  )
}

export const useWizard = () => {
  const ctx = useContext(WizardContext)
  if (!ctx) throw new Error('useWizard must be used within WizardProvider')
  return ctx
}
