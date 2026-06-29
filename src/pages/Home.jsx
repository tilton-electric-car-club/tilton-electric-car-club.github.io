import { Link } from 'react-router-dom'

/* Inline SVG icons — simple line style, consistent weight, brand colours via currentColor */
function IconCar({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3v-5l2-4h14l2 4v5h-2" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M5 12h14" />
    </svg>
  )
}

function IconPeople({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconHeart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function IconInfo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function IconLeaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function IconPound({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 19H6l3-4.5V9a3 3 0 1 1 6 0v1" />
      <line x1="6" y1="15" x2="14" y2="15" />
    </svg>
  )
}

/* The hill horizon — a specific rolling contour for "Tilton on the Hill" */
function HillHorizon() {
  return (
    <svg
      className="hero-hill"
      viewBox="0 0 900 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0,120 L0,80 C60,78 110,60 180,45 C240,32 290,28 340,30 C390,32 420,42 460,48 C510,55 560,62 620,55 C670,49 720,30 780,20 C820,13 860,10 900,12 L900,120 Z"
        fill="var(--hill-fill)"
        stroke="var(--hill-stroke)"
        strokeWidth="1"
      />
      {/* A second, subtler ridge for depth */}
      <path
        d="M0,120 L0,95 C40,94 80,90 130,88 C180,86 230,88 280,85 C340,82 380,76 430,78 C480,80 520,86 570,84 C620,82 680,75 740,72 C790,70 850,74 900,76 L900,120 Z"
        fill="var(--color-bg)"
        opacity="0.6"
      />
    </svg>
  )
}

const BOOKING_URL = 'https://tiltonelectriccarclub.com'

export default function Home() {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-content">
          <h1 className="display">Community transport for Tilton &amp; Halstead</h1>
          <p className="hero-lead">
            A shared electric car you can borrow by the hour or day — and a volunteer
            driver lift for neighbours who find travelling difficult.
            Run by the community, for the community.
          </p>
          <div className="hero-actions">
            <a href="#how-it-works" className="btn-primary">How it works</a>
            <a
              href={BOOKING_URL + '/register'}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the club
            </a>
          </div>
        </div>
        <HillHorizon />
      </section>

      {/* ── Wayfinding band ─────────────────────────────────────────────────── */}
      <nav className="wayfinding" aria-label="Find what you need">
        <a href="#how-it-works" className="wayfinding-card">
          <IconInfo className="wayfinding-icon" />
          <span className="wayfinding-label">New here?</span>
          <span className="wayfinding-desc">Find out how it works</span>
        </a>
        <Link to="/need-a-lift" className="wayfinding-card">
          <IconHeart className="wayfinding-icon" />
          <span className="wayfinding-label">Need a lift?</span>
          <span className="wayfinding-desc">For less mobile residents</span>
        </Link>
        <a href="#volunteer" className="wayfinding-card">
          <IconPeople className="wayfinding-icon" />
          <span className="wayfinding-label">Volunteer driver</span>
          <span className="wayfinding-desc">Give your time to help</span>
        </a>
        <a
          href={BOOKING_URL}
          className="wayfinding-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconCar className="wayfinding-icon" />
          <span className="wayfinding-label">Book a car</span>
          <span className="wayfinding-desc">Existing members</span>
        </a>
      </nav>

      {/* ── What TECC is ─────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>What we are</h2>
        <p>
          Tilton Electric Car Club (TECC) is a community transport scheme for Tilton
          on the Hill and Halstead Parish in Leicestershire. It is operated under
          Tilton Green Community Projects Limited, a Community Benefit Society —
          meaning it exists to create long-term benefit for local people, not to
          make a profit.
        </p>
        <p>
          We exist because public transport links in this part of rural Leicestershire
          are limited. If you don&apos;t drive, or your mobility makes it difficult,
          getting to appointments, shops, or family can be hard. TECC was set up to
          change that.
        </p>
        {/* DRAFT — club to confirm legal entity details before publishing */}
      </div>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <div className="card" id="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="step-body">
              <h3>Join the club</h3>
              <p>
                Choose a membership — Occasional or Frequent driver, Need a Lift, or
                Volunteer Driver. Register online and you&apos;re ready to go.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-body">
              <h3>Book what you need</h3>
              <p>
                Use the online booking system to reserve the electric car by the hour or
                day, or to request a volunteer-driver lift with at least a week&apos;s notice.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-body">
              <h3>Travel — no hidden costs</h3>
              <p>
                Electricity, insurance, breakdown cover, MOT, and servicing are all
                included. There is no mileage charge. You just pay the membership and
                hire rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why it works for you ─────────────────────────────────────────────── */}
      <div className="card">
        <h2>Why people use TECC</h2>
        <div className="features">
          <div className="feature-item">
            <IconPeople className="feature-icon" />
            <p>Support your neighbours — the lift scheme helps less mobile residents stay independent</p>
          </div>
          <div className="feature-item">
            <IconPound className="feature-icon" />
            <p>Use a car without owning one — no purchase, tax, insurance, or servicing costs</p>
          </div>
          <div className="feature-item">
            <IconCar className="feature-icon" />
            <p>Easy to drive — automatic with induction training provided; quiet and smooth</p>
          </div>
          <div className="feature-item">
            <IconLeaf className="feature-icon" />
            <p>No tailpipe emissions — better for local air quality and quieter streets</p>
          </div>
        </div>
      </div>

      {/* ── Membership & pricing ─────────────────────────────────────────────── */}
      <div className="card" id="membership">
        <h2>Membership &amp; pricing</h2>
        <p>There are three membership types:</p>
        <ul>
          <li><strong>Driver Member</strong> — hire the car yourself</li>
          <li><strong>Need a Lift Member</strong> — for less mobile residents who need volunteer-driver trips</li>
          <li><strong>Volunteer Driver Member</strong> — drive less mobile members; membership is <strong>free of charge</strong></li>
        </ul>
        <h3>Hire charges for Driver Members</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th scope="col">Plan</th>
              <th scope="col">Monthly fee</th>
              <th scope="col">Hourly rate</th>
              <th scope="col">Day rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Occasional</td>
              <td>£10 / month</td>
              <td>£10 / hour</td>
              <td>£70 / day</td>
            </tr>
            <tr>
              <td>Frequent</td>
              <td>£30 / month</td>
              <td>£5 / hour</td>
              <td>£45 / day</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginBottom: 0 }}>
          Membership covers either one person or two adults at the same address.
          Electricity, insurance, breakdown cover, MOT, and servicing are all included —
          there is no mileage charge.
        </p>
      </div>

      {/* ── Volunteer ─────────────────────────────────────────────────────────── */}
      <div className="card" id="volunteer">
        <h2>Become a volunteer driver</h2>
        <p>
          Volunteer drivers provide lifts to less mobile members of the community. All
          volunteer drivers are <strong>DBS checked</strong> and receive training.
          Volunteer Driver membership is <strong>free of charge</strong>.
        </p>
        <p>
          {/* DRAFT — club to confirm: what&apos;s involved, hours, training details, who to contact */}
          [Club to add: a short description of what volunteering involves — e.g. how many
          hours a month, what training is provided, who to speak to first.]
        </p>
        <a href="mailto:tiltonelectriccarclub@gmail.com" className="btn-primary">
          Ask about volunteering
        </a>
      </div>

      {/* ── Need a Lift ──────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>Need a lift?</h2>
        <p>
          If getting around is difficult, the Need a Lift scheme connects you with a
          DBS-checked volunteer driver. Request journeys to local towns, villages, or
          Leicester with at least a week&apos;s notice.
        </p>
        <Link to="/need-a-lift" className="btn-secondary">
          How the lift scheme works
        </Link>
      </div>

      {/* ── About / trust / partners ─────────────────────────────────────────── */}
      <div className="card" id="about">
        <h2>About the club</h2>
        <p>
          TECC was made possible through the support of Tilton Village Hall, Tilton Green,
          Green Fox Community Energy, Harborough District Council, and John Farnsworth,
          as well as the enormous effort of many volunteers.
        </p>
        <p>
          Green Fox (a not-for-profit Leicestershire co-operative) pays for the electricity
          to fuel the car when charged at the Village Hall.
        </p>
        {/* DRAFT — club to confirm: formal legal structure, governing body, any accreditations */}
        <p>
          [Club to confirm: legal entity and relationship with Tilton Green Community
          Projects Limited, and any partner logos to display here.]
        </p>
      </div>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <div className="card" id="contact">
        <h2>Get in touch</h2>
        <p>To join or find out more, contact us by email or phone.</p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:tiltonelectriccarclub@gmail.com">tiltonelectriccarclub@gmail.com</a>
          <br />
          <strong>Phone: </strong>Simon — 07766 446132
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <a
            href={BOOKING_URL + '/register'}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register online
          </a>
          <a
            href={BOOKING_URL}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Member login
          </a>
        </div>
      </div>

      {/* ── Trust band ───────────────────────────────────────────────────────── */}
      <div className="trust-band">
        <p>
          Operated under Tilton Green Community Projects Limited, a Community Benefit
          Society — governed for community benefit, not profit.
          {/* DRAFT — club to confirm: registration number */}
        </p>
      </div>

    </div>
  )
}
