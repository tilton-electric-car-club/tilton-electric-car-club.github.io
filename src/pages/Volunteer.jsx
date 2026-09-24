import { Link } from 'react-router-dom'
import laneAutumn from '../assets/photo-lane-autumn.jpg'
import laneAutumn640 from '../assets/photo-lane-autumn-640.jpg'

export default function Volunteer() {
  return (
    <div className="page">
      <h1>Volunteer driver</h1>
      <p className="subtitle">
        Give your time to help less mobile neighbours get around.
      </p>

      <figure className="figure">
        <img
          src={laneAutumn}
          srcSet={`${laneAutumn640} 640w, ${laneAutumn} 1106w`}
          sizes="(max-width: 700px) 100vw, 852px"
          width="1106"
          height="622"
          loading="lazy"
          decoding="async"
          alt="A TECC car in green club livery on a quiet country lane lined with trees"
        />
        <figcaption>A club car out on a local lane</figcaption>
      </figure>

      <div className="card" id="volunteer">
        <h2>Become a volunteer driver</h2>
        <p>
          Volunteer drivers take members to visit a friend or family member, to an
          important appointment, or to the train station. All volunteer drivers are{' '}
          <strong>DBS checked</strong> and receive training, including safeguarding
          training, before their first lift.
          Volunteer Driver membership is <strong>free of charge</strong> — see the
          other <Link to="/membership">membership types</Link>.
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

    </div>
  )
}
