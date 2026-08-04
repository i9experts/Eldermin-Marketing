import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Persisted so a refresh, an accidental tab close, or a switch to another tab and
// back doesn't throw away everything the applicant already typed in. Cleared only
// once the application has actually been submitted.
const STORAGE_KEY = 'eldermin_wizard_v1'

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

interface PersistedState {
  step: number
  data: WizardData
}

function loadPersisted(): PersistedState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.step !== 'number' || !parsed.data) return null
    return parsed
  } catch {
    // Corrupt or inaccessible storage (private browsing, quota, etc.) — fall back
    // to a fresh application rather than crashing the wizard.
    return null
  }
}

export function WizardProvider({ children }: { children: ReactNode }) {
  const persisted = loadPersisted()
  const [step, setStep] = useState(persisted?.step ?? 1)
  const [data, setData] = useState<WizardData>(persisted?.data ?? defaultData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }))
    } catch {
      // Non-fatal — worst case the applicant re-enters data after a refresh,
      // same as before this was added.
    }
  }, [step, data])

  const updateData = <K extends keyof WizardData>(stepKey: K, values: Partial<WizardData[K]>) => {
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

    // Primary: create a real, trackable Lead record in the CRM.
    try {
      await fetch(`${import.meta.env.VITE_API_URL || 'https://api.eldermin.com'}/api/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'onboarding_wizard',
          schoolName: d.step1.schoolName,
          schoolType: d.step1.schoolType,
          country: d.step1.country,
          city: d.step1.state,
          adminName: d.step2.adminName,
          adminEmail: d.step2.adminEmail,
          adminPhone: d.step2.adminPhone,
          adminRole: d.step2.role,
          studentCount: d.step3.studentCount,
          staffCount: d.step3.staffCount,
          classCount: d.step3.classCount,
          gradeRange: d.step3.gradeRange,
          modulesRequested: d.step4.modules,
          planRequested: d.step5.plan,
          integrationsRequested: d.step6.integrations,
          preferredTrainingDate: d.step7.preferredDate,
          preferredTrainingTime: d.step7.preferredTime,
          trainingMode: d.step7.trainingMode,
        }),
      })
    } catch {
      // Non-fatal — the mailto below still gets the request to a human either way.
    }

    // Supplementary: immediate email notification (also acts as a fallback
    // if the API call above fails for any reason).
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

    // Application is in — clear the draft so a future visit starts fresh
    // instead of resurrecting a submitted application.
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Non-fatal.
    }

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
