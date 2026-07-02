/**
 * Privacy & Contact page — skeleton only.
 *
 * IMPORTANT: This page must be reviewed and approved by the club before
 * the site goes live. The text below is a starting framework, not legal advice.
 *
 * Key facts already established:
 *   - This site collects NO personal data (no forms, no analytics, no cookies).
 *   - Fonts are loaded from bunny.net (GDPR-compliant, cookieless CDN).
 *   - No cookie banner is required under PECR because no tracking cookies are set.
 *
 * The club should review with reference to ICO guidance for small organisations:
 *   https://ico.org.uk/for-organisations/advice-for-small-organisations/
 */

export default function Privacy() {
  return (
    <div className="page">
      <h1>Privacy &amp; Contact</h1>
      <p className="subtitle">
        How this website handles your information, and how to reach us.
      </p>

      <div className="card">
        <h2>What this site collects</h2>
        <p>
          This website does <strong>not</strong> collect, store, or process any
          personal data. There are no contact forms, no account sign-ups, and no
          analytics or tracking scripts on this site.
        </p>
        <p>
          The fonts used on this site are loaded from{' '}
          <a
            href="https://bunny.net/fonts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bunny.net
          </a>
          , a privacy-friendly, cookie-free font CDN. No cookies are set by
          this service.
        </p>
        <p>
          Because this site sets no cookies and collects no personal data, no
          cookie consent banner is required.
        </p>
      </div>

      <div className="card">
        <h2>The booking system</h2>
        <p>
          When you click &ldquo;Book a Car&rdquo; or &ldquo;Register
          Online,&rdquo; you are taken to a separate booking platform operated
          by a third-party provider. That platform has its own privacy policy.
        </p>
        {/* DRAFT — club to add: link to booking system's own privacy policy
            once that URL is known. */}
      </div>

      <div className="card">
        <h2>Contact us</h2>
        <p>
          If you have any questions about the club or this website, please get
          in touch:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:tiltonelectriccarclub@gmail.com">
            tiltonelectriccarclub@gmail.com
          </a>
          <br />
          <strong>Phone:</strong> Simon — 07766 446132
        </p>
        {/* DRAFT — club to confirm: whether a postal address should be listed
            here (ICO recommends including a contact address for data subjects). */}
      </div>

      <div className="card">
        <h2>About this policy</h2>
        {/* DRAFT — club to confirm: legal entity name, governing body, and
            confirm this text is appropriate before going live.
            Review against ICO guidance for small organisations. */}
        <p>
          This privacy notice is provided by Tilton Electric Car Club
          [Club to confirm: operated by whom / legal entity name].
        </p>
        <p>
          Last reviewed: [Club to add date when this is confirmed and published].
        </p>
      </div>
    </div>
  )
}
