import { Link } from 'react-router-dom'

const BOOKING_URL = 'https://tiltonelectriccarclub.com'

export default function Handbook() {
  return (
    <div className="page">
      <h1>Member Handbook</h1>
      <p className="subtitle">
        The full guide to using TECC's cars — for members, and for anyone who
        wants to see how the club really works.
      </p>

      <div className="card" id="handbook-contents">
        <h2>Contents</h2>
        <ul>
          <li><a href="#community-benefits">Welcome &amp; community benefits</a></li>
          <li><a href="#cars-and-chargers">The cars &amp; charging points</a></li>
          <li><a href="#collecting-a-car">Collecting &amp; using a car</a></li>
          <li><a href="#charging">Charging</a></li>
          <li><a href="#estimated-range">Estimated range</a></li>
          <li><a href="#adaptations">Accessibility adaptations</a></li>
          <li><a href="#whats-provided">What's provided in the car</a></li>
          <li><a href="#the-rules">Looking after the cars — the rules</a></li>
          <li><a href="#something-goes-wrong">If something goes wrong</a></li>
          <li><a href="#additional-charges">Additional charges</a></li>
          <li><a href="#see-also">See also</a></li>
        </ul>
      </div>

      {/* ── Welcome & community benefits ─────────────────────────────────────── */}
      <div className="card" id="community-benefits">
        <h2>Welcome &amp; community benefits</h2>
        <p>
          TECC is the first car club of its kind in Leicestershire, developed by
          local people and run by and for villagers in Tilton and Halstead. It has
          been benefitting the community since September 2023.
        </p>
        <p>Beyond the everyday convenience of borrowing a car, the club:</p>
        <ul>
          <li>
            Offers occasional transport for young people to and from school or
            college — both practical and a chance to experience the benefits of
            electric vehicles first-hand.
          </li>
          <li>
            Reduces isolation for mobility-impaired residents and builds closer
            community relationships through the volunteer driver scheme.
          </li>
          <li>
            Helps residents stay in the village rather than being obliged to
            relocate — the club is proud to support the village shop and pub,
            which remain in business against the national trend.
          </li>
          <li>
            Reduces the need for a second car in a family, and brings in revenue
            for the Village Hall.
          </li>
          <li>
            Rural areas like ours have lost much of their public transport — the
            club exists to fill that gap.
          </li>
          <li>
            Encourages the take-up of electric vehicles and increases car-sharing,
            reducing the number of privately owned vehicles on the road.
          </li>
          <li style={{ marginBottom: 0 }}>
            Reduces our impact on the planet — lowering local air quality impact
            and greenhouse gas emissions.
          </li>
        </ul>
      </div>

      {/* ── The cars & charging points ────────────────────────────────────────── */}
      <div className="card" id="cars-and-chargers">
        <h2>The cars &amp; charging points</h2>
        <p>
          TECC has two Nissan Leaf e+ electric cars and chargers, based at Tilton
          on the Hill Village Hall. There are two further chargers at the Village
          Hall that any member of the public can use via the Blink charging app.
        </p>
        <p style={{ marginBottom: 0 }}>
          Each car has a usable battery capacity of 59 kWh, giving an estimated
          range of around 210 miles on a full charge (see{' '}
          <a href="#estimated-range">Estimated range</a> below for how driving
          conditions affect this).
        </p>
      </div>

      {/* ── Collecting & using a car ──────────────────────────────────────────── */}
      <div className="card" id="collecting-a-car">
        <h2>Collecting &amp; using a car</h2>
        <p>
          You may only use a car if it has been booked in your name for your
          time slot. You'll receive an email 24 hours before your booking with
          the key-safe code for that car — check your junk mail if it doesn't
          arrive, then call Member Support. Each car has its own key safe at the
          Village Hall entrance; please check the registration matches before
          unlocking it, and return the key to the same key safe afterwards.
        </p>
        <p>
          Before setting off, visually inspect the car and tyres, both inside and
          out. Report any damage, however minor, and let a member of the Steering
          Group know if you find the car dirty.
        </p>
        <p>
          The car unlocks with the middle button on the key fob. If it's still
          attached to its charging cable, press the unlock button on the
          dashboard or key fob to release the cable, then stow it in the boot.
        </p>
        <p>
          Start filling in the trip sheet (kept on the clipboard by the passenger
          seat) before you set off, and complete it at the end of your journey —
          this helps the club track how the cars are used.
        </p>
        <p>
          To start the car, press the brake pedal and push the on/off button; the
          button lights up blue and the dashboard appears. The gear selector
          works like an automatic — R for reverse, D/B for drive, P for parking —
          with two driving modes: <strong>Eco</strong>, which moderates air
          conditioning and accelerator response to maximise range, and{' '}
          <strong>e-Pedal</strong>, which lets you accelerate and brake with one
          pedal, using regenerative braking to help recharge the battery.
        </p>
        <p>
          With your foot on the brake, select D or R, release the handbrake, and
          move off slowly. The car has proximity sensors and cameras all round —
          use the camera button on the console for a full view while reversing or
          manoeuvring.
        </p>
        <div className="callout callout--warning">
          <p style={{ marginBottom: 0 }}>
            <strong>Reverse and enter the car park with care.</strong> The car
            parking bay is next to the Village Hall, which is used daily by
            nursery children. Please look carefully before reversing and be
            vigilant near the play area and hall entrance.
          </p>
        </div>
        <p>
          If you need to extend your booking, amend it through the online booking
          system — and make sure there's enough range left for anyone booked in
          after you.
        </p>
        <p style={{ marginBottom: 0 }}>
          Return the car to one of the marked Car Club bays at the Village Hall
          at the agreed time, switch it off, plug it back in to charge, complete
          the trip sheet, make sure it's locked and your belongings are removed,
          then return the key to its key safe and scramble the code before
          leaving.
        </p>
      </div>

      {/* ── Charging ───────────────────────────────────────────────────────────── */}
      <div className="card" id="charging">
        <h2>Charging</h2>
        <p>
          Pick the car up with a full battery, drop it off at the end of your
          journey, and plug it back in — the club pays for the car to be charged
          back up. If your journey is over 100 miles, you'll need to charge at a
          public charge point along the way, at your own expense.
        </p>
        <p>
          At the Village Hall, attach the charging cable and scan the RFID card
          over the charger to start — the club's RFID card only works at the
          Village Hall chargers, not at public charge points. A fast (Type 2)
          charge takes a fully depleted battery to 100% in around 10 hours 45
          minutes; a rapid (CHAdeMO) charge adds around 145 miles of range in
          about an hour. Three blue lights on the dashboard show roughly how
          charged the car is — one blinking is 0–33%, the first solid with the
          second blinking is 34–66%, and so on until all three are solid or off
          when fully charged.
        </p>
        <p style={{ marginBottom: 0 }}>
          Away from the Village Hall, you can find public charge points using the
          car's onboard computer or the{' '}
          <a href="https://www.zap-map.com/" target="_blank" rel="noopener noreferrer">
            Zap Map
          </a>{' '}
          app. Never let the charge run too low — keep at least 30 miles in
          reserve for your return journey.
        </p>
      </div>

      {/* ── Estimated range ────────────────────────────────────────────────────── */}
      <div className="card" id="estimated-range">
        <h2>Estimated range</h2>
        <p style={{ marginBottom: 0 }}>
          A fully charged battery gives an estimated range of around 210 miles,
          but this varies with conditions — from around 150 miles driving fast in
          cold weather, up to around 315 miles driving gently in mild weather.
          The range shown on the dashboard reflects how the car was driven on its
          last trip, so it's each member's responsibility to make sure there's
          enough range for their journey.
        </p>
      </div>

      {/* ── Accessibility adaptations ──────────────────────────────────────────── */}
      <div className="card" id="adaptations">
        <h2>Accessibility adaptations</h2>
        <p>
          The Mobility charity funded the first 18 months of the car club, with
          the purpose of enhancing the lives of mobility-impaired residents by
          offering transportation solutions. Both TECC cars have been adapted to
          make it easier for mobility-impaired residents to get in and out.
        </p>
        <p>
          A <strong>transfer plate</strong> can be manually fitted to the
          passenger seat, bridging the gap across the door sill for a safer
          transfer into the car. <strong>Hand grips</strong> are fitted for both
          driver and passenger, and the passenger grip can be used together with
          the transfer plate.
        </p>
        <p style={{ marginBottom: 0 }}>
          See the Home page's{' '}
          <Link to="/#accessibility">Accessibility &amp; the cars</Link> section
          for the dog-friendly car policy too.
        </p>
      </div>

      {/* ── What's provided in the car ─────────────────────────────────────────── */}
      <div className="card" id="whats-provided">
        <h2>What's provided in the car</h2>
        <p>Each car carries the following:</p>
        <ul>
          <li>
            <strong>Glove compartment:</strong> charging card, hi-vis vest, car
            manual
          </li>
          <li>
            <strong>Boot:</strong> Type 2 and 3-pin charging cables, transfer
            plate, red warning triangle, tyre inflator, first aid kit, windscreen
            frost protector
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>Beside the driver's seat:</strong> a clipboard with the trip
            sheet, damage report sheet, and accident form
          </li>
        </ul>
      </div>

      {/* ── The rules ──────────────────────────────────────────────────────────── */}
      <div className="card" id="the-rules">
        <h2>Looking after the cars — the rules</h2>
        <p>
          You're responsible for the car from collection to return, so please
          look after it for the next member:
        </p>
        <div className="callout callout--warning">
          <p style={{ marginBottom: 0 }}>
            <strong>
              Never drive under the influence of alcohol, drugs, or anything else
              that could impair your ability to react — and never use your phone
              while driving.
            </strong>{' '}
            Take it with you in case of an emergency.
          </p>
        </div>
        <ul>
          <li>Only club members may drive the cars — never let anyone else drive.</li>
          <li>Drive carefully and mindfully — insurance costs are very high.</li>
          <li>No smoking, eating, drinking, or vaping in the cars.</li>
          <li>Don't breach traffic or parking regulations — you're liable for any charges.</li>
          <li>Keep the cars locked and secure when not in use.</li>
          <li>
            Return keys to the correct key safe at the Village Hall, and
            scramble the code before leaving.
          </li>
          <li>
            Let Member Support know straight away if any warning lights come on
            or you hear unusual noises.
          </li>
          <li style={{ marginBottom: 0 }}>
            Don't remove or damage the vehicle livery — and never take a car
            through a car wash, as this will damage it.
          </li>
        </ul>
      </div>

      {/* ── If something goes wrong ────────────────────────────────────────────── */}
      <div className="card" id="something-goes-wrong">
        <h2>If something goes wrong</h2>
        <p>
          Tell Member Support straight away if there's a breakdown, a
          malfunction (including a puncture), or a warning light comes on. Don't
          try to fix a problem yourself — TECC has a designated 24-hour breakdown
          service for exactly this.
        </p>
        <div className="callout callout--warning">
          <p style={{ marginBottom: 0 }}>
            <strong>In a motor accident, call 999 if anyone may be seriously
            hurt</strong>, and notify the police. Use the Accident Form in the
            car to record details of everyone involved, the other vehicles, the
            time, place, and conditions, and photograph any damage. Don't admit
            responsibility, negotiate payment, or continue driving if it isn't
            safe to do so.
          </p>
        </div>
        <p>
          You must report any accident to the insurance company within 24 hours
          (as soon as practically possible), and let Member Support know too.
        </p>
        <p style={{ marginBottom: 0 }}>
          For any other incident — theft, attempted theft, or damage caused by
          someone else — tell the police, get a crime number if applicable, and
          let Member Support know within 24 hours.
        </p>
      </div>

      {/* ── Additional charges ─────────────────────────────────────────────────── */}
      <div className="card" id="additional-charges">
        <h2>Additional charges</h2>
        <p>
          The club tries to avoid extra charges wherever possible, but to keep
          things fair, some may be passed on at the club's discretion, arising
          from:
        </p>
        <ul>
          <li>Running out of charge and causing the car to break down</li>
          <li>Going over your booked time, or not returning the car correctly</li>
          <li>Not plugging the car in to charge at the end of your hire</li>
          <li>
            Parking charges, penalties, tolls, congestion charges or speeding
            fines — plus any related admin, court, or legal costs
          </li>
          <li>Repairing or replacing lost or damaged vehicle keys</li>
          <li style={{ marginBottom: 0 }}>Replacing a lost or damaged RFID charging card</li>
        </ul>
      </div>

      {/* ── See also ────────────────────────────────────────────────────────────── */}
      <div className="card" id="see-also">
        <h2>See also</h2>
        <p>
          This page covers the day-to-day detail of using a car. For everything
          else about the club:
        </p>
        <ul>
          <li>
            <Link to="/#who-can-join">Who can join</Link> and{' '}
            <Link to="/#membership">membership &amp; pricing</Link> — on the
            Home page
          </li>
          <li>
            <Link to="/pet-policy">Pet policy</Link> — travelling with dogs and
            other pets
          </li>
          <li>
            <Link to="/safeguarding">Safeguarding</Link> — keeping members,
            volunteers, and passengers safe
          </li>
          <li style={{ marginBottom: 0 }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Booking &amp; membership portal
            </a>{' '}
            — to register, book a car, or log in
          </li>
        </ul>
      </div>

      {/* ── Contact ─────────────────────────────────────────────────────────────── */}
      <div className="card" id="handbook-contact">
        <h2>Questions about this handbook?</h2>
        <p style={{ marginBottom: 0 }}>
          <strong>Email: </strong>
          <a href="mailto:tiltonelectriccarclub@gmail.com">tiltonelectriccarclub@gmail.com</a>
          <br />
          <strong>Phone: </strong>Simon — 07766 446132
        </p>
      </div>
    </div>
  )
}
