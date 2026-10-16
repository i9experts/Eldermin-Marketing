import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TopNote() {
  return (
    <div className="bg-navy text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="text-white/80">Built for schools that educate beyond academics.</span>
        <Link to="/about" className="inline-flex items-center gap-1 font-semibold text-gold hover:text-gold-light transition-colors whitespace-nowrap">
          Meet the people behind Eldermin <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  )
}
