
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Explore from './pages/Explore';
import Media from './pages/Media';
import CreateBlog from './pages/CreateBlog';

import './css/App.css';

function Placeholder({ title }) {
  return (
    <main className="placeholder-page">
      <h1>{title}</h1>
      <p>This section is currently under development.</p>
    </main>
  );
}

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/write-blog" element={<CreateBlog />} />
          <Route path="/media" element={<Media Gallery />} />
          <Route path="/bookmarks" element={<Placeholder title="Bookmarks" />} />
          <Route path="/about" element={<Placeholder title="About KCA" />} />
          <Route path="/donate" element={<Placeholder title="Support KCA" />} />
          <Route path="/login" element={<Placeholder title="Welcome Back" />} />
          <Route path="/register" element={<Placeholder title="Join KCA" />} />
        </Routes>
      </div>

      <RightSidebar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
