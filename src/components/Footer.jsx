import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <p>
            <strong style={{ color: 'white' }}>Tilton Electric Car Club</strong>
          </p>
          <p>
            <a href="mailto:tiltonelectriccarclub@gmail.com">
              tiltonelectriccarclub@gmail.com
            </a>
            &ensp;&middot;&ensp;Simon: 07766&nbsp;446132
          </p>
          <p>
            Operated under Tilton Green Community Projects Limited
            {/* DRAFT — club to confirm: Community Benefit Society registration number */}
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/need-a-lift">Need a Lift</Link>
          <Link to="/monthly-meetings">Monthly Meetings</Link>
          <Link to="/pet-policy">Pet Policy</Link>
          <Link to="/safeguarding">Safeguarding</Link>
          <Link to="/privacy">Privacy &amp; Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Tilton Electric Car Club</span>
        <span>Supported by Tilton Green &amp; Harborough District Council</span>
      </div>
    </footer>
  )
}
