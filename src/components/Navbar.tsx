import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const solutions = [
  { label: 'Admissions', href: '/solutions#admissions' },
  { label: 'Academics', href: '/solutions#academics' },
  { label: 'Finance', href: '/solutions#finance' },
  { label: 'HR & Payroll', href: '/solutions#hr' },
  { label: 'Communication', href: '/solutions#comms' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
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
            <div className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <button className="flex items-center gap-1 text-navy font-medium hover:text-amber transition-colors">
                Solutions <ChevronDown size={16} />
              </button>
              {dropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-xl p-2 w-48 border border-gray-100">
                  {solutions.map(s => (
                    <Link key={s.label} to={s.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-mist hover:text-navy rounded-lg transition-colors">{s.label}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/resources" className="text-navy font-medium hover:text-amber transition-colors">Resources</Link>
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {solutions.map(s => <Link key={s.label} to={s.href} className="block text-navy py-1">{s.label}</Link>)}
          <Link to="/resources" className="block text-navy py-1">Resources</Link>
          <Link to="/about" className="block text-navy py-1">About</Link>
          <a href="https://app.eldermin.com/login" className="block text-navy py-1">Sign In</a>
          <Link to="/signup" className="block bg-amber text-white font-semibold px-4 py-2 rounded-lg text-center mt-2">Get Started</Link>
        </div>
      )}
    </nav>
  )
}