import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import MegaMenu from './MegaMenu'
import { moduleGroups } from '../data/modules'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/"><Logo /></Link>
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group h-16 flex items-center">
              <button className="flex items-center gap-1 text-navy font-medium group-hover:text-amber transition-colors">
                Modules <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 pt-2">
                <MegaMenu />
              </div>
            </div>
            <Link to="/resources" className="text-navy font-medium hover:text-amber transition-colors">Resources</Link>
            <Link to="/contact" className="text-navy font-medium hover:text-amber transition-colors">Contact</Link>
            <Link to="/about" className="text-navy font-medium hover:text-amber transition-colors">About</Link>
            <a href="https://app.eldermin.com/login" className="text-navy font-medium hover:text-amber transition-colors">Sign In</a>
            <Link to="/signup" className="bg-amber hover:bg-amber-dark text-white font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
              Get Started
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <button onClick={() => setMobileModulesOpen(!mobileModulesOpen)} className="w-full flex items-center justify-between text-navy font-semibold py-2">
            Modules <ChevronDown size={16} className={`transition-transform ${mobileModulesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileModulesOpen && (
            <div className="pl-3 pb-2 space-y-4">
              {moduleGroups.map(g => (
                <div key={g.slug}>
                  <Link to={`/solutions/${g.slug}`} className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wide text-navy-deep mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: g.color }} /> {g.name}
                  </Link>
                  {g.modules.map(m => (
                    <Link key={m.name} to={`/solutions/${g.slug}`} className="block text-sm text-slate py-1">{m.name}</Link>
                  ))}
                </div>
              ))}
            </div>
          )}
          <Link to="/resources" className="block text-navy font-semibold py-2">Resources</Link>
          <Link to="/contact" className="block text-navy font-semibold py-2">Contact</Link>
          <Link to="/about" className="block text-navy font-semibold py-2">About</Link>
          <a href="https://app.eldermin.com/login" className="block text-navy font-semibold py-2">Sign In</a>
          <Link to="/signup" className="block bg-amber text-white font-semibold px-4 py-2.5 rounded-lg text-center mt-3">Get Started</Link>
        </div>
      )}
    </nav>
  )
}
