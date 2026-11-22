import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import '../css/FloatingDonate.css';

function FloatingDonate() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleDonate = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      navigate('/donate#paybill');
      setIsAnimating(false);
    }, 850);
  };

  return (
    <>
      <button
        type="button"
        className="floating-donate"
        onClick={handleDonate}
        aria-label="Support KCA through donations"
      >
        <FiHeart />
        <span>Support KCA</span>
      </button>

      {isAnimating && (
        <div className="donation-transition">
          <FiHeart className="transition-heart" />
        </div>
      )}
    </>
  );
}

export default FloatingDonate;