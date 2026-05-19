import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ImpactPage from './pages/ImpactPage'
import ExperiencePage from './pages/ExperiencePage'
import ExpertisePage from './pages/ExpertisePage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import AIInitiativesPage from './pages/AIInitiativesPage'
import ConnectPage from './pages/ConnectPage'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/about"          element={<AboutPage />} />
        <Route path="/impact"         element={<ImpactPage />} />
        <Route path="/experience"     element={<ExperiencePage />} />
        <Route path="/expertise"      element={<ExpertisePage />} />
        <Route path="/case-studies"   element={<CaseStudiesPage />} />
        <Route path="/ai-initiatives" element={<AIInitiativesPage />} />
        <Route path="/connect"        element={<ConnectPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
