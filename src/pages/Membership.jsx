import { Link } from 'react-router-dom'

export default function Membership() {
  return (
    <div className="page">
      <h1>Membership &amp; pricing</h1>
      <p className="subtitle">
        Choose a membership and see hire charges.
      </p>

      {/* ── Membership types & pricing ───────────────────────────────────────── */}
      <div className="card" id="membership-types">
        <h2>Membership types</h2>
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
          running a car at £380 to £680 a month as a minimum.
        </p>
      </div>

      {/* ── Additional charges ───────────────────────────────────────────────── */}
      <div className="card">
        <h2>Additional charges</h2>
        <p style={{ marginBottom: 0 }}>
          A few extra charges may apply in specific situations — for example running
          out of charge, returning a car late, or losing a key or charging card. See
          the Member Handbook for the{' '}
          <Link to="/handbook#additional-charges">full list of additional charges</Link>.
        </p>
      </div>

      {/* ── Cross-links ──────────────────────────────────────────────────────── */}
      <div className="card">
        <h2>Ready to join?</h2>
        <p style={{ marginBottom: 0 }}>
          See <Link to="/join">who can join and how</Link>, or find out about{' '}
          <Link to="/volunteer">becoming a volunteer driver</Link> — free of charge.
        </p>
      </div>

    </div>
  )
}
