import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './LegalPage.css'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="legal-page">
      <div className="container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Legal</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: February 15, 2026</p>
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>1. Information We Collect</h2>
          <p>
            When you visit our website or contact us, we may collect the following information:
          </p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company name that you voluntarily provide via our contact form.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and browser type.</li>
            <li><strong>Cookies:</strong> We may use cookies and similar technologies to improve your browsing experience and analyze website traffic.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Communicate with you about our services, updates, and promotions</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to
            third parties without your consent, except as necessary to provide our services or as
            required by law. We may share information with trusted third-party service providers who
            assist us in operating our website and conducting our business, provided they agree to
            keep this information confidential.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the Internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices or content of these external sites. We encourage you to review their
            privacy policies before providing any personal information.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or your personal data, please contact us
            at <a href="mailto:hello@stratustg.com">hello@stratustg.com</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
