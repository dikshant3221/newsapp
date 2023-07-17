import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './fetchImage.css';
import ImageModal from './ImageModal';

const FetchImageApi = () => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0') -1;
    return `${year}-${month}-${day}`;
  }

  function truncateString(str) {
    const words = str.split(' ');
    if (words.length <= 8) {
      return str;
    } else {
      const truncatedWords = words.slice(0, 8);
      return truncatedWords.join(' ') + ' ...';
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://newsapi.org/v2/everything?q=all&from=" + getCurrentDate()+"&sortBy=publishedAt&apiKey=958ed184d27145a6bf679c6a8bceee9f"
        const response = await axios.get(url);
        const newItems = response.data.articles;
        setData((prevData) => [...prevData, ...newItems]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <div>
      {selectedImage ? (
        <ImageModal
          image={selectedImage.urlToImage}
          title={selectedImage.title}
          content = {selectedImage.description}
          url = {selectedImage.url}
        />
      ) : (
        data.map((item) => (
          <div>
          {item.urlToImage?
            <div key={item.url} className="parent">
            <div className="image">
              <Link  onClick={() => handleImageClick(item)}>
                <img src={item.urlToImage} alt={item.title} />
              </Link>
            </div>
            <div className="details">
              <h3 id="title">{truncateString(item.title)}</h3>
              <h3 id="time">{item.publishedAt}</h3>
            </div>
          </div>:null}
          </div>
         
        ))
      )}
    </div>
  );
};

export default FetchImageApi;