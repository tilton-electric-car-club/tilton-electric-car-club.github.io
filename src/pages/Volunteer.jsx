import { Link } from 'react-router-dom'

export default function Volunteer() {
  return (
    <div className="page">
      <h1>Volunteer driver</h1>
      <p className="subtitle">
        Give your time to help less mobile neighbours get around.
      </p>

      <div className="card" id="volunteer">
        <h2>Become a volunteer driver</h2>
        <p>
          Volunteer drivers take members to visit a friend or family member, to an
          important appointment, or to the train station. All volunteer drivers are{' '}
          <strong>DBS checked</strong> and receive training before their first lift.
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
