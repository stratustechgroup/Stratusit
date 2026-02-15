import { motion } from 'framer-motion'
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
            <a href="#" className="nav-logo">
              <span className="logo-icon">S</span>
              <span>Stratus</span>
            </a>
            <p>
              Managed IT services and cloud solutions for businesses that demand
              reliability.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">Google Workspace</a>
              <a href="#services">Managed IT</a>
              <a href="#services">Cybersecurity</a>
              <a href="#services">Cloud Solutions</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#why-us">Why Stratus</a>
              <a href="#solutions">How It Works</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2026 Stratus Technology Group. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
