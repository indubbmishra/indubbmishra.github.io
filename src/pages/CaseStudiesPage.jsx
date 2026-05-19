import { useState } from 'react'
import FadeUp from '../components/FadeUp'

const CASES = [
  {
    num: '01', tag: 'Nium · Global Payments',
    title: 'Scaling Payment Infrastructure Across 190+ Countries',
    challenge: 'Nium needed to handle exponentially growing payment volumes across its payout, card issuance, and FX rails — while maintaining reliability across 190+ countries and regulatory environments.',
    approach: 'Led end-to-end platform re-architecture: modularised queue-based async processing, autoscaling via ELK APMs, and major integrations (JPMC, BCS). Drove 7X payout, 10X card, and 3X onboarding scale-up.',
    result: '✦ PG Success Rate → 95% | Systems Scaled 3X–10X',
  },
  {
    num: '02', tag: 'Paytm · UPI Launch',
    title: "Delivering Paytm UPI from Zero — India's Largest Real-Time Network",
    challenge: "Build UPI integration from scratch for India's largest payments platform — covering system architecture, NPCI sandbox, test strategy, and production cutover for hundreds of millions of users.",
    approach: 'Co-designed end-to-end architecture, built simulator setup for NPCI UPI sandbox, designed regression suite, and led production cutover. Collaborated with NPCI, banks, and internal teams across a compressed timeline.',
    result: '✦ Zero P0 incidents at launch | 400M+ user platform',
  },
  {
    num: '03', tag: 'Paytm · POS Ecosystem',
    title: "Building India's Largest POS Device Ecosystem from Scratch",
    challenge: 'Create a complete hardware + software POS ecosystem integrating bank partnerships, card payments, EMI, NCMC, and promotional features — with zero existing infrastructure.',
    approach: 'Built full software stack on POS devices from scratch, established brand and bank partnerships, integrated Bank EMI, Debit/Credit transactions, NCMC card support, and Cash@POS — all within a single unified platform.',
    result: '✦ 4 lakh devices | 1.4M daily transactions',
  },
  {
    num: '04', tag: 'Gojek · GoPay APAC',
    title: "Modernising GoPay's Payment Backbone Across Southeast Asia",
    challenge: "GoPay's legacy payment processing architecture was struggling with performance SLAs as Gojek scaled rapidly across Indonesia, Vietnam, and Singapore with millions of daily transactions.",
    approach: 'Re-engineered Payment Processor 2.0 with modularised orchestration, async calls, and queue-based implementation. Delivered Dana bank integration and new GoPay App features across Android and iOS simultaneously.',
    result: '✦ Improved SLAs | APAC-wide platform reliability',
  },
]

export default function CaseStudiesPage() {
  const [showRecon, setShowRecon] = useState(false)

  return (
    <>
      <section id="casestudies" className="page-section">
        <div className="section-eyebrow">Case Studies</div>
        <h2>Signature Projects<br />at Scale</h2>
        <p style={{ color: 'rgba(247,245,240,0.55)', fontSize: '0.92rem', margin: '0.8rem 0 1.2rem', fontWeight: 300, maxWidth: '58ch' }}>
          Deep-dive engineering case studies covering real production challenges, root cause analysis, and measurable outcomes at scale.
        </p>
        <ul style={{ listStyle: 'none', marginBottom: '2.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {CASES.map(c => (
            <li key={c.num} style={{ fontSize: '0.88rem', color: 'rgba(247,245,240,0.6)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ color: 'var(--gold)' }}>▸</span> {c.tag.split(' · ')[0]} — {c.title.split('—')[0].trim()}
            </li>
          ))}
          <li style={{ fontSize: '0.88rem', color: 'rgba(247,245,240,0.9)', display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 500 }}>
            <span style={{ color: 'var(--gold)' }}>▸</span> Reconciliation System — 7k to 300k Records (42× scale) &nbsp;
            <button
              onClick={() => { setShowRecon(true); setTimeout(() => document.getElementById('casestudy-recon')?.scrollIntoView({ behavior: 'smooth' }), 50) }}
              style={{ color: 'var(--gold)', fontSize: '0.7rem', border: '1px solid rgba(212,168,67,0.45)', padding: '3px 9px', background: 'transparent', cursor: 'pointer', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
            >
              READ FULL CASE STUDY ↓
            </button>
          </li>
        </ul>

        <div className="cases-grid">
          {CASES.map((c, i) => (
            <FadeUp key={c.num} style={{ '--i': i }} className="case-card">
              <div className="case-number">{c.num}</div>
              <div className="case-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <div className="case-section">
                <div className="case-section-title">Challenge</div>
                <p>{c.challenge}</p>
              </div>
              <div className="case-section">
                <div className="case-section-title">Approach</div>
                <p>{c.approach}</p>
              </div>
              <div className="case-result">{c.result}</div>
            </FadeUp>
          ))}

          {/* Case 05 — full width */}
          <FadeUp style={{ '--i': 4, gridColumn: '1 / -1', borderColor: 'rgba(212,168,67,0.35)' }} className="case-card">
            <div className="case-number">05</div>
            <div className="case-tag">FinTech Payments · Reconciliation Engineering</div>
            <h3>Scaling a Financial Reconciliation System from 7,000 to 300,000+ Records — a 42× Capacity Increase</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem', margin: '1.2rem 0' }}>
              <div className="case-section">
                <div className="case-section-title">Challenge</div>
                <p>A production reconciliation system matching remittance and card data hit a hard ceiling at 7,000 records per rule. Beyond this, the application stalled, DB connections exhausted, and processing became unresponsive across all rule executions.</p>
              </div>
              <div className="case-section">
                <div className="case-section-title">Approach</div>
                <p>Full-stack diagnosis and remediation across four layers simultaneously: async logging, event pool expansion, O(n) groupBy refactor, DB index tuning, RMQ migration from Fargate to ECS, ALB timeout fix, and UI pagination enforcement.</p>
              </div>
              <div className="case-section">
                <div className="case-section-title">Stack</div>
                <p>AWS ECS · RDS PostgreSQL · RabbitMQ · Node.js · Sequelize · ELK APM · AWS ALB · S3</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', alignItems: 'center', marginTop: '0.4rem' }}>
              <div className="case-result">✦ 7k → 300k+ records | 42× capacity</div>
              <div className="case-result">✦ 90 min → 4 min reconciliation</div>
              <div className="case-result">✦ 504 errors eliminated</div>
              <button
                onClick={() => { setShowRecon(true); setTimeout(() => document.getElementById('casestudy-recon')?.scrollIntoView({ behavior: 'smooth' }), 50) }}
                style={{ marginLeft: 'auto', background: 'var(--gold)', color: 'var(--ink)', padding: '0.55rem 1.4rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
              >
                Read Full Case Study ↓
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FULL RECONCILIATION CASE STUDY */}
      {showRecon && (
        <section id="casestudy-recon">
          <div className="cs-page">
            <div className="cs-hero">
              <div className="cs-tag">Case Study — FinTech Engineering</div>
              <h2>Scaling a financial reconciliation system from <em>7k to 300k</em> records</h2>
              <div className="cs-hero-meta">
                <span>Platform: AWS ECS + RDS PostgreSQL + RabbitMQ</span>
                <span>Runtime: Node.js</span>
                <span>Domain: Payments Reconciliation</span>
                <span>Indu Bhushan Mishra (IBM)</span>
              </div>
              <div className="cs-kpi-grid">
                <div className="cs-kpi"><div className="cs-kpi-num">42x</div><div className="cs-kpi-label">Capacity increase</div></div>
                <div className="cs-kpi"><div className="cs-kpi-num">95%</div><div className="cs-kpi-label">Recon time cut</div></div>
                <div className="cs-kpi"><div className="cs-kpi-num">75%</div><div className="cs-kpi-label">Download faster</div></div>
                <div className="cs-kpi"><div className="cs-kpi-num">4x</div><div className="cs-kpi-label">DB pool headroom</div></div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Overview</div>
              <h3>The problem</h3>
              <p>A production financial reconciliation system — responsible for matching remittance and card transaction data across multiple institutions — had hit a hard ceiling. The system could not process more than <strong>7,000 records within a single rule execution</strong>. Beyond that threshold, the application would stall, database connections would exhaust, and processing would become unresponsive.</p>
              <p>Root cause analysis revealed the constraint was not one bottleneck but a compounding set of failures across all four layers of the stack: application, infrastructure, database, and frontend. Each layer had to be addressed simultaneously to achieve the outcome.</p>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">System Architecture</div>
              <h3>How the system works</h3>
              <div className="cs-flow-grid">
                {[
                  ['01','File ingestion from S3','Source files (remittance and card data) are pulled from Amazon S3 and parsed into structured JSON for downstream processing.'],
                  ['02','Core system processing','Parsed data enters the core business logic layer for validation, schema normalisation, and ledger record creation.'],
                  ['03','File aggregation','Where multiple files are submitted for a single reconciliation run, they are merged into a unified processing unit before being published downstream.'],
                  ['04','Queue publication via RabbitMQ','Aggregated data is published to RabbitMQ for asynchronous, decoupled processing — enabling the consumer layer to scale independently of ingestion.'],
                  ['05','Consumer ingestion','A dedicated consumer service pulls remittance and card records from the queue and prepares the reconciliation payload with Side A, Side B, and applicable Rule IDs.'],
                  ['06','Rule engine dispatch','The rule engine applies configurable matching logic to identify reconciled, unmatched, and exception records across both data sets.'],
                  ['07','Result persistence & integrations','Reconciled results are written to the PostgreSQL ledger. External integrations and downstream notifications are triggered post-reconciliation.'],
                  ['08','Reporting APIs & UI','Read-optimised APIs expose reconciled data for dashboards, manual reconciliation controls, and operational reporting via the web interface.'],
                ].map(([num, title, desc], idx) => (
                  <div key={num} className="cs-flow-item">
                    <div className="cs-flow-num">{num}</div>
                    {idx < 7 && <div className="cs-flow-line" />}
                    <div className="cs-flow-content">
                      <div className="cs-flow-title">{title}</div>
                      <div className="cs-flow-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Tech Stack</div>
              <div className="cs-stack-chips">
                {['AWS ECS','Amazon S3','RabbitMQ','PostgreSQL (RDS)','Node.js','Sequelize ORM','AWS ALB','APM Monitoring','ELK Stack','Docker'].map(c => (
                  <span key={c} className="cs-chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Root Cause Analysis</div>
              <h3>Where the system was failing</h3>
              <div className="cs-layer-grid">
                <div className="cs-layer-card app">
                  <h4>Application Layer</h4>
                  <ul>
                    <li>Synchronous logger blocking the event loop during S3 ingestion</li>
                    <li>UV thread pool too small (2 workers — default)</li>
                    <li>O(n²) groupBy function in rule engine hot path</li>
                    <li>Unnecessary Sequelize transactions causing connection hold</li>
                    <li>DB connection pool capped at 50 connections</li>
                  </ul>
                </div>
                <div className="cs-layer-card infra">
                  <h4>Infrastructure Layer</h4>
                  <ul>
                    <li>ALB timeout at 60s — causing 504s on large rule sets</li>
                    <li>No ECS autoscaling — fixed task count under peak load</li>
                    <li>RMQ on Fargate re-triggering same rule_id every 3 minutes</li>
                    <li>Consumer storm causing duplicate processing</li>
                  </ul>
                </div>
                <div className="cs-layer-card db">
                  <h4>Database Layer</h4>
                  <ul>
                    <li>Heavy GROUP BY queries with no supporting indexes</li>
                    <li>Duplicate indexes causing write amplification</li>
                    <li>Misconfigured table partitioning — unnecessary multi-partition scans</li>
                    <li>Auto-vacuum not tuned — table bloat degrading query plans</li>
                    <li>RDS defaults not aligned to workload profile</li>
                  </ul>
                </div>
                <div className="cs-layer-card ui">
                  <h4>Frontend Layer</h4>
                  <ul>
                    <li>Entire large datasets loaded into browser memory at once</li>
                    <li>JavaScript heap out-of-memory on large Side B data</li>
                    <li>GL-UI fetch timeouts on long-running data loads</li>
                    <li>Browser hangs during dataset rendering</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Engineering Solution</div>
              <h3>What we changed</h3>
              <ul className="cs-fix-list">
                {[
                  ['Application','Logger: sync → async + isolated ELK cluster','Eliminated application halts during high-frequency S3 ingestion windows'],
                  ['Application','Event pool: 2 → 16 workers (UV_THREADPOOL_SIZE)','Normalised P95 & P99 response times under concurrent reconciliation load'],
                  ['Application','groupBy: O(n²) → O(n) hash-map implementation','CPU dropped materially on all groupBy-heavy rules; viable at 300k records'],
                  ['Application','Removed redundant Sequelize transactions','Connection hold time reduced; AcquireTimeoutError fully eliminated'],
                  ['Application','DB connection pool: 50 → 200 connections','Pool sized to match ECS fleet concurrency profile at peak'],
                  ['Application','Node.js LTS upgrade & checksum validation','V8 memory improvements; data integrity enforced at ingestion boundary'],
                  ['Infrastructure','ALB timeout: 60 seconds → 20 minutes','504 gateway failures on large rule sets fully eliminated in production'],
                  ['Infrastructure','ECS autoscaling at 80% CPU utilisation','Fleet scales out automatically during batch peaks; contracts at idle'],
                  ['Infrastructure','RMQ: Fargate → dedicated ECS node','Consumer storm resolved; exactly-once processing semantics restored'],
                  ['Database','Composite indexes on GROUP BY & WHERE columns','Slow query execution times reduced by an order of magnitude'],
                  ['Database','Partitioning strategy corrected + auto-vacuum tuned','Query planner accuracy restored; table bloat cleared'],
                  ['Database','Duplicate indexes removed; PostgreSQL params tuned','Write amplification eliminated; memory & timeout aligned to workload'],
                  ['Manual Recon','Reconciliation code optimised end-to-end','Processing time: 90 minutes → 4 minutes; RDS CPU normalised from 100%'],
                  ['Manual Recon','Bank statement download parallelised','Download time: 20 minutes → 5 minutes (75% reduction)'],
                  ['Frontend','Server-side pagination & lazy loading enforced','Heap crash, timeout, and browser hang eliminated on large Side B datasets'],
                  ['Frontend','API response size limits introduced','UI now requests bounded pages — stable at all production data volumes'],
                ].map(([tag, title, result]) => (
                  <li key={title} className="cs-fix-item">
                    <div className="cs-fix-tag">{tag}</div>
                    <div className="cs-fix-title">{title}</div>
                    <div className="cs-fix-result">{result}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Results</div>
              <h3>Before &amp; after</h3>
              <div className="cs-before-after">
                <div className="cs-ba-header">
                  <div className="cs-ba-col metric-col">Metric</div>
                  <div className="cs-ba-col before-col">Before</div>
                  <div className="cs-ba-col after-col">After</div>
                </div>
                {[
                  ['Records per rule','7,000','300,000+'],
                  ['Manual reconciliation time','90 min','4 min'],
                  ['Bank statement download','20 min','5 min'],
                  ['DB connection pool','50 (exhaustion)','200 (stable)'],
                  ['Event loop workers','2 (default)','16'],
                  ['ALB gateway errors','Recurring 504s','Eliminated'],
                  ['Logger mode','Sync (blocking)','Async'],
                  ['RDS CPU (manual recon)','100% (halt)','Normal range'],
                  ['RMQ consumer behaviour','Re-trigger every 3 min','Exactly-once'],
                  ['UI on large datasets','Heap crash','Paginated, stable'],
                ].map(([metric, before, after]) => (
                  <div key={metric} className="cs-ba-row">
                    <div className="cs-ba-cell metric">{metric}</div>
                    <div className="cs-ba-cell before">{before}</div>
                    <div className="cs-ba-cell after">{after}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-label">Engineering Principles</div>
              <h3>What this taught us</h3>
              <div className="cs-lessons">
                {[
                  ['Bottlenecks compound.','Fixing one layer in isolation would not have moved the needle. Full-stack profiling was required to surface the true constraint hierarchy — all four layers needed simultaneous, evidence-driven attention.'],
                  ['O(n²) algorithms are latent production failures.','The groupBy logic performed acceptably at 2,000 records. It only became the dominant CPU cost at scale. Complexity analysis must cover every function sitting on a hot path.'],
                  ['Database defaults are not production configurations.','PostgreSQL, Sequelize, and RabbitMQ all shipped with defaults calibrated for general use, not high-concurrency financial batch processing. Every parameter needs review against the real workload profile before going to volume.'],
                  ['Platform scheduling affects application semantics.','The RMQ consumer storm was caused by Fargate task scheduling interacting with message acknowledgement timing — not a code bug. Infrastructure behaviour must be tested and understood, not assumed.'],
                  ['Performance environments must faithfully mirror production.','The 504 failure was caught under 3x load in the performance environment and appeared in production two months later. A well-configured performance environment is insurance, not a nice-to-have.'],
                  ['Frontend scalability is part of the system.','A JavaScript heap crash in the browser is as much a production failure as a database timeout. API design must account for the memory budget of every consuming client — not just the server.'],
                ].map(([strong, text], i) => (
                  <div key={i} className="cs-lesson">
                    <div className="cs-lesson-num">{i + 1}</div>
                    <div className="cs-lesson-text"><strong>{strong}</strong> {text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cs-conclusion">
              <h3>Conclusion</h3>
              <p>The path from 7,000 to 300,000+ records per rule required coordinated, evidence-driven improvements across application code, infrastructure configuration, database internals, and frontend architecture. No single layer held the answer, and addressing any one in isolation would not have delivered the outcome.</p>
              <p style={{ marginTop: '.6rem', marginBottom: 0 }}>The engineering approach — root cause analysis, performance environment validation, incremental delivery, and full-stack ownership — produced a system that is not merely faster, but fundamentally more reliable, observable, and prepared to absorb continued growth in transaction volume.</p>
            </div>

            <div className="cs-footer-row">
              <div className="cs-footer-left">Indu Bhushan Mishra (IBM) — VP Engineering, FinTech Payments &amp; Reconciliation</div>
              <div className="cs-footer-right">AWS · Node.js · PostgreSQL · RabbitMQ</div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
