import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate submission — replace with actual endpoint
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      e.target.reset()
    }, 1000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="section-title">
              Ready to simplify<br />your IT?
            </h2>
            <p className="section-subtitle">
              Tell us about your business and we&rsquo;ll show you exactly how we
              can help. No commitment, no pressure.
            </p>
            <div className="contact-info">
              <motion.a
                href="mailto:hello@stratustg.com"
                className="contact-link"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 6 10-6"/>
                </svg>
                hello@stratustg.com
              </motion.a>
              <motion.a
                href="https://stratustg.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
                stratustg.com
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
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
                <label htmlFor="service">Service of Interest</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="google-workspace">Google Workspace & Email</option>
                  <option value="managed-it">Managed IT Support</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="network">Network Infrastructure</option>
                  <option value="compliance">Compliance & Consulting</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your needs..." />
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
          </motion.form>
        </div>
      </div>
    </section>
  )
}
