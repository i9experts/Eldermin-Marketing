const points = [
  { label: 'One record, not five', desc: 'A student\'s admission, fees, grades, and behaviour history live on one profile — not scattered across a fee register, an Excel gradebook, and a paper file.' },
  { label: 'Reports schools can actually print', desc: 'Fee collection and outstanding reports come out grouped by class and section with proper subtotals — ready to hand to a principal, not a raw data export.' },
  { label: 'Built for how you already work', desc: 'Prayer times in the timetable, Hijri dates, gender-separated portals — these aren\'t configuration options bolted onto a Western template.' },
]

export default function ROISection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Why schools switch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3">Less re-typing, fewer systems, one source of truth</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map(p => (
            <div key={p.label} className="border-t-2 border-amber pt-5">
              <h3 className="font-display font-semibold text-navy-deep text-lg mb-2">{p.label}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
