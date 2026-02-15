import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-glow" />
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to simplify your IT?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tell us about your business and we&rsquo;ll show you exactly how we
            can help. No commitment, no pressure.
          </motion.p>
          <motion.div
            className="cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn btn-primary">
                Get in touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            <motion.a
              href="mailto:hello@stratustg.com"
              className="btn btn-secondary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              hello@stratustg.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
