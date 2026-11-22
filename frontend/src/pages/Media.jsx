import { useMemo, useState } from 'react';
import {
  FiSearch,
  FiImage,
  FiVideo,
  FiPlay,
  FiCalendar,
  FiArrowUpRight,
  FiX,
} from 'react-icons/fi';

import '../css/Media.css';

const mediaItems = [
  {
    id: 1,
    title: 'Journalism and the Future of Media',
    description:
      'Journalists and media professionals come together to discuss the changing media landscape.',
    category: 'Events',
    type: 'Photo',
    date: 'November 2026',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000',
  },
  {
    id: 2,
    title: 'Building Stronger Newsrooms',
    description:
      'A collaborative training session focused on professional development and newsroom excellence.',
    category: 'Training',
    type: 'Photo',
    date: 'October 2026',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000',
  },
  {
    id: 3,
    title: 'Behind the Camera',
    description:
      'A look at the people and equipment that bring important stories to audiences.',
    category: 'Behind the Scenes',
    type: 'Video',
    date: 'October 2026',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1000',
  },
  {
    id: 4,
    title: 'The Power of Press Freedom',
    description:
      'Highlighting the importance of independent journalism and the protection of media workers.',
    category: 'Press Freedom',
    type: 'Photo',
    date: 'September 2026',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000',
  },
  {
    id: 5,
    title: 'Inside a Media Workshop',
    description:
      'Journalists sharing knowledge, practical skills and experiences.',
    category: 'Training',
    type: 'Video',
    date: 'September 2026',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1000',
  },
  {
    id: 6,
    title: 'Reporting From the Field',
    description:
      'Capturing the realities of field reporting and community storytelling.',
    category: 'Behind the Scenes',
    type: 'Photo',
    date: 'August 2026',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000',
  },
];

const categories = [
  'All',
  'Events',
  'Training',
  'Press Freedom',
  'Behind the Scenes',
];

function Media() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('All');

  const filteredMedia = useMemo(() => {
    const query = search.trim().toLowerCase();

    return mediaItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      const matchesType =
        activeType === 'All' || item.type === activeType;

      const matchesSearch =
        !query ||
        `${item.title} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [search, activeCategory, activeType]);

  const clearFilters = () => {
    setSearch('');
    setActiveCategory('All');
    setActiveType('All');
  };

  return (
    <main className="media-page">
      <header className="media-header">
        <span className="media-eyebrow">KCA IN PICTURES & STORIES</span>
        <h1>Media Gallery</h1>
        <p>
          Explore moments, stories and experiences from the Kenya
          Correspondents Association.
        </p>
      </header>

      <section className="media-feature">
        <div className="media-feature-image">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400"
            alt="A professional conference with speakers and attendees"
          />
          <span className="feature-label">FEATURED COVERAGE</span>
        </div>

        <div className="media-feature-content">
          <span className="feature-category">KCA HIGHLIGHTS</span>
          <h2>Stories that inform. Moments that matter.</h2>
          <p>
            From industry conversations to community activities,
            explore the moments shaping journalism and the media
            community.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setActiveType('All');
              document
                .getElementById('media-gallery')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore gallery <FiArrowUpRight />
          </button>
        </div>
      </section>

      <section className="media-gallery-section" id="media-gallery">
        <div className="media-section-heading">
          <div>
            <span className="media-eyebrow">EXPLORE OUR COLLECTION</span>
            <h2>Moments from our community</h2>
            <p>Discover events, training sessions and media coverage.</p>
          </div>

          <span className="media-total">
            {filteredMedia.length} ITEMS
          </span>
        </div>

        <div className="media-search">
          <FiSearch />
          <input
            type="search"
            placeholder="Search the media gallery..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search media gallery"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}
        </div>

        <div className="media-filters">
          <div className="media-category-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category ? 'active' : ''
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="media-type-filters">
            <button
              type="button"
              className={activeType === 'All' ? 'active' : ''}
              onClick={() => setActiveType('All')}
            >
              All media
            </button>
            <button
              type="button"
              className={activeType === 'Photo' ? 'active' : ''}
              onClick={() => setActiveType('Photo')}
            >
              <FiImage /> Photos
            </button>
            <button
              type="button"
              className={activeType === 'Video' ? 'active' : ''}
              onClick={() => setActiveType('Video')}
            >
              <FiVideo /> Videos
            </button>
          </div>
        </div>

        {(search || activeCategory !== 'All' || activeType !== 'All') && (
          <div className="media-active-filters">
            <span>
              Showing {filteredMedia.length} matching items
            </span>
            <button type="button" onClick={clearFilters}>
              Clear filters <FiX />
            </button>
          </div>
        )}

        <div className="media-grid">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item) => (
              <article className="media-card" key={item.id}>
                <div className="media-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />

                  <span className="media-card-category">
                    {item.category}
                  </span>

                  {item.type === 'Video' && (
                    <span className="media-play-icon">
                      <FiPlay />
                    </span>
                  )}

                  <span className="media-type-label">
                    {item.type === 'Video' ? <FiVideo /> : <FiImage />}
                    {item.type}
                  </span>
                </div>

                <div className="media-card-content">
                  <span className="media-card-date">
                    <FiCalendar /> {item.date}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))
          ) : (
            <div className="media-empty">
              <FiSearch />
              <h3>No media found</h3>
              <p>
                Try another search or change your selected filters.
              </p>
              <button type="button" onClick={clearFilters}>
                View all media
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Media;