
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiImage,
  FiFileText,
  FiSend,
  FiSave,
  FiX,
} from 'react-icons/fi';

import '../css/CreateBlog.css';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!image) {
      setPreview('');
      return;
    }

    const imageUrl = URL.createObjectURL(image);
    setPreview(imageUrl);

    return () => URL.revokeObjectURL(imageUrl);
  }, [image]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleDraft = () => {
    setMessage('Your article has been saved as a draft (demo only).');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      'Your article has been submitted for administrator review (demo only).'
    );
  };

  return (
    <main className="create-blog-page">
      <Link to="/blogs" className="back-to-blogs">
        <FiArrowLeft /> Back to Blogs
      </Link>

      <div className="create-blog-heading">
        <span className="create-blog-eyebrow">KCA CONTRIBUTOR PLATFORM</span>
        <h1>Write an article</h1>
        <p>
          Share your ideas, experiences and perspectives with the
          correspondent community.
        </p>
      </div>

      {message && (
        <div className="submission-message">
          <span>{message}</span>
          <button type="button" onClick={() => setMessage('')}>
            <FiX />
          </button>
        </div>
      )}

      <form className="blog-editor-form" onSubmit={handleSubmit}>
        <div className="editor-section">
          <div className="editor-section-heading">
            <FiFileText />
            <h2>Article details</h2>
          </div>

          <div className="editor-field">
            <label htmlFor="article-title">Article title</label>
            <input
              id="article-title"
              type="text"
              placeholder="Give your article a clear title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              maxLength={150}
            />
          </div>

          <div className="editor-field">
            <label htmlFor="article-category">Category</label>
            <select
              id="article-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Journalism">Journalism</option>
              <option value="Press Freedom">Press Freedom</option>
              <option value="Media">Media</option>
              <option value="Community">Community</option>
              <option value="Opinion">Opinion</option>
              <option value="News">News</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="editor-field">
            <label htmlFor="article-summary">Short summary</label>
            <textarea
              id="article-summary"
              placeholder="Briefly describe what your article is about..."
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
              rows="3"
              maxLength={300}
              required
            />
            <span className="field-hint">
              {summary.length}/300 characters
            </span>
          </div>
        </div>

        <div className="editor-section">
          <div className="editor-section-heading">
            <FiImage />
            <h2>Featured image</h2>
          </div>

          <label className="image-upload-area" htmlFor="featured-image">
            {preview ? (
              <img src={preview} alt="Featured article preview" />
            ) : (
              <>
                <FiImage className="upload-icon" />
                <strong>Upload a featured image</strong>
                <span>Click to browse your files</span>
                <small>JPG, PNG or WEBP</small>
              </>
            )}
          </label>

          <input
            id="featured-image"
            className="hidden-file-input"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleImageChange}
          />

          {image && (
            <button
              type="button"
              className="remove-image-button"
              onClick={() => setImage(null)}
            >
              <FiX /> Remove image
            </button>
          )}
        </div>

        <div className="editor-section">
          <div className="editor-section-heading">
            <FiFileText />
            <h2>Article content</h2>
          </div>

          <div className="editor-field">
            <label htmlFor="article-content">Your article</label>
            <textarea
              id="article-content"
              className="article-content-input"
              placeholder="Start writing your article here..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
            <span className="field-hint">
              Write clearly and ensure your article is original and
              appropriate for publication.
            </span>
          </div>
        </div>

        <div className="editor-notice">
          <strong>What happens next?</strong>
          <p>
            Once submitted, your article will be sent to the KCA
            administrators for review. It will only be published after
            approval.
          </p>
        </div>

        <div className="editor-actions">
          <button
            type="button"
            className="save-draft-button"
            onClick={handleDraft}
          >
            <FiSave /> Save draft
          </button>

          <button type="submit" className="submit-article-button">
            <FiSend /> Submit for review
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateBlog;
