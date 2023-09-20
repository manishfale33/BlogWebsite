import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Carousel_middle_tablet() {
  const [blogmodels, setBlogmodels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]); // Add authors state
  const blogmodelsUrl = 'http://127.0.0.1:8000/blogmodels/';
  const categoryUrl = 'http://127.0.0.1:8000/categories/';
  const userrsUrl = 'http://127.0.0.1:8000/users/';

  useEffect(() => {
    axios.get(categoryUrl)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });

    axios.get(userrsUrl)
      .then((response) => {
        setAuthors(response.data); // Set authors state
      })
      .catch((error) => {
        console.error('Error fetching authors data:', error);
      });

    axios.get(blogmodelsUrl)
      .then((response) => {
        setBlogmodels(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blogmodels data:', error);
      });
  }, [blogmodelsUrl, categoryUrl, userrsUrl]);

  return (
    <div>
      {blogmodels.map((item) => (
        <div key={item.id} className="relative w-[600px] rounded-b-lg">
          <img src={item.image} alt="" className='h-96 ml-8 rounded-lg mt-1' />
          <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-8 w-full rounded-b-lg">
            <p className="text-gray-200 font-bold text-2xl my-2">
              {item.title}
            </p>
            <div className='flex font-semibold text-white text-sm' >
              <p>{item.author}</p>
              <p className='ml-2'>{item.created_at}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
