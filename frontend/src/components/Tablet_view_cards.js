import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Tablet_view_cards() {
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
      <div className='text-font_color flex justify-center items-center flex-col'>
        {blogmodels.map((item) => (
          <div key={item.id} className="rounded-b-lg ml-8 flex items-center">
            <div>
              <img src={item.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
            </div>
            <div>
              <p className='flex w-96 font-bold ml-4'>{item.title}</p>
              <div className='flex ml-4 my-4'>
                <p className='flex'>{item.author}</p>
                <p className='ml-14'>{item.created_at}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
