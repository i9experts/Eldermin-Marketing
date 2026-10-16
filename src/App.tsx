import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Modules from './pages/Modules'
import PricingPage from './pages/Pricing'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Wizard from './pages/Wizard'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import { WizardProvider } from './context/WizardContext'

// Keeps old /solutions/:slug bookmarks and links useful after the
// redesign replaced the Solutions section with the new Modules catalogue -
// most of the old slugs map onto a real category there.
const slugToCategory: Record<string, string> = {
  foundation: 'Foundation', people: 'People', finance: 'Finance',
  admissions: 'Admissions', academics: 'Academics', students: 'Students', intelligence: 'Intelligence',
}
function SolutionDetailRedirect() {
  const { slug } = useParams()
  const category = slugToCategory[slug || '']
  return <Navigate to={category ? `/modules?category=${category}` : '/modules'} replace />
}

export default function App() {
  return (
    <WizardProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />

            {/* Retired pages from the previous information architecture -
                redirected rather than removed outright, so old bookmarks
                and inbound links still land somewhere useful. */}
            <Route path="/solutions" element={<Navigate to="/modules" replace />} />
            <Route path="/solutions/:slug" element={<SolutionDetailRedirect />} />
            <Route path="/partners" element={<Navigate to="/contact?intent=partner" replace />} />
            <Route path="/signup" element={<Navigate to="/wizard" replace />} />

            <Route path="/wizard" element={<Wizard />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WizardProvider>
  )
}
