import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoDark from '../assets/tilton-dark.png'
import logoLight from '../assets/tilton.png'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const BOOKING_URL = 'https://tiltonelectriccarclub.com'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/need-a-lift', label: 'Need a Lift' },
  { to: '/monthly-meetings', label: 'Meetings' },
  { to: '/pet-policy', label: 'Pet Policy' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a
            href={BOOKING_URL}
            className="booking-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Car
          </a>
          <Link to="/" className="navbar-logo">
            {/* Both logos rendered; CSS shows the correct one per theme — no JS, no flash */}
            <img src={logoLight} alt="Tilton Electric Car Club" className="logo-light" />
            <img src={logoDark}  alt="Tilton Electric Car Club" className="logo-dark"  aria-hidden="true" />
          </Link>
        </div>

        <div className="navbar-right">
          <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
