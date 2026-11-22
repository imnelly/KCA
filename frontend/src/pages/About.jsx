import {
  FiArrowUpRight,
  FiCalendar,
  FiGlobe,
  FiHeart,
  FiShield,
  FiUsers,
  FiAward,
  FiTarget,
  FiBookOpen,
} from 'react-icons/fi';

import '../css/About.css';

const objectives = [
  {
    icon: <FiUsers />,
    title: 'Build solidarity',
    description:
      'Provide a platform where correspondents can interact, connect and stand together in addressing shared challenges.',
  },
  {
    icon: <FiAward />,
    title: 'Professional recognition',
    description:
      'Enhance the profile, visibility and recognition of media correspondents within the media industry.',
  },
  {
    icon: <FiHeart />,
    title: 'Improve welfare',
    description:
      'Help address the professional and welfare needs of correspondents across the country.',
  },
  {
    icon: <FiShield />,
    title: 'Promote professionalism',
    description:
      'Contribute to a stronger, more professional media industry through collective action and development.',
  },
];

const initiatives = [
  {
    title: 'In-depth and issue-based election journalism',
    description:
      'Training media correspondents on in-depth and issue-based election journalism tools, alongside monitoring threats to journalists during upcoming elections in Kenya.',
    funder: 'Ford Foundation',
    url: 'https://www.devex.com/funding/r?filter%5Btype%5D%5B%5D=contract&filter%5Btype%5D%5B%5D=shortlist&report=contract-215735',
  },
  {
    title: 'Democracy and devolved governance',
    description:
      'Strengthening democracy and reporting on Kenya’s devolved structure of governance.',
    funder: 'Ford Foundation',
    url: 'https://www.devex.com/funding/r?filter%5Btype%5D%5B%5D=contract&filter%5Btype%5D%5B%5D=shortlist&report=contract-187318',
  },
  {
    title: 'Advancing public service media',
    description:
      'Enhancing the role of the media in the devolved structure of governance.',
    funder: 'Ford Foundation',
    url: 'https://www.devex.com/funding/r?filter%5Btype%5D%5B%5D=contract&filter%5Btype%5D%5B%5D=shortlist&report=contract-187244',
  },
];

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            ABOUT THE ASSOCIATION
          </span>

          <h1>
            United by journalism.
            <span> Strengthened by solidarity.</span>
          </h1>

          <p>
            The Kenya Correspondents Association brings together
            media correspondents to strengthen their voices,
            professional recognition and welfare across Kenya.
          </p>

          <a href="#our-story" className="about-hero-link">
            Discover our story <FiArrowUpRight />
          </a>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200"
            alt="People gathered for a public discussion"
          />

          <div className="about-image-caption">
            <FiGlobe />
            <span>Representing correspondents across Kenya</span>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats">
        <div className="about-stat">
          <FiCalendar />
          <strong>1997</strong>
          <span>Year established</span>
        </div>

        <div className="about-stat">
          <FiUsers />
          <strong>300+</strong>
          <span>Members</span>
        </div>

        <div className="about-stat">
          <FiGlobe />
          <strong>All regions</strong>
          <span>National reach</span>
        </div>

        <div className="about-stat">
          <FiBookOpen />
          <strong>Print & Electronic</strong>
          <span>Media representation</span>
        </div>
      </section>

      {/* Our story */}
      <section className="about-story" id="our-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000"
            alt="Journalists working in a newsroom"
            loading="lazy"
          />
          <span>Our journey began in 1997</span>
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">OUR HISTORY</span>

          <h2>A platform built for correspondents.</h2>

          <p>
            The Kenya Correspondents Association (KCA) was
            launched in August 1997. It was formed to provide
            a platform for media correspondents to interact,
            build solidarity and enhance their profile and
            recognition in the media industry.
          </p>

          <p>
            The association seeks to help correspondents
            address and improve their professional and welfare
            needs. This contributes to professionalism within
            the wider media industry.
          </p>

          <p>
            Its formation came against a background of
            fragmentation, exploitation and generally poor
            working conditions for correspondents, despite
            their significant contribution to daily media
            content.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="about-purpose">
        <div className="about-section-heading">
          <span className="about-eyebrow">WHAT DRIVES US</span>
          <h2>Why KCA exists</h2>
          <p>
            A collective platform focused on strengthening
            correspondents and contributing to a professional
            media industry.
          </p>
        </div>

        <div className="about-objectives">
          {objectives.map((objective, index) => (
            <article className="about-objective-card" key={objective.title}>
              <div className="objective-top">
                <span className="objective-icon">
                  {objective.icon}
                </span>
                <span className="objective-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{objective.title}</h3>
              <p>{objective.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section className="about-formation">
        <div className="formation-content">
          <span className="about-eyebrow">OUR BEGINNINGS</span>

          <h2>Built through shared experiences.</h2>

          <p>
            The resolve to form KCA grew through a series of
            training workshops for correspondents, supported
            by the Konrad Adenauer Foundation (KAF) through
            the Media Development Association (MDA).
          </p>

          <p>
            Bringing together correspondents from all
            provinces, the workshops created opportunities
            for experience sharing and reflection on the
            challenges they encountered in their work.
          </p>

          <div className="formation-support">
            <span>SUPPORTED THROUGH</span>
            <strong>Konrad Adenauer Foundation (KAF)</strong>
            <strong>Media Development Association (MDA)</strong>
          </div>
        </div>

        <div className="formation-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
            alt="People participating in a professional training workshop"
            loading="lazy"
          />
        </div>
      </section>

      {/* Reach */}
      <section className="about-reach">
        <div>
          <span className="about-eyebrow">OUR NATIONAL PRESENCE</span>
          <h2>A nationwide community of correspondents.</h2>
          <p>
            KCA has more than 300 members based in all regions
            of Kenya and drawn from different media
            organisations, both print and electronic.
          </p>
        </div>

        <div className="reach-highlight">
          <FiUsers />
          <strong>300+</strong>
          <span>Correspondents and members</span>
          <small>Across Kenya</small>
        </div>
      </section>

      {/* Initiatives */}
      <section className="about-initiatives">
        <div className="about-section-heading">
          <span className="about-eyebrow">SELECTED INITIATIVES</span>
          <h2>Supporting stronger journalism.</h2>
          <p>
            Examples of KCA contract awards listed by Devex,
            supported by the Ford Foundation.
          </p>
        </div>

        <div className="initiative-list">
          {initiatives.map((initiative, index) => (
            <article className="initiative-card" key={initiative.title}>
              <span className="initiative-number">
                0{index + 1}
              </span>

              <div className="initiative-details">
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                <span>{initiative.funder}</span>
              </div>

              <a
                href={initiative.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read about ${initiative.title}`}
              >
                <FiArrowUpRight />
              </a>
            </article>
          ))}
        </div>

        <a
          className="all-initiatives-link"
          href="https://www.devex.com/funding/r?filter%5Borganization_ids%5D%5B%5D=65268&filter%5Btype%5D%5B%5D=contract"
          target="_blank"
          rel="noreferrer"
        >
          View KCA contract awards on Devex <FiArrowUpRight />
        </a>
      </section>

      {/* Call to action */}
      <section className="about-cta">
        <span className="about-eyebrow">BE PART OF THE COMMUNITY</span>
        <h2>Stronger together. Better journalism.</h2>
        <p>
          Connect with a community committed to the
          professional growth and welfare of media correspondents.
        </p>

        <a href="/register">
          Become part of KCA <FiArrowUpRight />
        </a>
      </section>
    </main>
  );
}

export default About;