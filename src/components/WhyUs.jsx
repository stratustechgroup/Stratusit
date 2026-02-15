import { motion } from 'framer-motion'
import './WhyUs.css'

const features = [
  {
    number: '01',
    title: 'Proactive, Not Reactive',
    description: 'We monitor and maintain your systems around the clock. Issues are resolved before they impact your business\u2014not after.',
  },
  {
    number: '02',
    title: 'Compliance-First Approach',
    description: 'From HIPAA to SOC 2, we build compliance into every solution from the ground up. No afterthoughts, no bolt-ons.',
  },
  {
    number: '03',
    title: 'Transparent Pricing',
    description: "No hidden fees, no surprise invoices. You'll always know exactly what you're paying for and what you're getting.",
  },
  {
    number: '04',
    title: 'Scalable Solutions',
    description: "Whether you're a 10-person team or a 500-person operation, our solutions grow with you without missing a step.",
  },
  {
    number: '05',
    title: 'Vendor-Agnostic',
    description: 'We recommend the best tools for your needs\u2014not the ones that pay us the highest commission. Your success is our metric.',
  },
  {
    number: '06',
    title: 'Real Humans, Real Support',
    description: 'When you call, a person answers. Our support team knows your environment and resolves issues with context, not scripts.',
  },
]

const cellVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Why Stratus</span>
          <h2 className="section-title">
            Built for businesses<br />
            <span className="text-muted">that can&rsquo;t afford downtime.</span>
          </h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.number}
              className="feature"
              variants={cellVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
            >
              <motion.div
                className="feature-number"
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
              >
                {feat.number}
              </motion.div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
