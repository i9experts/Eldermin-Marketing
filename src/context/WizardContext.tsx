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

  const nextStep = async () => {
    const stepKey = `step${step}` as keyof WizardData
    try {
      await fetch(`/api/v1/onboarding/step${step}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data[stepKey]),
      }).catch(() => {}) // ignore network errors in demo
    } catch {}
    if (step < 8) setStep(s => s + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(s => s - 1)
  }

  const submitWizard = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/v1/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {})
    } finally {
      setIsSubmitting(false)
      navigate('/dashboard')
    }
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
