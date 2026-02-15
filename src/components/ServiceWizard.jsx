import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ServiceWizard.css'

const SERVICE_QUESTIONS = {
  'google-workspace': {
    label: 'Google Workspace & Email',
    desc: 'Professional email, cloud storage, and collaboration tools.',
    questions: [
      {
        id: 'team_size',
        label: 'How many people need email accounts?',
        type: 'select',
        options: ['1-5', '6-15', '16-50', '51-100', '100+'],
      },
      {
        id: 'current_provider',
        label: 'What email provider do you currently use?',
        type: 'select',
        options: ['Gmail (personal)', 'Microsoft Outlook / 365', 'Yahoo', 'GoDaddy', 'None', 'Other'],
      },
      {
        id: 'migration_needed',
        label: 'Do you need to migrate existing emails and data?',
        type: 'select',
        options: ['Yes', 'No', 'Not sure'],
      },
      {
        id: 'compliance',
        label: 'Does your industry require specific compliance?',
        type: 'select',
        options: ['HIPAA (Healthcare)', 'PCI-DSS (Payment/Finance)', 'FERPA (Education)', 'None', 'Not sure'],
      },
      {
        id: 'timeline',
        label: "What's your ideal timeline?",
        type: 'select',
        options: ['ASAP', 'Within 1 month', 'Within 3 months', 'Just exploring'],
      },
    ],
  },
  'network': {
    label: 'Network Setup & Management',
    desc: 'Reliable, secure networks for your office.',
    questions: [
      {
        id: 'locations',
        label: 'How many office locations do you have?',
        type: 'select',
        options: ['1', '2-3', '4-10', '10+'],
      },
      {
        id: 'employee_count',
        label: 'Approximate number of employees?',
        type: 'select',
        options: ['1-10', '11-25', '26-50', '51-100', '100+'],
      },
      {
        id: 'existing_infrastructure',
        label: 'Do you have existing network infrastructure?',
        type: 'select',
        options: ['Yes, fully set up', 'Yes, partially', 'No, starting fresh'],
      },
      {
        id: 'network_needs',
        label: 'What do you need?',
        type: 'multi',
        options: ['Office Wi-Fi', 'Cabling / wiring', 'Firewall & VPN', 'Network monitoring', 'Security cameras', 'Other'],
      },
      {
        id: 'timeline',
        label: "What's your ideal timeline?",
        type: 'select',
        options: ['ASAP', 'Within 1 month', 'Within 3 months', 'Just exploring'],
      },
    ],
  },
  'website': {
    label: 'Website Hosting & Management',
    desc: 'Fast, secure hosting and ongoing maintenance.',
    questions: [
      {
        id: 'existing_site',
        label: 'Do you have an existing website?',
        type: 'select',
        options: ['Yes', 'No, starting fresh'],
      },
      {
        id: 'platform',
        label: 'What platform is it built on?',
        type: 'select',
        options: ['WordPress', 'Squarespace', 'Wix', 'Shopify', 'Custom-built', "Don't know", 'N/A'],
      },
      {
        id: 'current_hosting',
        label: 'Where is your site currently hosted?',
        type: 'select',
        options: ['GoDaddy', 'Bluehost', 'AWS', 'Google Cloud', "Don't know", 'N/A — no site yet'],
      },
      {
        id: 'domain_needed',
        label: 'Do you need a domain name?',
        type: 'select',
        options: ['Yes', 'Already have one', 'Not sure'],
      },
      {
        id: 'website_needs',
        label: 'What do you need help with?',
        type: 'multi',
        options: ['Hosting & migration', 'SSL & security', 'Full redesign', 'Content updates', 'Ongoing maintenance', 'Performance / speed', 'SEO basics', 'Email integration'],
      },
      {
        id: 'site_purpose',
        label: 'What is the primary purpose of your website?',
        type: 'select',
        options: ['Company info / brochure', 'Lead generation', 'E-commerce / online store', 'Blog / content', 'Client portal', 'Other'],
      },
      {
        id: 'monthly_visitors',
        label: 'Roughly how much traffic does your site get?',
        type: 'select',
        options: ['Under 1,000/mo', '1,000–10,000/mo', '10,000+/mo', 'No idea', 'N/A — no site yet'],
      },
      {
        id: 'timeline',
        label: "What's your ideal timeline?",
        type: 'select',
        options: ['ASAP', 'Within 1 month', 'Within 3 months', 'Just exploring'],
      },
    ],
  },
  'other': {
    label: 'Other / Not Sure',
    desc: "We'll help you figure out the right solution.",
    questions: [
      {
        id: 'pain_points',
        label: "What's your biggest IT frustration right now?",
        type: 'multi',
        options: ['Slow or unreliable internet', 'Email issues', 'Security concerns', 'No IT support', 'Outdated equipment', 'Website problems', 'Not sure where to start'],
      },
      {
        id: 'current_support',
        label: 'Do you currently have IT support?',
        type: 'select',
        options: ['Yes, in-house team', 'Yes, outsourced provider', 'One person wears many hats', 'No, we handle it ourselves'],
      },
      {
        id: 'industry',
        label: 'What industry are you in?',
        type: 'select',
        options: ['Healthcare', 'Legal', 'Finance', 'Real estate', 'Retail / restaurant', 'Construction / trades', 'Nonprofit', 'Other'],
      },
      {
        id: 'org_size',
        label: 'How many people are in your organization?',
        type: 'select',
        options: ['1-5', '6-15', '16-50', '51-100', '100+'],
      },
      {
        id: 'description',
        label: 'Anything else you want us to know?',
        type: 'textarea',
      },
      {
        id: 'timeline',
        label: "What's your ideal timeline?",
        type: 'select',
        options: ['ASAP', 'Within 1 month', 'Within 3 months', 'Just exploring'],
      },
    ],
  },
}

const SERVICES = [
  { id: 'google-workspace', label: 'Google Workspace & Email', desc: 'Email, Drive, Calendar & more', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>
    </svg>
  ), badge: 'Most Popular' },
  { id: 'network', label: 'Network Setup & Management', desc: 'Wi-Fi, firewall, VPN & cabling', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/>
      <path d="M12 8v4l-7 7"/><path d="M12 12l7 7"/>
    </svg>
  ) },
  { id: 'website', label: 'Website Hosting & Management', desc: 'Hosting, SSL, CMS & uptime', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ) },
  { id: 'other', label: 'Other / Not Sure', desc: "We'll figure it out together", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/>
    </svg>
  ) },
]

const TOTAL_STEPS = 4

const stepTransition = {
  initial: { opacity: 0, x: 50, filter: 'blur(4px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -50, filter: 'blur(4px)', transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="wizard-check-icon">
    <path d="M5 12l5 5L20 7" />
  </svg>
)

export default function ServiceWizard() {
  const [step, setStep] = useState(0)
  const [contact, setContact] = useState({ name: '', email: '', company: '', phone: '' })
  const [selectedService, setSelectedService] = useState(null)
  const [answers, setAnswers] = useState({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const progress = ((step + 1) / TOTAL_STEPS) * 100

  const stepLabels = ['Your Info', 'Service', 'Details', 'Review']

  function handleContactChange(e) {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleAnswerChange(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function handleMultiToggle(questionId, option) {
    setAnswers((prev) => {
      const current = prev[questionId] || []
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option]
      return { ...prev, [questionId]: next }
    })
  }

  function canAdvance() {
    if (step === 0) return contact.name.trim() && contact.email.trim()
    if (step === 1) return selectedService !== null
    if (step === 2) {
      const qs = SERVICE_QUESTIONS[selectedService].questions
      return qs.every((q) => {
        if (q.type === 'multi') return (answers[q.id] || []).length > 0
        if (q.type === 'textarea') return (answers[q.id] || '').trim().length > 0
        return !!answers[q.id]
      })
    }
    return true
  }

  function next() {
    if (canAdvance() && step < TOTAL_STEPS - 1) setStep((s) => s + 1)
  }

  function back() {
    if (step > 0) setStep((s) => s - 1)
  }

  function goToStep(s) {
    setStep(s)
  }

  function buildHtmlSummary() {
    const svc = SERVICE_QUESTIONS[selectedService]
    let html = `<h2 style="color:#1a1a1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">New Lead from Stratus Website</h2>`
    html += `<hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;"/>`
    html += `<h3 style="color:#333;">Contact Information</h3>`
    html += `<p><strong>Name:</strong> ${contact.name}</p>`
    html += `<p><strong>Email:</strong> ${contact.email}</p>`
    if (contact.company) html += `<p><strong>Company:</strong> ${contact.company}</p>`
    if (contact.phone) html += `<p><strong>Phone:</strong> ${contact.phone}</p>`
    html += `<hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;"/>`
    html += `<h3 style="color:#333;">Service: ${svc.label}</h3>`
    svc.questions.forEach((q) => {
      const val = answers[q.id]
      const display = Array.isArray(val) ? val.join(', ') : val
      html += `<p><strong>${q.label}</strong><br/>${display}</p>`
    })
    return html
  }

  async function handleSubmit() {
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact,
          service: SERVICE_QUESTIONS[selectedService].label,
          answers,
          summaryHtml: buildHtmlSummary(),
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="wizard-card wizard-success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wizard-success-glow" />
        <div className="wizard-success-check">
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <path d="M5 12l5 5L20 7" />
          </motion.svg>
        </div>
        <h3>We&rsquo;ve got your details!</h3>
        <p>
          Thanks, {contact.name.split(' ')[0]}. We&rsquo;ll review everything and get back to
          you within one business day.
        </p>
        <span className="wizard-success-email">{contact.email}</span>
      </motion.div>
    )
  }

  return (
    <div className="wizard-card">
      {/* Ambient glow at top */}
      <div className="wizard-glow" />

      {/* Progress bar */}
      <div className="wizard-progress">
        <motion.div
          className="wizard-progress-bar"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Step indicators with connecting line */}
      <div className="wizard-steps">
        <div className="wizard-steps-track">
          {stepLabels.map((label, i) => (
            <div key={label} className={`wizard-step-item ${i < step ? 'completed' : ''} ${i === step ? 'current' : ''} ${i > step ? 'upcoming' : ''}`}>
              <div className="wizard-step-circle">
                {i < step ? <Check /> : <span>{i + 1}</span>}
              </div>
              <span className="wizard-step-label">{label}</span>
              {i < stepLabels.length - 1 && (
                <div className={`wizard-step-connector ${i < step ? 'filled' : ''}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="wizard-body">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="contact" className="wizard-step-content" {...stepTransition}>
              <div className="wizard-step-header">
                <span className="wizard-step-tag">Step 1 of 4</span>
                <h3 className="wizard-step-title">Tell us about yourself</h3>
                <p className="wizard-step-desc">So we know how to reach you.</p>
              </div>
              <div className="wizard-fields">
                <div className="wizard-row">
                  <div className="form-group">
                    <label htmlFor="w-name">Full name <span className="wizard-required">*</span></label>
                    <input type="text" id="w-name" name="name" placeholder="John Smith" value={contact.name} onChange={handleContactChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="w-email">Work email <span className="wizard-required">*</span></label>
                    <input type="email" id="w-email" name="email" placeholder="john@company.com" value={contact.email} onChange={handleContactChange} required />
                  </div>
                </div>
                <div className="wizard-row">
                  <div className="form-group">
                    <label htmlFor="w-company">Company name</label>
                    <input type="text" id="w-company" name="company" placeholder="Acme Inc." value={contact.company} onChange={handleContactChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="w-phone">Phone <span className="form-optional">(optional)</span></label>
                    <input type="tel" id="w-phone" name="phone" placeholder="(555) 000-0000" value={contact.phone} onChange={handleContactChange} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="service" className="wizard-step-content" {...stepTransition}>
              <div className="wizard-step-header">
                <span className="wizard-step-tag">Step 2 of 4</span>
                <h3 className="wizard-step-title">What can we help you with?</h3>
                <p className="wizard-step-desc">Pick the service that best matches your needs.</p>
              </div>
              <div className="wizard-service-grid">
                {SERVICES.map((svc) => (
                  <motion.button
                    key={svc.id}
                    type="button"
                    className={`wizard-svc ${selectedService === svc.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedService(svc.id)
                      setAnswers({})
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {svc.badge && <span className="wizard-svc-badge">{svc.badge}</span>}
                    <div className="wizard-svc-icon-wrap">
                      <div className="wizard-svc-icon">{svc.icon}</div>
                    </div>
                    <span className="wizard-svc-name">{svc.label}</span>
                    <span className="wizard-svc-desc">{svc.desc}</span>
                    <div className="wizard-svc-radio">
                      {selectedService === svc.id && (
                        <motion.div
                          className="wizard-svc-radio-fill"
                          layoutId="serviceRadio"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && selectedService && (
            <motion.div key="questions" className="wizard-step-content" {...stepTransition}>
              <div className="wizard-step-header">
                <span className="wizard-step-tag">Step 3 of 4</span>
                <h3 className="wizard-step-title">A few quick questions</h3>
                <p className="wizard-step-desc">Help us understand your {SERVICE_QUESTIONS[selectedService].label.toLowerCase()} needs.</p>
              </div>
              <div className="wizard-fields wizard-questions">
                {SERVICE_QUESTIONS[selectedService].questions.map((q, qi) => (
                  <div className="wizard-question" key={q.id}>
                    <label className="wizard-question-label">
                      <span className="wizard-question-num">{qi + 1}</span>
                      {q.label}
                    </label>
                    {q.type === 'select' && (
                      <div className="wizard-option-group">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            className={`wizard-pill ${answers[q.id] === opt ? 'selected' : ''}`}
                            onClick={() => handleAnswerChange(q.id, opt)}
                          >
                            {answers[q.id] === opt && <Check />}
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    {q.type === 'multi' && (
                      <>
                        <span className="wizard-multi-hint">Select all that apply</span>
                        <div className="wizard-option-group">
                          {q.options.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              className={`wizard-pill ${(answers[q.id] || []).includes(opt) ? 'selected' : ''}`}
                              onClick={() => handleMultiToggle(q.id, opt)}
                            >
                              {(answers[q.id] || []).includes(opt) && <Check />}
                              {opt}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                    {q.type === 'textarea' && (
                      <textarea
                        rows="4"
                        placeholder="Describe what you're looking for..."
                        value={answers[q.id] || ''}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="review" className="wizard-step-content" {...stepTransition}>
              <div className="wizard-step-header">
                <span className="wizard-step-tag">Step 4 of 4</span>
                <h3 className="wizard-step-title">Review &amp; submit</h3>
                <p className="wizard-step-desc">Double-check everything before we send it over.</p>
              </div>

              <div className="wizard-review">
                <div className="wizard-review-section">
                  <div className="wizard-review-section-head">
                    <h4>Contact Information</h4>
                    <button type="button" className="wizard-edit-btn" onClick={() => goToStep(0)}>Edit</button>
                  </div>
                  <div className="wizard-review-grid">
                    <div className="wizard-review-cell">
                      <span className="review-label">Name</span>
                      <span className="review-value">{contact.name}</span>
                    </div>
                    <div className="wizard-review-cell">
                      <span className="review-label">Email</span>
                      <span className="review-value">{contact.email}</span>
                    </div>
                    {contact.company && (
                      <div className="wizard-review-cell">
                        <span className="review-label">Company</span>
                        <span className="review-value">{contact.company}</span>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="wizard-review-cell">
                        <span className="review-label">Phone</span>
                        <span className="review-value">{contact.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="wizard-review-section">
                  <div className="wizard-review-section-head">
                    <h4>{SERVICE_QUESTIONS[selectedService].label}</h4>
                    <button type="button" className="wizard-edit-btn" onClick={() => goToStep(2)}>Edit</button>
                  </div>
                  <div className="wizard-review-answers">
                    {SERVICE_QUESTIONS[selectedService].questions.map((q) => {
                      const val = answers[q.id]
                      const display = Array.isArray(val) ? val.join(', ') : val
                      return (
                        <div key={q.id} className="wizard-review-cell">
                          <span className="review-label">{q.label}</span>
                          <span className="review-value">{display}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {error && (
                <div className="wizard-error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><circle cx="12" cy="16" r=".5"/>
                  </svg>
                  {error}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="wizard-nav">
        {step > 0 ? (
          <motion.button
            type="button"
            className="wizard-back-btn"
            onClick={back}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
            </svg>
            Back
          </motion.button>
        ) : <div />}

        {step < TOTAL_STEPS - 1 ? (
          <motion.button
            type="button"
            className="wizard-continue-btn"
            onClick={next}
            disabled={!canAdvance()}
            whileHover={canAdvance() ? { scale: 1.03, y: -1 } : {}}
            whileTap={canAdvance() ? { scale: 0.97 } : {}}
          >
            Continue
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        ) : (
          <motion.button
            type="button"
            className="wizard-submit-btn"
            onClick={handleSubmit}
            disabled={sending}
            whileHover={!sending ? { scale: 1.03, y: -1 } : {}}
            whileTap={!sending ? { scale: 0.97 } : {}}
          >
            {sending ? (
              <>
                <span className="wizard-spinner" />
                Sending...
              </>
            ) : (
              <>
                Submit inquiry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  )
}
