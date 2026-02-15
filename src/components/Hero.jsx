import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated glow background */}
      <motion.div
        className="hero-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow-secondary"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div className="hero-badge" variants={fadeUp}>
          <span className="badge-dot" />
          Trusted IT Partner for Growing Businesses
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp}>
          IT infrastructure<br />
          that just <span className="gradient-text">works.</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeUp}>
          From Google Workspace deployment to full-scale cybersecurity, we handle
          your technology so you can focus on what matters&mdash;your business.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp}>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="btn btn-primary">
              Start a conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
          <motion.a
            href="#services"
            className="btn btn-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore services
          </motion.a>
        </motion.div>

        <motion.div className="hero-stats" variants={scaleIn}>
          <Stat value="99.9%" label="Uptime guaranteed" />
          <div className="stat-divider" />
          <Stat value="HIPAA" label="Compliant solutions" />
        </motion.div>
      </motion.div>

      {/* Floating grid lines */}
      <div className="hero-grid" />
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <span className="stat-number">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
