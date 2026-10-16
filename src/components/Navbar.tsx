import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import TopNote from './TopNote'

const links = [
  { to: '/product', label: 'Platform' },
  { to: '/modules', label: 'Modules' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="sticky top-0 z-50">
      <TopNote />
      <header className="bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" aria-label="Eldermin home"><Logo /></Link>

            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
              {links.map(l => (
                <Link key={l.to} to={l.to}
                  className={`font-medium text-sm transition-colors ${location.pathname === l.to ? 'text-navy' : 'text-ink/80 hover:text-navy'}`}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a href="https://app.eldermin.com/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink/70 hover:text-navy transition-colors">
                Sign in ↗
              </a>
              <Link to="/wizard" className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-navy-deep font-display font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                Get Started <ArrowRight size={15} />
              </Link>
            </div>

            <button className="lg:hidden p-2 text-navy" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-white px-4 py-5 space-y-1 max-h-[75vh] overflow-y-auto">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="block text-ink font-semibold py-2.5">{l.label}</Link>
            ))}
            <a href="https://app.eldermin.com/login" className="block text-ink font-semibold py-2.5">Sign in ↗</a>
            <Link to="/wizard" className="block text-center bg-gold text-navy-deep font-display font-semibold px-4 py-3 rounded-lg mt-3">Get Started →</Link>
          </div>
        )}
      </header>
    </div>
  )
}
