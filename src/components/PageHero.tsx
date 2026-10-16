import { Link } from 'react-router-dom'

export default function PageHero({ crumb, eyebrow, title, lead }: { crumb: string; eyebrow: string; title: React.ReactNode; lead: string }) {
  return (
    <section className="bg-navy-deep text-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-white/50 mb-4">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link> / {crumb}
        </p>
        <span className="font-mono text-xs text-gold uppercase tracking-widest">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight leading-[1.1]">{title}</h1>
        <p className="text-white/75 text-lg sm:text-xl leading-relaxed">{lead}</p>
      </div>
    </section>
  )
}
