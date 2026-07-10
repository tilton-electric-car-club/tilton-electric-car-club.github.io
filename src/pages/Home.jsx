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
            Two shared electric cars you can borrow by the hour or day — and a volunteer
            driver lift for neighbours who find travelling difficult.
            Run by the community, for the community.
          </p>
        </div>
        <HillHorizon />
      </section>

      {/* ── Wayfinding band ─────────────────────────────────────────────────── */}
      <nav className="wayfinding" aria-label="Find what you need">
        <Link to="/about" className="wayfinding-card">
          <IconInfo className="wayfinding-icon" />
          <span className="wayfinding-label">What we are</span>
          <span className="wayfinding-desc">Find out how it works</span>
        </Link>
        <Link to="/about#how-it-works" className="wayfinding-card">
          <IconCar className="wayfinding-icon" />
          <span className="wayfinding-label">How it works</span>
          <span className="wayfinding-desc">Join, book, travel</span>
        </Link>
        <Link to="/join" className="wayfinding-card">
          <IconPeople className="wayfinding-icon" />
          <span className="wayfinding-label">Join the club</span>
          <span className="wayfinding-desc">See if you're eligible</span>
        </Link>
        <Link to="/need-a-lift" className="wayfinding-card">
          <IconHeart className="wayfinding-icon" />
          <span className="wayfinding-label">Need a lift?</span>
          <span className="wayfinding-desc">For less mobile residents</span>
        </Link>
        <Link to="/volunteer" className="wayfinding-card">
          <IconPeople className="wayfinding-icon" />
          <span className="wayfinding-label">Volunteer driver</span>
          <span className="wayfinding-desc">Give your time to help</span>
        </Link>
        <Link to="/membership" className="wayfinding-card">
          <IconPound className="wayfinding-icon" />
          <span className="wayfinding-label">Use a car without ownership</span>
          <span className="wayfinding-desc">See membership &amp; pricing</span>
        </Link>
      </nav>

      {/* ── About teaser ─────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>About the club</h2>
        <p style={{ marginBottom: 0 }}>
          TECC is the first car club of its kind in Leicestershire, run by and for
          villagers in Tilton and Halstead since September 2023. Read more about{' '}
          <Link to="/about">what we are and how it works</Link>.
        </p>
      </div>

      {/* ── Why it works for you ─────────────────────────────────────────────── */}
      <div className="card">
        <h2>Why people use TECC</h2>
        <div className="features">
          <div className="feature-item">
            <IconPeople className="feature-icon" />
            <p>Support your neighbours — the volunteer driver scheme helps less mobile residents stay independent</p>
          </div>
          <div className="feature-item">
            <IconPound className="feature-icon" />
            <p>Use a car without owning one — at a fraction of the price of ownership, with no purchase, tax, insurance, or servicing costs</p>
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

      {/* ── Quotes ───────────────────────────────────────────────────────────── */}
      {/* DRAFT — club to confirm: Selene's v1 sitemap sketch includes a member
          quotes/testimonials section here. Left out of the visible page until
          the club supplies real quotes — publishing a visible "coming soon"
          placeholder on a page grant assessors read felt worse than omitting it.
          Uncomment and populate once quotes are available:
      <div className="card">
        <h2>What members say</h2>
        <p style={{ marginBottom: 0 }}>...</p>
      </div>
      */}

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

    </div>
  )
}
