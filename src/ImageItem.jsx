import React from 'react';

const ImageItem = ({ item }) => {
  const convertTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
  };

  function truncateString(str) {
    const words = str.split(' ');
    if (words.length <= 8) {
      return str;
    } else {
      const truncatedWords = words.slice(0, 8);
      return truncatedWords.join(' ') + ' ...';
    }
  }

  return (
    <div className="parent">
      <div className="image">
        <img src={item.node.field_photo_image_section} alt={item} />
      </div>
      <div className="details">
        <h3 id="title">{truncateString(item.node.title)}</h3>
        <h3 id="time">{convertTime(item.node.last_update)}</h3>
      </div>
    </div>
  );
};

export default ImageItem;