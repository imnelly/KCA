
import { FiArrowUpRight, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../css/RightSidebar.css';

function RightSidebar() {
  return (
    <aside className="right-sidebar">

      <div className="right-search">
        <input type="search" placeholder="Search KCA..." />
      </div>

      <section className="right-panel about-panel">
        <h3>About KCA</h3>
        <p>
          The Kenya Correspondents Association brings together
          correspondents and journalists, supporting professional
          growth and stronger journalism.
        </p>
        <Link to="/about">
          Learn more <FiArrowUpRight />
        </Link>
      </section>

      <section className="right-panel">
        <h3>Explore KCA</h3>

        <Link to="/blogs" className="explore-item">
          <span>Latest stories</span>
          <FiArrowUpRight />
        </Link>

        <Link to="/media" className="explore-item">
          <span>Photo & video gallery</span>
          <FiArrowUpRight />
        </Link>

        <Link to="/about" className="explore-item">
          <span>Leadership & partners</span>
          <FiArrowUpRight />
        </Link>
      </section>

      <section className="join-panel">
        <FiUsers className="join-icon" />
        <h3>Be part of the conversation.</h3>
        <p>
          Join a community of journalists and people passionate
          about journalism in Kenya.
        </p>
        <Link to="/register" className="join-button">
          Join KCA
        </Link>
      </section>

      <footer className="right-footer">
        <span>About</span>
        <span>Privacy</span>
        <span>Terms</span>
        <p>© 2026 Kenya Correspondents Association</p>
      </footer>

    </aside>
  );
}

export default RightSidebar;
