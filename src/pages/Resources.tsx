import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'
import DetailDialog from '../components/DetailDialog'
import { Icon } from '../components/icons'
import { articles, type Article } from '../data/articles'

export default function Resources() {
  const [active, setActive] = useState<Article | null>(null)

  return (
    <div>
      <PageHero
        crumb="Resources"
        eyebrow="Resources"
        title={<>Useful thinking.<br />Practical next steps.</>}
        lead="Start with clear questions, prepare your team and explore what a connected school can look like."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map(a => (
              <div key={a.title} className="border border-line rounded-xl p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-5 rotate-3">
                  <Icon name={a.icon} size={22} className="text-navy -rotate-3" strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[10px] text-gold-dark uppercase tracking-widest">{a.type}</span>
                <h3 className="font-display font-semibold text-navy-deep mt-1.5 mb-2 leading-snug">{a.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{a.desc}</p>
                <button onClick={() => setActive(a)} className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors text-left">
                  Read the guide →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />
      <CtaBand />

      <DetailDialog open={!!active} onClose={() => setActive(null)} title={active?.title || ''}>
        {active && (
          <>
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">{active.type}</span>
            <div className="mt-4 space-y-4">
              {active.body.map((block, i) => (
                <div key={i}>
                  {block.h && <h4 className="font-display font-semibold text-navy-deep mb-1.5">{block.h}</h4>}
                  {block.p && <p className="text-sm text-ink leading-relaxed">{block.p}</p>}
                  {block.ul && (
                    <ul className="space-y-1.5 mt-1.5">
                      {block.ul.map(li => (
                        <li key={li} className="flex items-start gap-2.5 text-sm text-ink">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <Link to="/contact?intent=demo" className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-navy-deep font-display font-semibold px-6 py-3 rounded-lg transition-colors mt-6">
              Discuss your school <ArrowRight size={16} />
            </Link>
          </>
        )}
      </DetailDialog>
    </div>
  )
}
