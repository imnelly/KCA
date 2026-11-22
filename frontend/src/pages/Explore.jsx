
import { useMemo, useState } from 'react';
import {
  FiSearch,
  FiTrendingUp,
  FiHash,
  FiArrowUpRight,
  FiUsers,
  FiX,
} from 'react-icons/fi';

import PostCard from '../components/PostCard';
import '../css/Explore.css';

const categories = [
  'All',
  'Journalism',
  'Press Freedom',
  'Politics',
  'Media',
  'Technology',
  'Community',
];

const trendingTopics = [
  { name: 'PressFreedom', posts: '245 posts', category: 'Press Freedom' },
  { name: 'DigitalJournalism', posts: '189 posts', category: 'Technology' },
  { name: 'MediaEthics', posts: '156 posts', category: 'Journalism' },
  { name: 'KenyanMedia', posts: '132 posts', category: 'Media' },
  { name: 'CommunityReporting', posts: '98 posts', category: 'Community' },
];

const discoverPosts = [
  {
    id: 101,
    author: 'Grace Wanjiku',
    role: 'Senior Correspondent',
    time: '2 hours ago',
    verified: true,
    category: 'Press Freedom',
    title: 'Why press freedom matters more than ever',
    content:
      'Independent journalism remains one of the strongest pillars of accountability. As journalists, we have a responsibility to keep asking questions, telling important stories and giving communities a voice.',
    likes: 128,
    comments: 24,
  },
  {
    id: 102,
    author: 'David Mwangi',
    role: 'Digital Journalist',
    time: '4 hours ago',
    verified: true,
    category: 'Technology',
    title: 'How artificial intelligence is changing newsrooms',
    content:
      'AI is creating new opportunities for research, fact-checking and storytelling. But how do we embrace these tools while protecting accuracy, ethics and public trust?',
    likes: 86,
    comments: 17,
  },
  {
    id: 103,
    author: 'Faith Njeri',
    role: 'Political Correspondent',
    time: '6 hours ago',
    verified: false,
    category: 'Politics',
    title: 'The importance of local voices in national conversations',
    content:
      'News coverage becomes more meaningful when the experiences of ordinary citizens are included. Local reporting helps connect national decisions to the people they affect.',
    likes: 64,
    comments: 12,
  },
  {
    id: 104,
    author: 'Brian Otieno',
    role: 'Media Researcher',
    time: 'Yesterday',
    verified: false,
    category: 'Media',
    title: 'Building trust between journalists and their audiences',
    content:
      'Transparency, responsible reporting and meaningful engagement are essential to building stronger relationships between media organisations and the communities they serve.',
    likes: 92,
    comments: 19,
  },
  {
    id: 105,
    author: 'Mary Atieno',
    role: 'Community Correspondent',
    time: 'Yesterday',
    verified: true,
    category: 'Community',
    title: 'Why community reporting deserves more attention',
    content:
      'Some of the most important stories begin in our neighbourhoods. Community journalism brings visibility to local challenges, achievements and the people making a difference.',
    likes: 73,
    comments: 15,
  },
];

function Explore() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return discoverPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;

      const searchableText = [
        post.author,
        post.role,
        post.category,
        post.title,
        post.content,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const selectTrendingTopic = (topic) => {
    setActiveCategory(topic.category);
    setSearch('');
  };

  return (
    <main className="explore-page">
      <header className="explore-header">
        <div>
          <span className="explore-eyebrow">DISCOVER THE COMMUNITY</span>
          <h1>Explore</h1>
          <p>
            Discover conversations, perspectives and stories
            from the KCA community.
          </p>
        </div>
      </header>

      <section className="explore-search-section">
        <div className="explore-search">
          <FiSearch />
          <input
            type="search"
            placeholder="Search topics, stories or contributors..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search Explore"
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
      </section>

      <section className="trending-section">
        <div className="explore-section-heading">
          <div className="heading-icon">
            <FiTrendingUp />
          </div>
          <div>
            <h2>Trending topics</h2>
            <p>What the community is talking about</p>
          </div>
        </div>

        <div className="trending-topics">
          {trendingTopics.map((topic, index) => (
            <button
              type="button"
              className={`trending-topic ${
                activeCategory === topic.category ? 'active' : ''
              }`}
              key={topic.name}
              onClick={() => selectTrendingTopic(topic)}
            >
              <span className="topic-number">0{index + 1}</span>
              <span className="topic-details">
                <strong>
                  <FiHash />
                  {topic.name}
                </strong>
                <small>{topic.posts}</small>
              </span>
              <FiArrowUpRight className="topic-arrow" />
            </button>
          ))}
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-heading">
          <div className="explore-section-heading">
            <div className="heading-icon">
              <FiUsers />
            </div>
            <div>
              <h2>Discover posts</h2>
              <p>Conversations from across our community</p>
            </div>
          </div>

          <span className="discover-count">
            {filteredPosts.length} POSTS
          </span>
        </div>

        <div className="explore-categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category ? 'category-active' : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {(search || activeCategory !== 'All') && (
          <div className="active-filter">
            <span>
              Showing results for{' '}
              <strong>{search || activeCategory}</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
              }}
            >
              Clear filters <FiX />
            </button>
          </div>
        )}

        <div className="discover-posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="explore-empty-state">
              <FiSearch />
              <h3>No posts found</h3>
              <p>
                Try another search term or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Explore;
