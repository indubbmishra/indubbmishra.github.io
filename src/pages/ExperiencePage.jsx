import FadeUp from '../components/FadeUp'

export default function ExperiencePage() {
  return (
    <section id="experience" className="page-section">
      <div className="section-eyebrow">Career Journey</div>
      <h2>20 Years of Building<br />What Matters</h2>

      <div className="timeline">

        {/* NIUM */}
        <FadeUp className="timeline-item">
          <div className="timeline-dot current" />
          <div className="timeline-body">
            <div className="timeline-meta">
              <div>
                <div className="timeline-company">Nium</div>
                <div className="timeline-role">VP of Engineering — Global Payments Platform</div>
              </div>
              <div className="timeline-period">Oct 2021 – Present</div>
            </div>
            <p className="timeline-desc">
              Nium offers real-time money transfer to 190+ countries, revolutionising Payroll, Spend Management, Cards and Travel for global businesses.
            </p>
            <ul className="timeline-bullets">
              <li>Lead technology and engineering strategy for Nium's global payments platform covering Payouts, Card Issuance, Accounts, and FX across 100+ countries</li>
              <li>Scaled Payin-Payout systems 7X, Card systems 10X, Onboarding 3X and Legacy Masspay 5X to handle increased traffic and peak loads</li>
              <li>Led major Payment Gateway integrations — JPMC, BCS in the US — increasing overall PG success rate to 95%</li>
              <li>Designed and developed highly scalable inward and outward payment processors using modularised async queue-based architecture</li>
              <li>Increased PG system availability and uptime by improving monitoring, alerting, scaling systems, and automating failover of all components</li>
              <li>Implemented autoscaling through ELK APMs and optimised infrastructure cost across Prod, Sandbox, Pre-Prod, and QA environments</li>
            </ul>
            <div className="tag-row">
              {['Java','SpringBoot','PostgreSQL','MongoDB','Redis','RMQ','Kubernetes','Docker','Snyk'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* GOJEK */}
        <FadeUp className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-body">
            <div className="timeline-meta">
              <div>
                <div className="timeline-company">Gojek — GoPay</div>
                <div className="timeline-role">Head of Engineering — Super App Payments, APAC</div>
              </div>
              <div className="timeline-period">Sep 2020 – Oct 2021</div>
            </div>
            <p className="timeline-desc">
              GoPay is the embedded eMoney and payments platform for Southeast Asia's leading super app — serving tens of millions of active users across consumer and merchant payments.
            </p>
            <ul className="timeline-bullets">
              <li>Led GoPay backend engineering: Payment Gateway, Transaction Management System, Payment Processor 2.0, Offline and Online payments with orchestration layers and async calls</li>
              <li>Delivered GoPay App features across Android and iOS — Dana bank integration, Pocket integrations, and new enhancements</li>
              <li>Improved SLAs through modularised architecture, faster performance, and queue-based async implementation</li>
            </ul>
            <div className="tag-row">
              {['Java','SpringBoot','Flutter','Android','iOS','Redis','MongoDB','Kafka'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* PAYTM */}
        <FadeUp className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-body">
            <div className="timeline-meta">
              <div>
                <div className="timeline-company">Paytm</div>
                <div className="timeline-role">GM Engineering — India's Largest Digital Payments Platform</div>
              </div>
              <div className="timeline-period">Apr 2014 – Sep 2020</div>
            </div>
            <p className="timeline-desc">
              India's first and largest digital payments platform for consumers and merchants — E-Wallet, PG, Postpaid instruments, EDC, IoT devices and Bank, with 400M+ registered users.
            </p>
            <ul className="timeline-bullets">
              <li>Built all Paytm products from scratch — Wallet, QR payments, Payment Gateway, Consumer App, Merchant Web &amp; App, Developer Portal</li>
              <li>Scaled Payment Gateway to 8X to handle increased traffic and peak loads; improved system availability via monitoring, alerting, and failover automation</li>
              <li>Built Paytm POS ecosystem from scratch — ~4 lakh devices with 1.4 million daily transactions including EMI, NCMC, Cash@POS</li>
              <li>Delivered complex integrations: Alipay, Uber, Apple Pay, IRCTC, UPI Development and Integration with zero P0 incidents</li>
              <li>Designed and developed highly scalable distributed ID generator service; resolved multiple scaling and downtime issues across application, DBs, and infrastructure</li>
            </ul>
            <div className="tag-row">
              {['Java','SpringBoot','Kafka','Redis','MySQL','MongoDB','ES','Android','iOS'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* EARLIER */}
        <FadeUp className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-body">
            <div className="timeline-meta">
              <div>
                <div className="timeline-company">Earlier Career</div>
                <div className="timeline-role">Lead Engineer — Multiple Domains</div>
              </div>
              <div className="timeline-period">2005 – 2014</div>
            </div>
            <ul className="timeline-bullets">
              <li><strong>Healthkart (Tata 1mg)</strong> — Lead Engineer, Healthkart and Healthkart Apps (Jun 2013 – Apr 2014)</li>
              <li><strong>MakeMyTrip</strong> — Lead Engineer, Domestic Flights and Cars — launched from scratch. Awarded <em>Star Performer of the Year</em> and <em>Yodha Award of the Month (4× consecutive)</em> (Jan 2010 – May 2013)</li>
              <li><strong>Minecode Solutions</strong> — Expedia Data Warehouse and Microsoft HealthVault (Dec 2007 – Dec 2009)</li>
              <li><strong>Exevo India Pvt. Ltd.</strong> — Software Engineer, Web Application Development (Aug 2005 – Jul 2007)</li>
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
