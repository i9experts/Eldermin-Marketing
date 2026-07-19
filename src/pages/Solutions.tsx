import { Link } from 'react-router-dom'

const solutions = [
  { id: 'admissions', title: 'Admissions', desc: 'End-to-end enrollment from application to admission, sharing one record the whole way through.', features: ['Online application intake', 'Document upload & verification', 'Lead-to-applicant conversion', 'Enrollment & class assignment'] },
  { id: 'academics', title: 'Academics', desc: 'Timetabling, attendance, grading, and syllabus tracking, all reading from the same academic structure.', features: ['Conflict-free timetabling', 'Digital gradebook', 'Syllabus coverage tracking', 'Curriculum intelligence'] },
  { id: 'finance', title: 'Finance & fees', desc: 'Fee collection and reporting formatted the way Pakistani school admin offices actually use them.', features: ['Class & section fee reports', 'Automated reminders', 'Procurement & purchase workflow', 'Audit trails'] },
  { id: 'hr', title: 'HR & payroll', desc: 'Staff records, payroll, and leave, in the same system as everything else — not a separate spreadsheet.', features: ['Staff database', 'Payroll computation', 'Leave management', 'Staff portal'] },
  { id: 'comms', title: 'Behaviour & Tarbiyah', desc: 'Salah attendance, Hifz progress, and Islamic Studies grading, tracked on the same student profile as academics.', features: ['Salah attendance tracking', 'Quran memorisation progress', 'Tarbiyah report card', 'Behaviour records'] },
]

export default function Solutions() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mt-3 mb-4">Every part of running a school, in one place</h1>
          <p className="text-slate text-xl">Five areas. One connected system underneath all of them.</p>
        </div>
        <div className="space-y-16">
          {solutions.map(s => (
            <div key={s.id} id={s.id} className="grid md:grid-cols-2 gap-12 items-center border-t border-navy/10 pt-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-deep mb-3">{s.title}</h2>
                <p className="text-slate text-lg mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => <li key={f} className="flex items-center gap-2.5 text-slate"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" /> {f}</li>)}
                </ul>
                <Link to="/signup" className="inline-block bg-navy hover:bg-navy-mid text-white font-display font-semibold px-6 py-3 rounded-lg transition-colors">Get started</Link>
              </div>
              <div className="bg-mist rounded-xl h-56 border border-navy/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
