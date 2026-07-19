import { useState } from 'react'
import { Check } from 'lucide-react'

const tabs = [
  { id: 'finance', label: 'Finance', headline: 'Fee reports built the way Pakistani schools actually format them', desc: 'Collection and outstanding reports group by class and section, with bold subtotals and totals — matching the layout admin staff already expect, not a generic export.', features: ['Fee collection & outstanding reports, summary or detail view', 'Class + section grouping with subtotals', 'Drag-and-drop PDF report designer', 'Auto-generated family codes linking siblings & guardians'] },
    { id: 'academics', label: 'Academics', headline: 'Curriculum, syllabus, and timetable, connected', desc: 'Academic structure — grades, sections, terms, subjects — flows through to timetabling and syllabus tracking without re-entering data in a second system.', features: ['Curriculum & syllabus coverage tracking', 'Timetable intelligence with conflict detection', 'Library catalogue & loans', 'Grade and section structure shared across modules'] },
    { id: 'admissions', label: 'Admissions', headline: 'From lead to enrolled, in one flow', desc: 'Applications, entrance details, and enrollment share the same record — no re-typing a student\'s details three times on the way in.', features: ['Online application intake', 'Lead-to-applicant conversion', 'Document upload & verification', 'Enrollment & class assignment'] },
    { id: 'students', label: 'Students', headline: 'One profile per student, not five', desc: 'Academic record, behaviour, documents, and family links sit on a single student profile instead of scattered spreadsheets.', features: ['Student 360 profile', 'Family / F.Code guardian linking', 'Behaviour & Tarbiyah tracking', 'Assessment & result history'] },
    { id: 'ai', label: 'AI Insights', headline: 'Claude-powered analytics, built in', desc: 'Eldermin\'s Analytics module calls Claude through our own backend — never exposing keys to the browser — to help surface patterns in the data you already have.', features: ['AI-generated insight summaries', 'Pattern flags across attendance & fees', 'Runs server-side through Eldermin\'s API', 'No separate AI subscription needed'] },
]

export default function ProductTabs() {
  const [active, setActive] = useState(tabs[0])
  return (
    <section className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">One platform, every need</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3">Built around how your school already works</h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-10 border-b border-navy/10">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActive(tab)}
              className={`px-4 py-3 font-medium text-sm border-b-2 -mb-px transition-colors ${active.id === tab.id ? 'border-amber text-navy-deep' : 'border-transparent text-slate-light hover:text-navy'}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-display font-semibold text-navy-deep mb-3">{active.headline}</h3>
            <p className="text-slate text-lg mb-6 leading-relaxed">{active.desc}</p>
            <ul className="space-y-2.5">
              {active.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-slate">
                  <Check size={16} className="text-emerald mt-1 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-navy/10 p-8">
            <div className="flex gap-1.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
            </div>
            <div className="font-mono text-xs text-slate-light uppercase tracking-wide mb-2">{active.label} module</div>
            <div className="font-display font-semibold text-navy-deep text-lg">{active.headline}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
