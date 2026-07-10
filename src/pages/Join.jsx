import { Link } from 'react-router-dom'

const BOOKING_URL = 'https://tiltonelectriccarclub.com'

export default function Join() {
  return (
    <div className="page">
      <h1>Join the club</h1>
      <p className="subtitle">
        How to become a TECC member, step by step.
      </p>

      {/* ── Who can join ─────────────────────────────────────────────────────── */}
      <div className="card" id="who-can-join">
        <h2>Who can join</h2>
        <p>Membership is open to residents who:</p>
        <ul>
          <li>are aged 25 to 75 (over 75 considered case by case)</li>
          <li>have lived in the UK for at least 3 years</li>
          <li>hold a full UK or EU driving licence held for at least 2 years</li>
          <li>
            have a driving record free of serious motoring convictions — a small number
            of minor points, such as from a parking or speed-awareness case, is usually fine
          </li>
          <li>can provide photo ID and two proofs of address</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Cars can only be booked and used by registered members, and every car has a
          telematics camera fitted for everyone&apos;s safety. Most residents who drive
          will be eligible — if you&apos;re not sure, <a href="mailto:tiltonelectriccarclub@gmail.com">get in touch</a> and we&apos;ll help you check.
        </p>
      </div>

      {/* ── 4 steps to join ──────────────────────────────────────────────────── */}
      {/* DRAFT — club to confirm: exact onboarding steps and payment provider (Selene's
          sitemap sketch mentions a specific payment step — worded generically here
          until confirmed). */}
      <div className="card" id="how-to-join">
        <h2>4 steps to join</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="step-body">
              <h3>Add your details to the booking system</h3>
              <p>Register online with your licence and proof of address.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-body">
              <h3>Add your payment details</h3>
              <p>Set up how you&apos;ll be billed for hire charges.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-body">
              <h3>Complete your induction</h3>
              <p>An experienced TECC member will show you around the car before your first booking.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">4</div>
            <div className="step-body">
              <h3>Book your first journey</h3>
              <p style={{ marginBottom: 0 }}>You&apos;re ready to go.</p>
            </div>
          </div>
        </div>
        <a
          href={BOOKING_URL + '/register'}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem', display: 'inline-flex' }}
        >
          Go to Booking System
        </a>
      </div>

      {/* ── Cross-links ──────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>Before you sign up</h2>
        <ul>
          <li>
            See <Link to="/membership">membership &amp; pricing</Link> for the three
            membership types and hire charges.
          </li>
          <li>
            Travelling with a dog or other pet? Check our{' '}
            <Link to="/pet-policy">pet policy</Link>.
          </li>
          <li style={{ marginBottom: 0 }}>
            Read <Link to="/handbook#the-rules">looking after the cars — the rules</Link>{' '}
            in the Member Handbook.
          </li>
        </ul>
      </div>

      {/* ── Not ready yet ────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>Not ready to join yet?</h2>
        <p style={{ marginBottom: 0 }}>
          Not sure if TECC is right for you? <a href="mailto:tiltonelectriccarclub@gmail.com">Get in touch</a>{' '}
          — we&apos;re happy to answer questions before you commit.
        </p>
      </div>

    </div>
  )
}
