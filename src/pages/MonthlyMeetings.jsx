export default function MonthlyMeetings() {
  return (
    <div className="page">
      <h1>Monthly Meetings</h1>
      <p className="subtitle">
        Join us on the first Tuesday of each month at Tilton Village Hall
      </p>

      <div className="card">
        <h2>Schedule</h2>
        <ul className="schedule-list">
          <li>
            <span className="schedule-time">6.00pm – 6.30pm</span>
            <span>Need a Lift Scheme meeting</span>
          </li>
          <li>
            <span className="schedule-time">6.30pm – 7.00pm</span>
            <span>Volunteer Drivers meeting</span>
          </li>
          <li>
            <span className="schedule-time">7.00pm – 7.30pm</span>
            <span>
              Refreshments and opportunity to see inside the cars and learn about
              charging
            </span>
          </li>
          <li>
            <span className="schedule-time">7.30pm – 8.30pm</span>
            <span>Tilton Electric Car Club meeting</span>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Who to Ask</h2>
        <p>
          The Car Club and the Need a Lift Scheme are run by friendly local
          people. Come along and ask us about anything:
        </p>
        <table className="info-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Induction to drive the cars</td>
              <td>Simon Brown &amp; Suzanne Challacombe</td>
            </tr>
            <tr>
              <td>Charging the cars at the Village Hall</td>
              <td>Simon Brown &amp; Suzanne Challacombe</td>
            </tr>
            <tr>
              <td>Requesting lifts</td>
              <td>Ann Trangmar &amp; Richard Turner</td>
            </tr>
            <tr>
              <td>Being a Volunteer Driver &amp; other volunteering</td>
              <td>Suzanne Challacombe &amp; David Duckett</td>
            </tr>
            <tr>
              <td>
                Booking system, payments, membership, breakdown cover, MOT,
                servicing, maintenance &amp; insurance
              </td>
              <td>Ben Dodd</td>
            </tr>
            <tr>
              <td>Registering to become a Member</td>
              <td>Simon Brown &amp; Ann Trangmar</td>
            </tr>
            <tr>
              <td>Safeguarding</td>
              <td>Rachel Moss &amp; Ben Dodd</td>
            </tr>
            <tr>
              <td>Billesdon Surgery Liaison</td>
              <td>Trev Stocks</td>
            </tr>
            <tr>
              <td>Charging at Public Chargers &amp; using Zap Map</td>
              <td>Steve Durkin</td>
            </tr>
            <tr>
              <td>Pet Policy</td>
              <td>Rich Brown</td>
            </tr>
            <tr>
              <td>Electric Cars</td>
              <td>James Stoate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
