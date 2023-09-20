import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Carousel_1() {
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
      {/* Map over blogmodels to display items */}
      {blogmodels.map((item) => {
        // Find the category with a matching ID
        const category = categories.find((category) => category.id === item.category);
        // Find the author with a matching ID
        const author = authors.find((author) => author.id === item.author);

        return (
          <div key={item.id} className="relative w-[375px] rounded-b-lg">
            {/* Add loading="lazy" to the img element for lazy loading */}
            <img
              src={item.image}
              alt=""
              className="h-48 w-96 lg:ml-14 rounded-lg"
              loading="lazy"
            />
            <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 lg:left-14 w-full rounded-b-lg">
              <p className="text-gray-200 font-bold">{item.title}</p>
              <p className="text-gray-200 font-bold">Category: {category ? category.name : 'Unknown'}</p>
              <p className="text-gray-200 font-bold">Author: {author ? author.email : 'Unknown'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// for images use lazy loading
