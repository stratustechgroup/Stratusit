import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Solutions from './components/Solutions'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Solutions />
      <ContactCTA />
    </>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </>
  )
}
