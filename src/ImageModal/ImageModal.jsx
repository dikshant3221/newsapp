import React, { useState } from 'react';
import './ImageModal.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ImageModal = ({ image, title, content, url, setSelectedImage }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setState(true);
    setSelectedImage(null);
  }

  return (
    !state ? (
      <div className="image-modal">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h4>{content}</h4>
        <div>
          <Link to={url}>Click to Read more</Link>
          <button className="back-button" onClick={handleBackClick}>
            <i className="fas fa-arrow-left"></i>
            X
          </button>
        </div>

      </div>
    ) : null
  );
};

export default ImageModal;