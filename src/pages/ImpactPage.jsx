import FadeUp from '../components/FadeUp'

const ACHIEVEMENTS = [
  { num: '99.99%', label: 'Uptime SLA Achieved',     desc: 'On critical payment flows via resilience, failover, and chaos testing embedded in the release pipeline.' },
  { num: '90+',    label: 'Engineers Led',            desc: 'Across Paytm, Gojek GoPay, and Nium — spanning India, Indonesia, and Vietnam.' },
  { num: '10X',    label: 'Systems Scaled',           desc: 'Card systems scaled 10X, Payin-Payout 7X, Onboarding 3X, Legacy Masspay 5X at Nium.' },
  { num: '0',      label: 'P0 Incidents at Launch',   desc: 'Delivered Alipay, Apple Pay, Uber, IRCTC, UPI, Visa, Mastercard integrations with zero production incidents.' },
  { num: '8X',     label: 'PG Scaled at Paytm',       desc: 'Scaled Payment Gateway to 8X capacity to handle IPL, Diwali, and peak traffic scenarios.' },
  { num: '95%',    label: 'PG Success Rate',          desc: 'Increased Payment Gateway success percentage at Nium through continuous analysis and routing logic improvements.' },
  { num: '4L+',    label: 'POS Devices Built',        desc: 'Built Paytm POS ecosystem from scratch — 4 lakh devices, 1.4M daily transactions, EMI, NCMC, Cash@POS.' },
  { num: '190+',   label: 'Countries Covered',        desc: "Nium's real-time money transfer platform operates across 190+ countries." },
]

export default function ImpactPage() {
  return (
    <section id="achievements" className="page-section">
      <div className="section-eyebrow">Impact &amp; Results</div>
      <h2>Numbers That Define<br />a Career</h2>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map(({ num, label, desc }, i) => (
          <FadeUp key={label} style={{ '--i': i }} className="achievement-card">
            <div className="achievement-num">{num}</div>
            <div className="achievement-label">{label}</div>
            <div className="achievement-desc">{desc}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
