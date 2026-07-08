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
        <a href="#what-we-are" className="wayfinding-card">
          <IconInfo className="wayfinding-icon" />
          <span className="wayfinding-label">What we are</span>
          <span className="wayfinding-desc">Find out how it works</span>
        </a>
        <a href="#how-it-works" className="wayfinding-card">
          <IconCar className="wayfinding-icon" />
          <span className="wayfinding-label">How it works</span>
          <span className="wayfinding-desc">Join, book, travel</span>
        </a>
        <a href="#who-can-join" className="wayfinding-card">
          <IconPeople className="wayfinding-icon" />
          <span className="wayfinding-label">Join the club</span>
          <span className="wayfinding-desc">See if you're eligible</span>
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
        <a href="#membership" className="wayfinding-card">
          <IconPound className="wayfinding-icon" />
          <span className="wayfinding-label">Use a car without ownership</span>
          <span className="wayfinding-desc">See membership &amp; pricing</span>
        </a>
      </nav>

      {/* ── About / trust / partners ─────────────────────────────────────────── */}
      <div className="card" id="about">
        <h2>About the club</h2>
        <p>
          TECC is the first car club of its kind in Leicestershire, developed by
          local people and run by and for villagers in Tilton and Halstead. It has
          been benefitting the community since September 2023.
        </p>
        <p>
          The club is member-led: all members are invited to join the Steering
          Group, which coordinates servicing and MOTs, keeps the cars roadworthy,
          matches volunteer drivers with lift requests, ensures every volunteer
          driver is DBS checked, and meets monthly to run the club and raise funds.
        </p>
        <p>
          TECC aims to give every resident the benefits of a car without the costs
          of ownership, to build a stronger community through lift-sharing, and to
          improve local air quality by reducing the number of privately owned
          petrol and diesel cars on the road.
        </p>
        <p style={{ marginBottom: 0 }}>
          TECC was made possible through the support of Tilton Village Hall, Tilton
          Green, Harborough District Council, and John Farnsworth, as well as the
          enormous effort of many volunteers.
        </p>
      </div>

      {/* ── What TECC is ─────────────────────────────────────────────────────── */}
      <div className="card" id="what-we-are">
        <h2>What we are</h2>
        <p>
          Tilton Electric Car Club (TECC) is a community transport scheme for Tilton
          on the Hill and Halstead Parish in Leicestershire. It is operated under
          Tilton Green Community Projects Limited, a Community Benefit Society —
          meaning it exists to create long-term benefit for local people, not to
          make a profit.
        </p>
        <p>We exist for two reasons:</p>
        <ul>
          <li>
            Public transport links in this part of rural Leicestershire are
            limited. If you don&apos;t drive, or your mobility makes it difficult,
            getting to appointments, shops, or family can be hard. TECC&apos;s
            volunteer scheme was set up to change that.
          </li>
          <li>
            Whether you want to save money, do your bit for the planet, or both,
            using a TECC car costs a fraction of owning one — and is far less
            polluting.
          </li>
        </ul>
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
                Choose a membership — Frequent or Infrequent driver, Need a Lift, or
                Volunteer Driver. Register online and you&apos;re ready to go.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">2</div>
            <div className="step-body">
              <h3>Book what you need</h3>
              <p>
                Use the online booking system to reserve one of the two electric cars by
                the hour or day, or to request a volunteer-driver lift with at least a
                week&apos;s notice.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">3</div>
            <div className="step-body">
              <h3>Travel — no hidden costs</h3>
              <p style={{ marginBottom: 0 }}>
                All included in your monthly subscription: insurance, road tax, MOT,
                servicing, all maintenance, breakdown cover, the booking system, and a
                100% charge at the start of every journey. There&apos;s no mileage charge.
                For collecting, charging, and returning a car step by step, see the{' '}
                <Link to="/handbook">Member Handbook</Link>.
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
        <table className="pricing-table" role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Plan</th>
              <th scope="col" role="columnheader">Monthly fee</th>
              <th scope="col" role="columnheader">Hourly rate</th>
              <th scope="col" role="columnheader">Day rate</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <td role="cell" data-label="Plan">Frequent</td>
              <td role="cell" data-label="Monthly fee">£30 / month</td>
              <td role="cell" data-label="Hourly rate">£5 / hour</td>
              <td role="cell" data-label="Day rate">£45 max. per 24 hrs</td>
            </tr>
            <tr role="row">
              <td role="cell" data-label="Plan">Infrequent</td>
              <td role="cell" data-label="Monthly fee">£10 / month</td>
              <td role="cell" data-label="Hourly rate">£10 / hour</td>
              <td role="cell" data-label="Day rate">£70 max. per 24 hrs</td>
            </tr>
          </tbody>
        </table>
        <p>
          Membership covers either one person or two adults at the same address.
          Electricity, insurance, breakdown cover, MOT, and servicing are all included —
          there is no mileage charge.
        </p>
        <p style={{ marginBottom: 0 }}>
          According to the AA, using a TECC car works out far cheaper than running
          your own — whether it&apos;s owned or leased. The AA puts the cost of
          running a car at{' '}
          <a href="https://www.theaa.com/driving-advice/driving-costs/running-costs" target="_blank" rel="noopener noreferrer">
            £380 to £680 a month
          </a>{' '}
          as a minimum.
        </p>
      </div>

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

      {/* ── Volunteer ─────────────────────────────────────────────────────────── */}
      <div className="card" id="volunteer">
        <h2>Become a volunteer driver</h2>
        <p>
          Volunteer drivers take members to visit a friend or family member, to an
          important appointment, or to the train station. All volunteer drivers are{' '}
          <strong>DBS checked</strong> and receive training before their first lift.
          Volunteer Driver membership is <strong>free of charge</strong>.
        </p>
        <p>
          Not ready to drive yet? You don&apos;t need an active subscription to
          register. Complete a car induction, log your driving licence, and supply two
          proofs of address, and you&apos;ll be marked <strong>Ready to Go</strong> —
          ready to help whenever a lift is needed.
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

      {/* ── Accessibility & the cars ─────────────────────────────────────────── */}
      <div className="card" id="accessibility">
        <h2>Accessibility &amp; the cars</h2>
        <p>
          Both TECC cars are automatic — quiet, smooth to drive, and easy to get used
          to. Induction training is provided before your first booking.
        </p>
        <p>
          The cars have been adapted to make getting in and out easier for
          mobility-impaired residents: a <strong>transfer plate</strong> bridges the
          gap across the door sill for a safer transfer into the seat, and{' '}
          <strong>hand grips</strong> are fitted for both driver and passenger.
        </p>
        <p style={{ marginBottom: 0 }}>
          One car is dog-friendly; the other is kept pet-free for members with
          allergies or other personal reasons. See our{' '}
          <Link to="/pet-policy">pet policy</Link> for details.
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
