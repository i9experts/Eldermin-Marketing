import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const groups = [
  { label: 'Foundation', angle: -150, dist: 140 },
  { label: 'People', angle: -90, dist: 155 },
  { label: 'Finance', angle: -30, dist: 140 },
  { label: 'Academics', angle: 30, dist: 150 },
  { label: 'Students', angle: 90, dist: 155 },
  { label: 'Intelligence', angle: 150, dist: 140 },
]

function polar(angleDeg: number, dist: number, cx: number, cy: number) {
  const a = (angleDeg * Math.PI) / 180
  return { x: cx + dist * Math.cos(a), y: cy + dist * Math.sin(a) }
}

export default function Hero() {
  const cx = 200, cy = 200
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 border border-white/15 text-blue-200/80 text-xs font-mono px-3 py-1.5 rounded-md mb-7 tracking-wide">
            Live in 8 schools across Pakistan
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-display font-bold text-white leading-[1.08] mb-6">
            Seventeen school systems.<br />
            <span className="text-amber">One operating system.</span>
          </h1>
          <p className="text-navy-pale/80 text-lg mb-9 leading-relaxed max-w-lg">
            Eldermin runs admissions, academics, finance, HR, and Tarbiyah for Islamic schools from a single platform — so nothing lives in a separate spreadsheet, register, or app ever again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold px-7 py-3.5 rounded-lg text-base transition-colors">
              Start Free Trial <ArrowRight size={17} />
            </Link>
            <a href="#modules" className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-base transition-colors border border-white/20 hover:border-white/40">
              See what's inside
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="w-full max-w-md">
            {groups.map((g, i) => {
              const p = polar(g.angle, g.dist, cx, cy)
              return (
                <line key={`l-${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y}
                  stroke="#154E86" strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
              )
            })}
            {groups.map((g, i) => {
              const p = polar(g.angle, g.dist, cx, cy)
              return (
                <g key={`n-${i}`}>
                  <circle cx={p.x} cy={p.y} r="26" fill="#0C447C" stroke="#154E86" strokeWidth="1" />
                  <text x={p.x} y={p.y + 4} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="9.5" fontWeight="600" fill="#DCEAF7">
                    {g.label}
                  </text>
                </g>
              )
            })}
            <circle cx={cx} cy={cy} r="46" fill="#EF9F27" />
            <text x={cx} y={cy - 3} textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="15" fontWeight="700" fill="#071A2C">Eldermin</text>
            <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#3E2609">17 modules</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
