import { allModuleNames as modules } from '../data/modules'

export default function Marquee() {
  return (
    <section className="py-9 bg-mist border-y border-navy/10 overflow-hidden">
      <p className="text-center text-xs font-mono font-semibold text-slate-light uppercase tracking-widest mb-5">
        Every one of these, in one platform
      </p>
      <div className="flex gap-3 whitespace-nowrap" style={{ animation: 'marquee 38s linear infinite' }}>
        {[...modules, ...modules].map((name, i) => (
          <span key={i} className="inline-flex items-center text-navy font-medium text-sm px-4 py-1.5 bg-white rounded-md shrink-0 border border-navy/10">
            {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  )
}
