import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './fetchImage.css';
import ImageItem from './ImageItem';

const FetchImageApi = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/data');
        const newItems = response.data.nodes;
        setData((prevData) => [...prevData, ...newItems]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = data.slice(0, indexOfLastItem);

  const moveToNextPage = () => {
    const nextPage = currentPage + 1 > totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  return (
    <div>
      {currentItems.map((item) => (
        <ImageItem key={item.node.id} item={item} />
      ))}
      <button onClick={moveToNextPage}>NextPage</button>
    </div>
  );
};

export default FetchImageApi;  