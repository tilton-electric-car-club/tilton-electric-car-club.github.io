export default function NeedALift() {
  return (
    <div className="page">
      <h1>Need a Lift Scheme</h1>
      <p className="subtitle">
        A service for less mobile residents of the Tilton and Halstead Parish
      </p>

      <div className="card">
        <h2>How It Works</h2>
        <p>
          When thinking about your lift request, if you are able to share your
          journey with others, this would be helpful for volunteers, cheaper, and
          more sociable. Regular journeys at times when volunteers and cars are
          available should be easier to diarise.
        </p>
      </div>

      <div className="card">
        <h2>The Practicalities</h2>
        <ul>
          <li>
            Please allow a <strong>minimum of 1 week's notice</strong> for your
            request. If you haven't had your request confirmed 48 hours before
            your journey, please assume that a volunteer is not available. Until
            a booking is confirmed, you won't be charged.
          </li>
          <li>
            To calculate the journey time, use the{' '}
            <a
              href="https://www.theaa.com/route-planner/route"
              target="_blank"
              rel="noopener noreferrer"
            >
              AA Route Planner
            </a>{' '}
            to find the approximate timing. When booking, add additional time to
            allow the driver to check, collect and return the cars and for
            traffic delays.
          </li>
          <li>
            If your journey can be flexible in terms of time of day or date,
            please add this to the Notes when you make a booking request.
          </li>
          <li>
            Think of the volunteers and try to keep journeys within sociable
            hours — <strong>8.30am to 10pm</strong>.
          </li>
          <li>
            All our volunteer drivers give their time freely, are{' '}
            <strong>DBS checked</strong> and receive training.
          </li>
          <li>
            Children and young people under the age of 18 must be accompanied by
            a parent or guardian.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Distances</h2>
        <p>
          It is easier for volunteers to accommodate shorter, local trips — to
          local towns, villages, or Leicester. If you need occasional trips that
          are further afield, you can ask to see if this will be possible.
        </p>
        <p>
          Please remember that lifts can only be provided when a volunteer and
          car are available, so when possible, please avoid busy times of day. As
          the scheme develops, we aim to recruit more volunteer drivers.
        </p>
      </div>

      <div className="card">
        <h2>Request a Lift</h2>
        <p>
          To request a lift, log in to the booking system and submit your
          request:
        </p>
        <a
          href="https://tiltonelectriccarclub.com"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Booking System
        </a>
      </div>
    </div>
  )
}
