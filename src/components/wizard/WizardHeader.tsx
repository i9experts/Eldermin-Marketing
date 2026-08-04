import { Link } from 'react-router-dom'
import { X, Building2, UserCog, Users, Grid3x3, Wallet, Plug, GraduationCap, Rocket, Check } from 'lucide-react'

const steps = [
  { label: 'Institution', icon: Building2 },
  { label: 'Admin', icon: UserCog },
  { label: 'School Size', icon: Users },
  { label: 'Modules', icon: Grid3x3 },
  { label: 'Plan', icon: Wallet },
  { label: 'Integrations', icon: Plug },
  { label: 'Training', icon: GraduationCap },
  { label: 'Launch', icon: Rocket },
]

export default function WizardHeader({ step }: { step: number }) {
  return (
    <div className="bg-navy-deep rounded-t-2xl px-5 sm:px-8 pt-6 pb-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber flex items-center justify-center font-display font-extrabold text-navy-deep text-lg shrink-0">
            E
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm leading-tight">Eldermin ERP</div>
            <div className="text-navy-pale/60 text-xs leading-tight">New School Application</div>
          </div>
        </div>
        <Link to="/" aria-label="Close wizard" className="text-navy-pale/50 hover:text-white transition-colors">
          <X size={20} />
        </Link>
      </div>

      <div className="flex items-center overflow-x-auto no-scrollbar pr-6 -mr-6">
        {steps.map((s, i) => {
          const n = i + 1
          const state = n < step ? 'done' : n === step ? 'current' : 'upcoming'
          const Icon = s.icon
          return (
            <div key={s.label} className="flex items-center shrink-0">
              <div className="flex flex-col items-center gap-1.5 px-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors ${
                    state === 'done' ? 'bg-navy border-navy text-white'
                    : state === 'current' ? 'bg-amber border-amber text-navy-deep'
                    : 'bg-transparent border-white/15 text-white/30'
                  }`}
                >
                  {state === 'done' ? <Check size={16} /> : <Icon size={16} />}
                </div>
                <span className={`text-[10px] font-medium whitespace-nowrap ${state === 'upcoming' ? 'text-white/30' : 'text-navy-pale/80'}`}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 w-4 sm:w-8 -mt-4 ${n < step ? 'bg-navy' : 'bg-white/10'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
