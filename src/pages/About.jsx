import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page">
      <h1>About the club</h1>
      <p className="subtitle">
        What TECC is, how it works, and who makes it possible.
      </p>

      {/* ── Our story ─────────────────────────────────────────────────────────── */}
      <div className="card" id="our-story">
        <h2>Our story</h2>
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

      {/* ── What we are ──────────────────────────────────────────────────────── */}
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
                Volunteer Driver. Register online and you&apos;re ready to go. See{' '}
                <Link to="/join">how to join</Link> and{' '}
                <Link to="/membership">membership &amp; pricing</Link> for details.
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
