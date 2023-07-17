import React from 'react';
import { Link } from 'react-router-dom';


const ImageItem = ({ item }) => {
 

  return (
    <div className="parent">
      <div className="image">
        <Link to={`/image/${item.node.nid}`}>
          <img src={item.node.field_photo_image_section} alt={item.node.title} />
        </Link>
      </div>
      <div className="details">
        <h3 id="title">{truncateString(item.node.title)}</h3>
        <h3 id="time">{convertTime(item.node.last_update)}</h3>
      </div>
    </div>
  );
};

export default ImageItem;