import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="py-24 min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <div className="font-mono text-amber-dark text-sm mb-3">404</div>
        <h1 className="text-3xl font-display font-bold text-navy-deep mb-4 tracking-tight">Page not found</h1>
        <p className="text-slate mb-8 max-w-sm mx-auto">That page doesn't exist, or the link may be out of date.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
