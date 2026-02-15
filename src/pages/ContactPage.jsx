import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ServiceWizard from '../components/ServiceWizard'
import './ContactPage.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="contact-page">
      <div className="contact-page-glow" />
      <div className="container">
        <motion.div
          className="contact-page-header"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="section-tag" variants={fadeUp}>Contact</motion.span>
          <motion.h1 className="contact-page-title" variants={fadeUp}>
            Let&rsquo;s talk about<br />
            <span className="gradient-text">your IT needs.</span>
          </motion.h1>
          <motion.p className="contact-page-subtitle" variants={fadeUp}>
            Answer a few quick questions and we&rsquo;ll prepare a tailored recommendation.
            No commitment, no pressure&mdash;just a conversation about how we can help.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-page-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ServiceWizard />

          <div className="contact-page-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 6 10-6"/>
                </svg>
              </div>
              <h4>Email Us</h4>
              <a href="mailto:hello@stratustg.com">hello@stratustg.com</a>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <h4>Visit Us Online</h4>
              <a href="https://stratustg.com" target="_blank" rel="noopener noreferrer">stratustg.com</a>
            </div>

            <div className="sidebar-card sidebar-card-dark">
              <h4>What to expect</h4>
              <ul className="expect-list">
                <li>
                  <span className="expect-number">1</span>
                  <span>We&rsquo;ll review your answers within 24 hours</span>
                </li>
                <li>
                  <span className="expect-number">2</span>
                  <span>A team member will reach out with a tailored recommendation</span>
                </li>
                <li>
                  <span className="expect-number">3</span>
                  <span>We&rsquo;ll schedule a call to finalize the plan</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
