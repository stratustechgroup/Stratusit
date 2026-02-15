import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Solutions.css'

const steps = [
  {
    number: 'Step 01',
    title: 'Discovery Call',
    description: 'We learn about your business, current infrastructure, pain points, and goals. No sales pitch\u2014just a conversation.',
  },
  {
    number: 'Step 02',
    title: 'Assessment & Strategy',
    description: 'Our team audits your existing systems and delivers a clear, prioritized roadmap with transparent pricing.',
  },
  {
    number: 'Step 03',
    title: 'Implementation',
    description: 'We deploy solutions with minimal disruption to your operations. Migration, setup, training\u2014all handled.',
  },
  {
    number: 'Step 04',
    title: 'Ongoing Support',
    description: "Proactive monitoring, regular reviews, and always-available support. We're your IT department, without the overhead.",
  },
]

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            From first call to<br />
            <span className="text-muted">fully managed.</span>
          </h2>
          <p className="section-subtitle">
            Getting started is simple. We meet you where you are and build a
            roadmap to where you need to be.
          </p>
        </motion.div>

        <div className="steps">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({ step, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      className="step"
      ref={ref}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index}
    >
      {!isLast && (
        <motion.div
          className="step-line"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
        />
      )}
      <motion.div
        className="step-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.15, duration: 0.4, type: 'spring', stiffness: 300 }}
      />
      <div className="step-content">
        <span className="step-number">{step.number}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </motion.div>
  )
}
