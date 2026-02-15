import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { contact, service, answers, summaryHtml } = req.body

    if (!contact?.name || !contact?.email || !service || !summaryHtml) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Send the lead summary to your inbox
    await resend.emails.send({
      from: 'Stratus Website <noreply@stratustg.com>',
      to: ['hello@stratustg.com'],
      replyTo: contact.email,
      subject: `New Lead: ${service} — ${contact.name}${contact.company ? ` (${contact.company})` : ''}`,
      html: summaryHtml,
    })

    // Send a confirmation to the potential client
    await resend.emails.send({
      from: 'Stratus Technology Group <noreply@stratustg.com>',
      to: [contact.email],
      subject: "We've received your inquiry — Stratus Technology Group",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="margin-bottom: 4px;">Thanks for reaching out, ${contact.name.split(' ')[0]}!</h2>
          <p style="color: #555; line-height: 1.7;">
            We've received your inquiry about <strong>${service}</strong> and a team member will review it within one business day.
          </p>
          <p style="color: #555; line-height: 1.7;">
            We'll reach out with a tailored recommendation based on the details you provided. In the meantime, feel free to reply to this email if you have any questions.
          </p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="font-size: 13px; color: #888;">
            Stratus Technology Group<br/>
            <a href="https://stratustg.com" style="color: #3b82f6;">stratustg.com</a> &middot;
            <a href="mailto:hello@stratustg.com" style="color: #3b82f6;">hello@stratustg.com</a>
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
