const groups = [
  { name: 'Foundation', color: '#0C447C', modules: ['Organization', 'Compliance & Governance', 'Documents & Workflow'] },
  { name: 'People', color: '#154E86', modules: ['Human Resource', 'Teacher Module'] },
  { name: 'Finance & Administration', color: '#EF9F27', modules: ['Financial Module', 'Procurement & Purchase', 'Campus Operations'] },
  { name: 'Admissions', color: '#1E8E5A', modules: ['Admission Life Cycle'] },
  { name: 'Academics', color: '#3E7CB1', modules: ['Curriculum Intelligence', 'Syllabus Coverage', 'Timetable Intelligence', 'Library Management'] },
  { name: 'Students', color: '#C97E12', modules: ['Student Profile', 'Assessment', 'Behaviour & Tarbiyah'] },
  { name: 'Intelligence', color: '#071A2C', modules: ['Data Intelligence'] },
]

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">All 17 modules</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3">Everything a school runs, grouped the way you'd actually think about it</h2>
          <p className="text-slate text-lg">No add-on marketplace to shop through later. Every module below ships as part of Eldermin.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(g => (
            <div key={g.name} className="rounded-xl border border-navy/10 p-6 hover:border-navy/25 transition-colors">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
                <h3 className="font-display font-semibold text-navy-deep text-sm tracking-wide">{g.name}</h3>
              </div>
              <ul className="space-y-2">
                {g.modules.map(m => (
                  <li key={m} className="text-slate text-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2.5 before:h-px before:bg-navy/20">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
