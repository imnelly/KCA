
import { useState } from 'react';
import { FiEdit3, FiImage, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import '../css/Home.css';

const samplePosts = [
  {
    id: 1,
    author: 'KCA Editorial',
    role: 'Association',
    time: '2 hours ago',
    verified: true,
    category: 'Journalism',
    title: 'Welcome to the KCA digital community',
    content:
      'A new digital space for correspondents, journalists and everyone passionate about journalism in Kenya. Connect, share your experiences and discover stories from across the country.',
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: 'KCA Community',
    role: 'Community',
    time: '5 hours ago',
    verified: true,
    category: 'Community',
    title: 'The power of sharing stories',
    content:
      'Journalism connects communities, brings important issues to light and gives people a platform to be heard. We look forward to hearing your stories and perspectives.',
    likes: 18,
    comments: 5,
  },
  {
    id: 3,
    author: 'KCA Editorial',
    role: 'Association',
    time: 'Yesterday',
    verified: true,
    category: 'Announcements',
    title: 'A platform for voices across Kenya',
    content:
      'Explore our growing community and stay connected with the latest publications, photography, videos and activities from KCA.',
    likes: 32,
    comments: 12,
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState('For you');

  const displayedPosts =
    activeTab === 'Latest'
      ? [...samplePosts].reverse()
      : samplePosts;

  return (
    <main className="home-feed">
      <header className="feed-header">
        <div>
          <h1>Home</h1>
          <p>Your connection to the KCA community.</p>
        </div>
      </header>

      <div className="feed-tabs">
        {['For you', 'Latest'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? 'selected' : ''}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="create-post">
        <div className="create-avatar">K</div>

        <div className="create-content">
          <p>Have a story worth sharing?</p>

          <div className="create-options">
            <Link to="/login">
              <FiImage />
              <span>Photo</span>
            </Link>

            <Link to="/login">
              <FiVideo />
              <span>Video</span>
            </Link>
          </div>
        </div>

        <Link to="/login" className="write-button">
          <FiEdit3 />
          <span>Write</span>
        </Link>
      </section>

      <div className="feed-section-title">
        <h2>Community feed</h2>
        <span>
          {activeTab === 'Latest'
            ? 'Discover the latest community updates'
            : "Discover what's happening"}
        </span>
      </div>

      <div className="feed-posts">
        {displayedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="feed-end">
        <span />
        <p>You're all caught up.</p>
        <span />
      </div>
    </main>
  );
}

export default Home;
