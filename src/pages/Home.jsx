export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        {/* DRAFT — club to confirm: hero lead should emphasise community transport
            before the "electric" angle, so any visitor understands what the club
            does without needing to know what an electric car club is. */}
        <h1>Welcome to Tilton on the Hill Electric Car Club</h1>
        <p>
          A community transport scheme for Tilton and Halstead Parish —
          borrow a shared electric car by the hour or day, or arrange a
          volunteer-driver lift for a neighbour who can&apos;t drive.
        </p>
        <a
          href="https://tiltonelectriccarclub.com/register"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Club
        </a>
      </div>

      {/* Feature order follows the report's recommended messaging hierarchy:
          community → accessibility → convenience → sustainability */}
      <div className="card">
        <h2>What the Car Club Offers</h2>
        <div className="features">
          <div className="feature-item">
            {/* aria-hidden: decorative emoji — no meaning for screen readers */}
            <div className="icon" aria-hidden="true">🤝</div>
            <p>
              Build community through lift-sharing and helping less mobile
              residents
            </p>
          </div>
          <div className="feature-item">
            <div className="icon" aria-hidden="true">💷</div>
            <p>Benefits of an electric car without the costs of ownership</p>
          </div>
          <div className="feature-item">
            <div className="icon" aria-hidden="true">🌍</div>
            <p>Reduce our impact on the planet</p>
          </div>
          <div className="feature-item">
            <div className="icon" aria-hidden="true">🌬️</div>
            <p>Improve local air quality — no tailpipe emissions</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Why Electric?</h2>
        <ul>
          <li>Nearly 4 times more efficient per mile than petrol or diesel</li>
          <li>Comfortable for passengers and more responsive for drivers</li>
          <li>Considerably quieter — less noise pollution</li>
          <li>Automatic, so easy to drive — induction training provided</li>
        </ul>
      </div>

      <div className="card">
        <h2>Membership</h2>
        <p>There are three types of membership:</p>
        <ul>
          <li>
            <strong>Driver Member</strong> — to simply drive the cars
          </li>
          <li>
            <strong>Need a Lift Member</strong> — for less mobile residents who
            need lifts
          </li>
          <li>
            <strong>Volunteer Driver Member</strong> — drive less mobile people
            in the community (membership is{' '}
            <strong>free of charge</strong> when driving as a volunteer)
          </li>
        </ul>

        <h3>Hire Charges</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Monthly Fee</th>
              <th>Hourly Rate</th>
              <th>Day Rate</th>
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
        <p>
          In both cases, membership applies to either an individual or two
          adults at the same address.
        </p>
      </div>

      {/* Volunteer section — promoted from a single bullet to its own card,
          as recommended by the report (section 4). DRAFT — club to add details. */}
      <div className="card">
        <h2>Become a Volunteer Driver</h2>
        <p>
          Volunteer drivers provide lifts to less mobile members of the
          community. Volunteer Driver membership is{' '}
          <strong>free of charge</strong>.
        </p>
        {/* DRAFT — club to confirm: what's involved, who to contact,
            onboarding/induction process, DBS or insurance requirements if any. */}
        <p>
          [Club to add: a short description of what volunteering involves and
          how to get started — e.g. how many hours a month, what training is
          provided, who to speak to.]
        </p>
        <a
          href="mailto:tiltonelectriccarclub@gmail.com"
          className="btn-primary"
        >
          Find Out More
        </a>
      </div>

      <div className="card">
        <h2>No Hidden Costs</h2>
        <p>
          Green Fox (a not-for-profit Leicestershire co-operative) pays for the
          electricity to fuel the car (when charged at the Village Hall),
          insurance, the booking system, breakdown cover, MOT, servicing, and
          maintenance. There is no mileage charge.
        </p>
      </div>

      <div className="card">
        <h2>Join Us</h2>
        <p>
          To become a member, register online at the booking system. To find out
          more, please get in touch:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:tiltonelectriccarclub@gmail.com">
            tiltonelectriccarclub@gmail.com
          </a>
          <br />
          <strong>Phone:</strong> Simon — 07766 446132
        </p>
        <a
          href="https://tiltonelectriccarclub.com/register"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Online
        </a>
      </div>

      {/* About / legitimacy section — recommended by report (sections 1, 3, 4).
          DRAFT — club to confirm all details before publishing. Do NOT copy
          entity details from the report without verification. */}
      <div className="card">
        <h2>About the Club</h2>
        {/* DRAFT — club to confirm: legal status, governing body, and any
            formal relationship with Tilton Green Community Projects Limited
            or other entities. */}
        <p>
          [Club to confirm: who runs the club and its legal status — e.g.
          &ldquo;Tilton Electric Car Club is operated by [Organisation],
          a [legal status] based in [location].&rdquo;]
        </p>
        <p>
          The car club is made possible through the support of Tilton Village
          Hall, Tilton Green, Green Fox Community Energy, Harborough District
          Council, and John Farnsworth, as well as the enormous effort of many
          volunteers.
        </p>
        {/* DRAFT — club to add: any logos / links for funders and partners,
            and any accreditations or affiliations worth mentioning. */}
      </div>

      <div className="card">
        <h2>A Big Thank You</h2>
        <p>
          For all the support to make this happen from our local community, the
          enormous effort of many volunteers, and the practical and financial
          support from Tilton Village Hall, Tilton Green, Green Fox Community
          Energy, Harborough District Council and John Farnsworth.
        </p>
      </div>
    </div>
  )
}
