const stats = [
  { value: '17', label: 'Connected modules' },
  { value: 'One record', label: "Each student's school journey" },
  { value: 'Every role', label: 'Access shaped around your team' },
  { value: 'Whole child', label: 'Academics and development' },
]

export default function StatsStrip() {
  return (
    <section className="bg-navy-deep border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map(s => (
            <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
              <div className="font-display text-xl md:text-2xl font-bold text-gold">{s.value}</div>
              <div className="text-white/55 text-xs mt-1.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
