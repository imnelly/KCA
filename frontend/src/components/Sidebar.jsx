
import { NavLink } from 'react-router-dom';
import {
  FiHome, FiCompass, FiFileText,
  FiImage, FiBookmark, FiInfo, FiHeart
} from 'react-icons/fi';
import '../css/Sidebar.css';

const navigation = [
  { label: 'Home', icon: FiHome, path: '/' },
  { label: 'Explore', icon: FiCompass, path: '/explore' },
  { label: 'Blogs', icon: FiFileText, path: '/blogs' },
  { label: 'Media', icon: FiImage, path: '/media' },
  { label: 'Bookmarks', icon: FiBookmark, path: '/bookmarks' },
  { label: 'About KCA', icon: FiInfo, path: '/about' },
  { label: 'Donate', icon: FiHeart, path: '/donate' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-brand">
        <span className="brand-mark">K</span>
        <span>KCA<span className="brand-dot">.</span></span>
      </NavLink>

      <nav className="sidebar-nav">
        {navigation.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <NavLink to="/login" className="sidebar-login">
        Sign in
      </NavLink>

      <div className="sidebar-footer">
        <strong>Kenya Correspondents Association</strong>
        <p>Independent voices. Stronger journalism.</p>
        <span>© 2026 KCA</span>
      </div>
    </aside>
  );
}

export default Sidebar;
