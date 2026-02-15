import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './AboutPage.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const values = [
  {
    title: 'Reliability First',
    description: 'Your business depends on technology that works. We design, deploy, and manage solutions with uptime as the top priority.',
  },
  {
    title: 'Compliance Built In',
    description: "Security and regulatory compliance aren't afterthoughts. They're embedded in every solution from day one.",
  },
  {
    title: 'Honest Partnership',
    description: 'We give straightforward advice, transparent pricing, and vendor-agnostic recommendations. Your success is our success.',
  },
  {
    title: 'Human Support',
    description: "When you reach out, you get a real person who knows your environment. No ticket queues, no scripted responses.",
  },
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="about-page">
      <div className="about-page-glow" />
      <div className="container">
        <motion.div
          className="about-header"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="section-tag" variants={fadeUp}>About Us</motion.span>
          <motion.h1 className="about-title" variants={fadeUp}>
            Technology should<br />
            <span className="gradient-text">empower your business.</span>
          </motion.h1>
          <motion.p className="about-intro" variants={fadeUp}>
            Stratus Technology Group was founded on a simple idea: businesses
            deserve IT that just works. No jargon, no finger-pointing, no
            surprise bills&mdash;just reliable technology managed by people who
            care about your outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-story"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-story-card">
            <h2>Our Mission</h2>
            <p>
              We exist to remove the complexity from business technology.
              Whether you&rsquo;re a healthcare practice that needs HIPAA-compliant
              email, a growing startup deploying its first cloud infrastructure,
              or an established firm looking for a proactive IT partner&mdash;we
              meet you where you are and build a roadmap to where you need to be.
            </p>
            <p>
              Based on a foundation of trust and transparency, we provide
              enterprise-grade solutions tailored for businesses of every size.
              Our team brings deep expertise across Google Workspace, compliance
              frameworks, cybersecurity, and cloud architecture.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What we stand for
          </h2>
          <div className="about-values-grid">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="about-value"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="about-value-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to work together?</h2>
          <p>Let&rsquo;s start with a conversation about your business and your goals.</p>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="btn btn-primary">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
