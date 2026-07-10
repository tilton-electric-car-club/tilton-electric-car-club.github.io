import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <h1>Page not found</h1>
      <p className="subtitle">
        Sorry, we couldn&apos;t find that page.
      </p>

      <div className="card">
        <p>The page you were looking for may have moved or no longer exists. Try one of these instead:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About the club</Link></li>
          <li><Link to="/join">Join the club</Link></li>
          <li><Link to="/membership">Membership &amp; pricing</Link></li>
          <li><Link to="/volunteer">Volunteer driver</Link></li>
          <li><Link to="/need-a-lift">Need a lift</Link></li>
          <li style={{ marginBottom: 0 }}><Link to="/handbook">Member Handbook</Link></li>
        </ul>
      </div>

    </div>
  )
}
