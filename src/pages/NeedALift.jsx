import passengerDoor from '../assets/photo-passenger-door.jpg'
import passengerDoor640 from '../assets/photo-passenger-door-640.jpg'
import stripSummerRoad from '../assets/strip-summer-road.jpg'
import PhotoStrip from '../components/PhotoStrip'

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
          Volunteer drivers can take you to an appointment, to the train station or
          to visit a friend or family member, or wherever you want to go.
        </p>
        <p>
          When thinking about your lift request, if you are able to share your
          journey with others, this would be helpful for volunteers, cheaper, and
          more sociable. Regular journeys at times when volunteers and cars are
          available should be easier to accommodate.
        </p>
      </div>

      <figure className="figure">
        <img
          src={passengerDoor}
          srcSet={`${passengerDoor640} 640w, ${passengerDoor} 1106w`}
          sizes="(max-width: 700px) 100vw, 852px"
          width="1106"
          height="737"
          loading="lazy"
          decoding="async"
          alt="The passenger door of a TECC car, in green livery reading Electric Car Club, Tilton on the Hill"
        />
        <figcaption>A club car in its green TECC livery</figcaption>
      </figure>

      <div className="card">
        <h2>The Practicalities</h2>
        <ul>
          <li>
            Please allow a <strong>minimum of 1 week&apos;s notice</strong> for
            your request.
          </li>
          <li>
            To calculate the journey time, use an online route planner (such as
            Google Maps) to find the approximate timing.
          </li>
          <li>
            When booking, please add additional time to allow the driver to
            check, collect and return the car, and for traffic delays.
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
            If your journey is getting close and no volunteer driver has
            accepted yet, please reach out to the volunteers via the dedicated
            WhatsApp group — people&apos;s commitments can change or volunteers
            may swap amongst themselves.
          </li>
          <li>Until a booking is confirmed, you won&apos;t be charged.</li>
          <li>
            All our volunteer drivers give their time freely, are{' '}
            <strong>DBS checked</strong>, and receive training including
            safeguarding training.
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

      <PhotoStrip src={stripSummerRoad} focus="30% 50%" />

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
