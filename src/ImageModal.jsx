import React from 'react';
import './ImageModal.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ImageModal = ({ image, title,content,url }) => {
    const navigate = useNavigate();

    const handleBackClick = ()=>{
        navigate('/home');
    }
   

    return (
        <div className="image-modal">
      
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <h4>{content}</h4>
         
          <Link to = {url}>Click to Read more</Link>
          <button className="back-button" onClick={handleBackClick}>
            <i className="fas fa-arrow-left"></i>
            Close
          </button>
        </div>
      );
    };

export default ImageModal;