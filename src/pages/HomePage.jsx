import { useNavigate } from 'react-router-dom'
import FadeUp from '../components/FadeUp'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-bg-pattern" />

      <FadeUp className="hero-content">
        <div className="hero-eyebrow">VP Engineering · FinTech &amp; Payments</div>
        <h1>Indu Bhushan<br /><span className="last-name">Mishra</span></h1>
        <div className="hero-title">eng.ibm@gmail.com &nbsp;·&nbsp; Noida, India &nbsp;·&nbsp; 20+ Years</div>
        <p className="hero-tagline">
          Building <strong>world-class payment platforms</strong> and engineering organisations that
          power hundreds of millions of transactions — across India, Southeast Asia, and 100+ countries globally.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => navigate('/experience')}>View Experience</button>
          <button className="btn-outline" onClick={() => navigate('/connect')}>Let's Connect</button>
        </div>
      </FadeUp>

      <FadeUp style={{ '--i': 2 }} className="hero-photo-area">
        <div className="photo-frame">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', width: '100%', height: '100%' }}>
            <div className="photo-initials">IBM</div>
            <div className="photo-hint" />
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">20+</div>
            <div className="label">Years</div>
          </div>
          <div className="hero-stat">
            <div className="num">90+</div>
            <div className="label">Engineers Led</div>
          </div>
          <div className="hero-stat">
            <div className="num">100+</div>
            <div className="label">Countries</div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
