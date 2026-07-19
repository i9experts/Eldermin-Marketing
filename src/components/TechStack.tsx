import { Shield, Database, Brain, Smartphone, Lock, Globe2 } from 'lucide-react'

const stack = [
  { icon: Database, label: 'Regional cloud hosting', desc: 'Data hosted on AWS infrastructure in the Mumbai (ap-south-1) region, close to Pakistan.' },
  { icon: Lock, label: 'Encrypted in transit', desc: 'All traffic runs over HTTPS/TLS. Access is controlled with role-based permissions throughout.' },
  { icon: Brain, label: 'AI insights, powered by Claude', desc: 'Analytics run through Eldermin\'s own backend proxy to Anthropic\'s API — API keys never touch the browser.' },
  { icon: Smartphone, label: 'Built mobile-first for parents', desc: 'The parent and student experience is designed to work well on a phone browser; native apps are on our roadmap.' },
  { icon: Shield, label: 'Role-based access control', desc: 'Every module is scoped to school and role — a teacher, accountant, and principal see different things by design.' },
  { icon: Globe2, label: 'Multi-campus, multi-tenant', desc: 'One institution can run multiple campuses from a single Eldermin account, with campus-level scoping.' },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Under the hood</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3">Built on modern infrastructure, honestly described</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {stack.map(item => (
            <div key={item.label} className="bg-white rounded-xl p-6 border border-navy/10">
              <item.icon size={20} className="text-navy mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-navy-deep mb-2">{item.label}</h3>
              <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
