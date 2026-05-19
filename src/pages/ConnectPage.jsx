export default function ConnectPage() {
  return (
    <section id="contact" className="page-section">
      <div className="section-eyebrow">Get in Touch</div>
      <h2>Open to Exceptional<br />Opportunities</h2>
      <p className="contact-subtitle">
        Actively exploring VP Engineering / Head of Engineering / Engineering Director roles in FinTech,
        Payments, and high-scale consumer platforms — onsite, hybrid, or remote.
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-card-label">Email</div>
          <a href="mailto:eng.ibm@gmail.com" className="contact-card-value">eng.ibm@gmail.com</a>
        </div>
        <div className="contact-card">
          <div className="contact-card-label">Phone</div>
          <a href="tel:+919953559355" className="contact-card-value">+91 9953 559 355</a>
        </div>
        <div className="contact-card">
          <div className="contact-card-label">Location</div>
          <span className="contact-card-value">Noida 201304, India</span>
        </div>
        <div className="contact-card">
          <div className="contact-card-label">LinkedIn</div>
          <a
            href="https://linkedin.com/in/indu-bhushan-mishra-ibm-5b7a4627"
            target="_blank"
            rel="noreferrer"
            className="contact-card-value"
          >
            View Profile →
          </a>
        </div>
      </div>

      <div className="open-badge">Available for new opportunities</div>
    </section>
  )
}
