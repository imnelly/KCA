
import { useState } from 'react';
import {
  FiHeart,
  FiMessageCircle,
  FiBookmark,
  FiShare2,
  FiMoreHorizontal,
  FiCheckCircle,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../css/PostCard.css';

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async () => {
    const postUrl = `${window.location.origin}/posts/${post.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.content,
          url: postUrl,
        });
      } else {
        await navigator.clipboard.writeText(postUrl);
        setShareMessage('Link copied!');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        setShareMessage('Unable to share right now.');
      }
    }
  };

  return (
    <article className="post-card">
      <div className="post-header">
        <div className="post-avatar">
          {post.author.charAt(0)}
        </div>

        <div className="post-author-info">
          <div className="post-author-name">
            <strong>{post.author}</strong>

            {post.verified && (
              <FiCheckCircle
                className="verified-icon"
                aria-label="Verified account"
              />
            )}
          </div>

          <span>
            {post.role} · {post.time}
          </span>
        </div>

        <button
          type="button"
          className="post-more"
          aria-label="More post options"
        >
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="post-content">
        {post.category && (
          <span className="post-category">
            {post.category}
          </span>
        )}

        <h3>{post.title}</h3>
        <p>{post.content}</p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
            loading="lazy"
          />
        )}
      </div>

      <div className="post-actions">
        <button
          type="button"
          className={`action-button ${liked ? 'liked' : ''}`}
          onClick={() => setLiked((previous) => !previous)}
          aria-label={liked ? 'Unlike post' : 'Like post'}
          aria-pressed={liked}
        >
          <FiHeart />
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>

        <Link
          to="/login"
          className="action-button"
          aria-label="Sign in to comment"
        >
          <FiMessageCircle />
          <span>{post.comments}</span>
        </Link>

        <button
          type="button"
          className={`action-button ${saved ? 'saved' : ''}`}
          onClick={() => setSaved((previous) => !previous)}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark post'}
          aria-pressed={saved}
        >
          <FiBookmark />
        </button>

        <button
          type="button"
          className="action-button share-button"
          onClick={handleShare}
          aria-label="Share post"
        >
          <FiShare2 />
        </button>
      </div>

      {shareMessage && (
        <p className="share-feedback" role="status">
          {shareMessage}
        </p>
      )}
    </article>
  );
}

export default PostCard;
