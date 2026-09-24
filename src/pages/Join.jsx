import { Link } from 'react-router-dom'

import noticeboard from '../assets/photo-noticeboard.jpg'
import noticeboard640 from '../assets/photo-noticeboard-640.jpg'

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
          <li style={{ marginBottom: 0 }}>
            Travelling with a dog or other pet? Check our{' '}
            <Link to="/pet-policy">pet policy</Link>.
          </li>
        </ul>
      </div>

      {/* ── Not ready yet / Ready to Go ──────────────────────────────────────── */}
      {/* DRAFT — club to confirm: adapted from the club's 'Ready to Go' flyer
          (Trev, Nov 2025); wording not yet signed off. */}
      <div className="card" id="ready-to-go">
        <h2>Not ready to join yet?</h2>
        <p>
          You can get set up now and only start paying when you actually need a car.
          Register, complete your induction, and leave your subscription switched off
          until the day you need to drive — a car off the road, a gap between
          vehicles, or a one-off trip where a hire car or taxi would cost more. TECC
          calls this being <strong>Ready to Go</strong>.
        </p>
        <figure className="figure">
          <img
            src={noticeboard}
            srcSet={`${noticeboard640} 640w, ${noticeboard} 1106w`}
            sizes="(max-width: 700px) 100vw, 800px"
            width="1106"
            height="737"
            loading="lazy"
            decoding="async"
            alt="The TECC noticeboard on the village hall wall, with a Ready to Go poster and a box of club leaflets"
          />
          <figcaption>The club noticeboard at the village hall, with the Ready to Go poster and leaflets</figcaption>
        </figure>
        <div className="steps">
          <div className="step">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="step-body">
              <h3>Register on the booking system</h3>
              <p>
                Register your details and book an induction slot — steps 1 and 3
                above. Please allow around five days for your induction to be
                arranged.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-body">
              <h3>Leave your subscription switched off</h3>
              <p>
                Complete the sign-up but don&apos;t start a subscription. There is
                nothing to pay while your account sits ready.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-body">
              <h3>Start your subscription when you need a car</h3>
              <p style={{ marginBottom: 0 }}>
                Sign in, choose <strong>Start subscription</strong>, and book. All you
                need is a debit or credit card, or Apple Pay. See the{' '}
                <Link to="/membership#hire-charges">Frequent and Infrequent plans</Link>{' '}
                for what a subscription costs.
              </p>
            </div>
          </div>
        </div>
        <p style={{ marginTop: '1.25rem', marginBottom: 0 }}>
          Still not sure TECC is right for you?{' '}
          <a href="mailto:tiltonelectriccarclub@gmail.com">Get in touch</a> — we&apos;re
          happy to answer questions before you commit.
        </p>
      </div>

    </div>
  )
}
