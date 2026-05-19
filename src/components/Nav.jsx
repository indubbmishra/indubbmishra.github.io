import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/about',          label: 'About' },
  { to: '/impact',         label: 'Impact' },
  { to: '/experience',     label: 'Experience' },
  { to: '/expertise',      label: 'Expertise' },
  { to: '/case-studies',   label: 'Case Studies' },
  { to: '/ai-initiatives', label: 'AI Initiatives' },
  { to: '/connect',        label: 'Connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none' }}>
      <a
        href="#/"
        className="nav-logo"
        onClick={e => { e.preventDefault(); navigate('/') }}
      >
        IBM <span>•</span>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
