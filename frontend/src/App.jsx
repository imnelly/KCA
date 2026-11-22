
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Explore from './pages/Explore';
import Media from './pages/Media';
import About from './pages/About';
import Donate from './pages/Donate';
import CreateBlog from './pages/CreateBlog';
import FloatingDonate from './components/FloatingDonate';

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
          <Route path="/about" element={<About KCA />} />
          <Route path="/donate" element={<Donate KCA />} />
          <Route path="/login" element={<Placeholder title="Welcome Back" />} />
          <Route path="/register" element={<Placeholder title="Join KCA" />} />
        </Routes>
      </div>

      <RightSidebar />

      <FloatingDonate />
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
