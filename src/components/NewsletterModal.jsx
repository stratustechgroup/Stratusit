import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './NewsletterModal.css'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function NewsletterModal({ isOpen, onClose }) {
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setSending(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
        >
          <motion.div
            className="modal-container"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {!submitted ? (
              <motion.div variants={stagger} initial="hidden" animate="visible">
                <motion.div className="modal-glow" variants={fadeUp} />
                <motion.div className="modal-icon" variants={fadeUp}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 6 10-6"/>
                  </svg>
                </motion.div>
                <motion.h2 className="modal-title" variants={fadeUp}>
                  Stay in the loop
                </motion.h2>
                <motion.p className="modal-description" variants={fadeUp}>
                  Be the first to know when we launch new services. We&rsquo;ll
                  send updates on our expanding IT offerings&mdash;no spam, ever.
                </motion.p>

                <motion.form className="modal-form" onSubmit={handleSubmit} variants={fadeUp}>
                  <div className="modal-form-row">
                    <div className="form-group">
                      <label htmlFor="nl-first">First Name</label>
                      <input type="text" id="nl-first" name="firstName" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nl-last">Last Name</label>
                      <input type="text" id="nl-last" name="lastName" placeholder="Last name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nl-email">Email</label>
                    <input type="email" id="nl-email" name="email" placeholder="you@company.com" required />
                  </div>
                  <label className="modal-consent">
                    <input type="checkbox" name="consent" required />
                    <span>
                      I agree to receive email updates from Stratus Technology Group.
                      I understand I can unsubscribe at any time. By subscribing, I
                      acknowledge the <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                    </span>
                  </label>
                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending}
                  >
                    {sending ? 'Subscribing...' : 'Subscribe'}
                  </motion.button>
                </motion.form>
              </motion.div>
            ) : (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              >
                <motion.div
                  className="modal-success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', damping: 15, stiffness: 400 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                </motion.div>
                <h2 className="modal-title">You&rsquo;re in!</h2>
                <p className="modal-description">
                  Thanks for subscribing. We&rsquo;ll keep you updated when new
                  services are available.
                </p>
                <motion.button
                  className="btn btn-secondary"
                  onClick={handleClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
