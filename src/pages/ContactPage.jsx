import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      e.target.reset()
    }, 1000)
  }

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
            Fill out the form below and we&rsquo;ll get back to you within one business day.
            No commitment, no pressure&mdash;just a conversation about how we can help.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-page-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone <span className="form-optional">(optional)</span></label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="google-workspace">Google Workspace & Email</option>
                <option value="network">Network Setup & Management</option>
                <option value="compliance">Compliance & Consulting</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your business, current setup, and what you need help with..." />
            </div>
            <motion.button
              type="submit"
              className={`btn btn-primary btn-full ${submitted ? 'btn-success' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sending}
            >
              {sending ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>

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
                  <span>We&rsquo;ll review your submission within 24 hours</span>
                </li>
                <li>
                  <span className="expect-number">2</span>
                  <span>A team member will reach out to schedule a call</span>
                </li>
                <li>
                  <span className="expect-number">3</span>
                  <span>We&rsquo;ll assess your needs and propose a solution</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
