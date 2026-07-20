import { useState } from 'react'
import { ChevronLeft, ChevronRight, MonitorPlay } from 'lucide-react'
import type { Screenshot } from '../data/modules'

export default function ScreenshotCarousel({ screenshots, accent }: { screenshots: Screenshot[]; accent: string }) {
  const [index, setIndex] = useState(0)

  if (screenshots.length === 0) {
    return (
      <div className="rounded-xl border border-navy/10 bg-mist aspect-[16/10] flex flex-col items-center justify-center text-center p-8">
        <MonitorPlay size={28} className="text-navy/30 mb-3" strokeWidth={1.5} />
        <p className="text-slate-light text-sm max-w-xs">Real screenshots for this module are coming soon.</p>
      </div>
    )
  }

  const shot = screenshots[index]
  return (
    <div>
      <div className="relative rounded-xl border border-navy/10 overflow-hidden bg-navy-deep">
        <img src={shot.src} alt={shot.caption} className="w-full aspect-[16/10] object-cover object-top" />
        {screenshots.length > 1 && (
          <>
            <button onClick={() => setIndex(i => (i - 1 + screenshots.length) % screenshots.length)} aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow">
              <ChevronLeft size={16} className="text-navy-deep" />
            </button>
            <button onClick={() => setIndex(i => (i + 1) % screenshots.length)} aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow">
              <ChevronRight size={16} className="text-navy-deep" />
            </button>
          </>
        )}
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-slate text-sm">{shot.caption}</p>
        {screenshots.length > 1 && (
          <div className="flex gap-1.5 shrink-0 ml-4">
            {screenshots.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`Go to screenshot ${i + 1}`}
                className="w-1.5 h-1.5 rounded-full transition-all" style={{ background: i === index ? accent : '#D8DEE6' }} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
