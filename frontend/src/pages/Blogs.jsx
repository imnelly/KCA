
import { Link } from 'react-router-dom';
import { FiEdit3, FiArrowUpRight, FiClock } from 'react-icons/fi';

import '../css/Blogs.css';

const articles = [
  {
    id: 1,
    category: 'Press Freedom',
    title: 'The Role of Journalism in Strengthening Democracy',
    excerpt:
      'An exploration of how independent journalism contributes to accountability, transparency and informed communities.',
    author: 'KCA Editorial Team',
    date: 'Featured article',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'Media',
    title: 'The Changing Landscape of Digital Journalism',
    excerpt:
      'How technology is transforming newsrooms, storytelling and the relationship between journalists and their audiences.',
    author: 'KCA Editorial Team',
    date: 'Featured article',
    readTime: '4 min read',
  },
  {
    id: 3,
    category: 'Community',
    title: 'Building Stronger Connections Among Correspondents',
    excerpt:
      'Why collaboration, shared knowledge and professional networks matter in the journalism community.',
    author: 'KCA Editorial Team',
    date: 'Featured article',
    readTime: '3 min read',
  },
];

function Blogs() {
  return (
    <main className="blogs-page">
      <header className="blogs-header">
        <div>
          <span className="blogs-eyebrow">KCA PUBLICATIONS</span>
          <h1>Stories that <span>matter.</span></h1>
          <p>
            Insights, perspectives and stories from Kenya's
            correspondent community.
          </p>
        </div>

        <Link to="/write-blog" className="write-blog-button">
          <FiEdit3 />
          Write an article
        </Link>
      </header>

      <section className="blogs-feature">
        <div className="blogs-feature-content">
          <span className="feature-label">THE KCA BLOG</span>
          <h2>Your voice. Your story. Your platform.</h2>
          <p>
            KCA provides a platform for members and contributors to share
            ideas, experiences and perspectives on journalism and society.
          </p>
          <Link to="/write-blog" className="feature-link">
            Contribute an article <FiArrowUpRight />
          </Link>
        </div>
      </section>

      <section className="articles-section">
        <div className="articles-heading">
          <div>
            <h2>Latest articles</h2>
            <p>Explore perspectives from our community.</p>
          </div>
          <span className="article-count">03 ARTICLES</span>
        </div>

        <div className="articles-list">
          {articles.map((article) => (
            <article className="article-card" key={article.id}>
              <div className="article-card-top">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>

              <h3>{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>

              <div className="article-card-footer">
                <span className="article-author">{article.author}</span>
                <span className="article-read-time">
                  <FiClock /> {article.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blogs-contribute">
        <div>
          <h2>Have a story to tell?</h2>
          <p>
            Share your knowledge, experiences and ideas with the KCA
            community.
          </p>
        </div>
        <Link to="/write-blog" className="contribute-link">
          Submit your article <FiArrowUpRight />
        </Link>
      </section>
    </main>
  );
}

export default Blogs;
