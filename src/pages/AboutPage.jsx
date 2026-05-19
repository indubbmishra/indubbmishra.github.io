import FadeUp from '../components/FadeUp'

export default function AboutPage() {
  return (
    <section id="about" className="page-section">
      <div className="section-eyebrow">About Me</div>
      <h2>Engineering Excellence<br />at Global Scale</h2>

      <div className="about-grid">
        <FadeUp className="about-text">
          <p>
            With <strong>two decades of experience</strong> in engineering and technology, I bring a proven
            track record of fintech leadership — driving innovation across distributed systems, scalable
            platforms, cloud-native architectures, and high-performance payment systems for both B2B and
            B2C markets.
          </p>
          <p>
            I serve as <strong>VP of Engineering at Nium</strong>, a global payments platform
            revolutionising Payroll, Spend Management, Cards and Travel. I lead end-to-end technology
            strategy, overseeing product development, solution architecture, and cross-functional execution
            to deliver secure, reliable, and user-friendly digital experiences across <strong>100+ countries</strong>.
          </p>
          <p>
            Previously, I built and scaled engineering organisations at <strong>GoPay (Gojek)</strong> across
            APAC and at <strong>Paytm</strong> — India's first and largest digital payments platform — where
            I led teams of 30–90+ engineers and delivered landmark systems including Paytm UPI from scratch.
          </p>
          <p>
            I am an <strong>AI practitioner</strong>, actively leveraging Claude, Cursor, and GitHub Copilot
            across the engineering lifecycle for code generation, architecture analysis, automated reviews,
            debugging, and productivity acceleration.
          </p>
        </FadeUp>

        <FadeUp style={{ '--i': 2 }} className="about-highlights">
          <div className="highlight-card">
            <h4>Current Role</h4>
            <p>VP of Engineering at Nium — leading global payments platform covering Payouts, Card Issuance, FX, and Travel across 190+ countries.</p>
          </div>
          <div className="highlight-card">
            <h4>Domain Depth</h4>
            <p>UPI, Payment Gateway, eMoney, Card Issuance, SWIFT, SEPA, ACH, PCI-DSS, B2B &amp; B2C payment systems at internet scale.</p>
          </div>
          <div className="highlight-card">
            <h4>Leadership Scale</h4>
            <p>Built and led engineering teams of 30–90+ across India, Indonesia, and Vietnam. Established QA Centres of Excellence across APAC.</p>
          </div>
          <div className="highlight-card">
            <h4>Beyond Work</h4>
            <p>National-level Table Tennis player. Two-time State-level participant. Driven by a competitive mindset and desire to excel in all endeavours.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
