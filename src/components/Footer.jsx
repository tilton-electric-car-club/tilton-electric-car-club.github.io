import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Tilton Electric Car Club</p>
        <p>
          <a href="mailto:tiltonelectriccarclub@gmail.com">
            tiltonelectriccarclub@gmail.com
          </a>
          <span className="divider">|</span>
          Simon: 07766 446132
        </p>
        <p>
          <Link to="/privacy">Privacy &amp; Contact</Link>
        </p>
      </div>
    </footer>
  )
}
