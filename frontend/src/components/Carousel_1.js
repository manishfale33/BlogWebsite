import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Carousel_1() {
  const [blogmodels, setBlogmodels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]); // Add authors state
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Track the current article
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

  useEffect(() => {
    // Automatically transition to the next article every 5 seconds
    const timer = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % blogmodels.length);
    }, 5000);

    return () => {
      clearInterval(timer); // Clear the timer on component unmount
    };
  }, [blogmodels]);

  return (
    <div>
      {/* Display the current article */}
      {blogmodels.length > 0 && (
        <div key={blogmodels[currentArticleIndex].id} className="relative w-[375px] rounded-b-lg">
          {/* Add loading="lazy" to the img element for lazy loading */}
          <img
            src={blogmodels[currentArticleIndex].image}
            alt=""
            className="h-48 w-96 lg:ml-14 rounded-lg"
            loading="lazy"
          />
          <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 lg:left-14 w-full rounded-b-lg">
            <p className="text-gray-200 font-bold">{blogmodels[currentArticleIndex].title}</p>
            <p className="text-gray-200 font-bold">Category: {categories.find((category) => category.id === blogmodels[currentArticleIndex].category)?.name || 'Unknown'}</p>
            <p className="text-gray-200 font-bold">Author: {authors.find((author) => author.id === blogmodels[currentArticleIndex].author)?.email || 'Unknown'}</p>
          </div>
        </div>
      )}
    </div>
  );
}
