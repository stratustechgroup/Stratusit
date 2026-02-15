import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './LegalPage.css'

export default function TermsPage() {
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
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last updated: February 15, 2026</p>
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Stratus Technology Group website and services, you agree to
            be bound by these Terms of Service. If you do not agree to these terms, please do not
            use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            Stratus Technology Group provides managed IT services, including but not limited to
            Google Workspace setup and management, compliance consulting, cybersecurity solutions,
            cloud infrastructure, and network management. Specific service terms, scope, and pricing
            will be outlined in individual service agreements between Stratus Technology Group and
            the client.
          </p>

          <h2>3. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Infringe upon the rights of others</li>
            <li>Restrict or inhibit anyone else&rsquo;s use of the website</li>
            <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
            <li>Transmit any harmful, threatening, or offensive material</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, icons, images, and
            software, is the property of Stratus Technology Group or its content suppliers and is
            protected by United States and international copyright laws. You may not reproduce,
            distribute, or create derivative works from any content without our express written
            permission.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided &ldquo;as is&rdquo; without warranties of any
            kind, either express or implied. Stratus Technology Group does not warrant that the
            website will be uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Stratus Technology Group shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising from your
            use of or inability to use the website or services, even if we have been advised of the
            possibility of such damages.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Stratus Technology Group, its officers,
            directors, employees, and agents from any claims, damages, losses, or expenses arising
            from your use of the website or violation of these terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of
            the United States, without regard to conflict of law principles.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to the website. Your continued use of the website
            after any changes constitutes acceptance of the new terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:hello@stratustg.com">hello@stratustg.com</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
