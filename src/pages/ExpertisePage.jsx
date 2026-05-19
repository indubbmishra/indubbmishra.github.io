import FadeUp from '../components/FadeUp'

const EXPERTISE = [
  {
    icon: '🏗️',
    title: 'Platform Engineering & Architecture',
    desc: 'End-to-end design of distributed payment systems — from scalable microservices to high-availability infrastructure handling billions of transactions.',
    pills: ['Microservices','System Design','Distributed Systems','Cloud-Native','High Availability'],
  },
  {
    icon: '💳',
    title: 'Payments Domain Mastery',
    desc: 'Deep expertise in payment rails, protocols, and compliance — UPI, card networks, SWIFT, SEPA, ACH, PCI-DSS across B2B and B2C markets.',
    pills: ['UPI','Payment Gateway','Card Issuance','SWIFT/SEPA','PCI-DSS','eMoney'],
  },
  {
    icon: '👥',
    title: 'Engineering Leadership',
    desc: 'Built and scaled engineering teams of 30–90+ across multiple geographies. Expertise in hiring, mentoring, performance management, and career development.',
    pills: ['Team Building','Talent Development','Cross-Geo Teams','OKRs','Roadmapping'],
  },
  {
    icon: '⚡',
    title: 'Performance & Scalability',
    desc: 'Designed systems scaled 5X–10X for IPL, Diwali, and global peak traffic. Expertise in load testing, capacity planning, and real-time observability.',
    pills: ['JMeter','Gatling','Datadog','ELK APM','Autoscaling'],
  },
  {
    icon: '🤖',
    title: 'AI-Augmented Engineering',
    desc: 'Active practitioner of AI across the engineering lifecycle — code generation, architecture reviews, debugging, BDD authoring, and documentation.',
    pills: ['Claude','Cursor','GitHub Copilot','LLM Integration','Prompt Engineering'],
  },
  {
    icon: '📱',
    title: 'Mobile & Full-Stack Delivery',
    desc: 'Delivered consumer apps with hundreds of millions of users on Android and iOS. Full-stack capability across backend Java services to React Native and Flutter frontends.',
    pills: ['Android','iOS','Flutter','React Native','Java','SpringBoot'],
  },
]

export default function ExpertisePage() {
  return (
    <section id="expertise" className="page-section">
      <div className="section-eyebrow">Core Expertise</div>
      <h2>What I Bring to<br />Every Engagement</h2>

      <div className="expertise-grid">
        {EXPERTISE.map(({ icon, title, desc, pills }, i) => (
          <FadeUp key={title} style={{ '--i': i }} className="expertise-card">
            <div className="expertise-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="skill-pills">
              {pills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
