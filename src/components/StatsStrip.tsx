const stats = [
  { value: '8', label: 'Schools live' },
  { value: '200+', label: 'Teachers using Eldermin daily' },
  { value: '~3,000', label: 'Students managed' },
  { value: '17', label: 'Modules, one platform' },
]

export default function StatsStrip() {
  return (
    <section className="bg-navy-deep border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map(s => (
            <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
              <div className="font-mono text-3xl md:text-4xl font-semibold text-amber">{s.value}</div>
              <div className="text-navy-pale/60 text-xs mt-1.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
