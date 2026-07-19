const topics = [
  { title: 'Reducing administrative burden in school offices', category: 'Guide' },
  { title: 'What to check before switching school management systems', category: 'Guide' },
  { title: 'Tarbiyah tracking alongside academic reporting', category: 'Feature' },
  { title: 'Data security basics every school should ask about', category: 'Security' },
]

export default function Resources() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Resources</span>
          <h1 className="text-4xl font-display font-bold text-navy-deep mt-3 mb-4">Coming soon</h1>
          <p className="text-slate text-xl">We're writing up real guides from what we've learned onboarding schools. Here's what's queued up:</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {topics.map(t => (
            <div key={t.title} className="border border-navy/10 rounded-xl p-6">
              <span className="text-xs font-mono font-semibold text-amber-dark uppercase tracking-wide">{t.category}</span>
              <h3 className="font-display font-semibold text-navy-deep mt-2 leading-snug">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
