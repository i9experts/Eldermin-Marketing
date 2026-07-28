import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import Legal from './pages/Legal'
import Signup from './pages/Signup'
import Wizard from './pages/Wizard'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import { WizardProvider } from './context/WizardContext'

export default function App() {
  return (
    <WizardProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/signup" element={<Signup />} />
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
