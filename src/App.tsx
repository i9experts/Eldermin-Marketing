import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Resources from './pages/Resources'
import About from './pages/About'
import Legal from './pages/Legal'
import Signup from './pages/Signup'
import Wizard from './pages/Wizard'
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
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wizard" element={<Wizard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WizardProvider>
  )
}
