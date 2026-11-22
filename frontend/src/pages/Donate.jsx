import {
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiShield,
  FiArrowUpRight,
  FiCreditCard,
  FiSmartphone,
  FiInfo,
  FiGlobe,
} from 'react-icons/fi';

import '../css/Donate.css';

const supportAreas = [
  {
    icon: <FiBookOpen />,
    title: 'Professional development',
    description:
      'Support opportunities for training, learning and skills development among media correspondents.',
  },
  {
    icon: <FiShield />,
    title: 'Journalist welfare',
    description:
      'Help strengthen initiatives that address the professional needs, welfare and working conditions of correspondents.',
  },
  {
    icon: <FiUsers />,
    title: 'Unity and representation',
    description:
      'Contribute to building a stronger, more connected community of correspondents across Kenya.',
  },
];

function Donate() {
  return (
    <main className="donate-page">
      {/* Hero */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <span className="donate-eyebrow">
            SUPPORT THE KCA COMMUNITY
          </span>

          <h1>
            Strong journalism needs
            <span> strong support.</span>
          </h1>

          <p>
            Your contribution can help strengthen the voices,
            professional development and welfare of media
            correspondents across Kenya.
          </p>

          <a href="#donation-details" className="donate-primary-link">
            How to contribute <FiArrowUpRight />
          </a>
        </div>

        <div className="donate-hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
            alt="A group of professionals working together"
          />

          <div className="donate-image-caption">
            <FiHeart />
            <span>Investing in a stronger media community</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="donate-intro">
        <div className="donate-intro-icon">
          <FiHeart />
        </div>

        <div>
          <span className="donate-eyebrow">WHY YOUR SUPPORT MATTERS</span>
          <h2>Help strengthen the people behind the stories.</h2>

          <p>
            Correspondents play an important role in bringing
            news and information to communities. KCA exists
            to provide them with a platform for solidarity,
            professional recognition and improved welfare.
          </p>

          <p>
            Support from individuals, organisations and
            partners can help advance this mission and
            contribute to a stronger journalism community.
          </p>
        </div>
      </section>

      {/* Areas of support */}
      <section className="donate-areas">
        <div className="donate-section-heading">
          <span className="donate-eyebrow">WHERE SUPPORT CAN HELP</span>
          <h2>Make a meaningful contribution.</h2>
          <p>
            Contributions can support the association's
            work and its commitment to correspondents.
          </p>
        </div>

        <div className="donate-area-grid">
          {supportAreas.map((area, index) => (
            <article className="donate-area-card" key={area.title}>
              <div className="donate-area-top">
                <span className="donate-area-icon">{area.icon}</span>
                <span>0{index + 1}</span>
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Donation instructions */}
      <section className="donation-details" id="donation-details">
        <div className="donation-details-heading">
          <span className="donate-eyebrow">HOW TO SUPPORT KCA</span>
          <h2>Make your contribution.</h2>
          <p>
            Use the official payment information below
            when making a contribution to KCA.
          </p>
        </div>

        <div className="donation-payment-card">
          <div className="payment-card-heading">
            <div className="payment-icon">
              <FiSmartphone />
            </div>

            <div>
              <span>PAYMENT INFORMATION</span>
              <h3>M-PESA Paybill</h3>
            </div>
          </div>

          <div className="payment-detail-row">
            <span>Business number / Paybill</span>
            <strong>Official details pending</strong>
          </div>

          <div className="payment-detail-row">
            <span>Account number</span>
            <strong>Official details pending</strong>
          </div>

          <div className="payment-notice">
            <FiInfo />
            <p>
              Please confirm KCA's official payment details
              before making a contribution. Verified
              instructions will be published here.
            </p>
          </div>
        </div>

        <div className="donation-alternative">
          <FiCreditCard />

          <div>
            <h3>Other ways to contribute</h3>
            <p>
              For bank transfers, institutional support
              or partnership contributions, contact KCA
              directly for the appropriate official details.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="donate-cta">
        <div className="donate-cta-icon">
          <FiGlobe />
        </div>

        <span className="donate-eyebrow">STAND WITH CORRESPONDENTS</span>
        <h2>Every contribution supports a stronger voice.</h2>

        <p>
          Together, we can help build a more connected,
          recognised and professionally supported
          community of media correspondents.
        </p>

        <a href="/register">
          Join the KCA community <FiArrowUpRight />
        </a>
      </section>
    </main>
  );
}

export default Donate;