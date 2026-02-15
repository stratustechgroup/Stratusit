import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Logo size={32} />
              <span className="logo-text">stratus<span className="logo-accent">tg</span></span>
            </Link>
            <p>
              Managed IT services and cloud solutions for businesses that demand
              reliability.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/#services">Google Workspace</a>
              <a href="/#services">Network Management</a>
              <a href="/#services">Compliance & Consulting</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2026 Stratus Technology Group. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
