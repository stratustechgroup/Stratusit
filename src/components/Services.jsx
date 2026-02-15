import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    title: 'Google Workspace & Email',
    description: 'Professional email setup and full Google Workspace deployment. We handle DNS, MX records, migration, and user provisioning\u2014so your team is productive from day one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 6 10-6"/>
      </svg>
    ),
    featured: true,
    badge: 'Most Popular',
    features: ['HIPAA compliance certification', 'Email migration from any provider', 'Security policies & DLP configuration', 'Admin console setup & training'],
  },
  {
    title: 'Managed IT Support',
    description: 'Proactive monitoring, helpdesk support, and on-site service when you need it. We keep your systems running so you never miss a beat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/><path d="M12 17v4"/>
      </svg>
    ),
    features: ['24/7 remote monitoring', 'Dedicated helpdesk team', 'Patch management & updates'],
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive threat protection from endpoint security to network monitoring. We identify vulnerabilities before they become breaches.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    features: ['Endpoint detection & response', 'Security audits & assessments', 'Employee security training'],
  },
  {
    title: 'Cloud Solutions',
    description: 'Seamless cloud migration, management, and optimization. Whether it\u2019s Azure, AWS, or Google Cloud\u2014we architect solutions that scale with you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    features: ['Cloud migration planning', 'Backup & disaster recovery', 'Cost optimization'],
  },
  {
    title: 'Network Infrastructure',
    description: 'From initial design to ongoing management, we build reliable, secure networks that form the backbone of your operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/>
        <path d="M12 8v4l-7 7"/><path d="M12 12l7 7"/>
      </svg>
    ),
    features: ['Network design & deployment', 'Firewall & VPN management', 'Wi-Fi optimization'],
  },
  {
    title: 'Compliance & Consulting',
    description: 'Navigate complex regulatory requirements with confidence. We help you achieve and maintain compliance across industry standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/>
      </svg>
    ),
    features: ['HIPAA, SOC 2, PCI-DSS', 'Risk assessments', 'Policy development'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            Everything your business needs.<br />
            <span className="text-muted">Nothing it doesn&rsquo;t.</span>
          </h2>
          <p className="section-subtitle">
            Enterprise-grade technology solutions, tailored for businesses that
            need reliability without the complexity.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`service-card ${service.featured ? 'service-card-featured' : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="service-icon">{service.icon}</div>
              {service.badge && <div className="service-badge">{service.badge}</div>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feat) => (
                  <li key={feat}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
