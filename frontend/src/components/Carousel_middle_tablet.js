import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Carousel_middle_tablet() {
  const [blogmodels, setBlogmodels] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]); // Add authors state
  const blogmodelsUrl = 'http://127.0.0.1:8000/blogmodels/';
  const categoryUrl = 'http://127.0.0.1:8000/categories/';
  const userrsUrl = 'http://127.0.0.1:8000/users/';

  useEffect(() => {
    // Fetch data only once when the component mounts
    axios.get(categoryUrl)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });

    axios.get(userrsUrl)
      .then((response) => {
        setAuthors(response.data);
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
    // Automatically transition to the next card every 5 seconds
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % blogmodels.length);
    }, 5000);

    return () => {
      clearInterval(timer); // Clear the timer on component unmount
    };
  }, [blogmodels]);

  return (
    <div>
      {blogmodels.length > 0 && (
        <div key={blogmodels[currentCardIndex].id} className="relative w-[600px] rounded-b-lg">
          <img src={blogmodels[currentCardIndex].image} alt="" className='h-96 ml-8 rounded-lg mt-1' />
          <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-8 w-full rounded-b-lg">
            <p className="text-gray-200 font-bold text-2xl my-2">
              {blogmodels[currentCardIndex].title}
            </p>
            <div className='flex font-semibold text-white text-sm' >
              <p>{getAuthorName(blogmodels[currentCardIndex].author, authors)}</p>
              <p className='ml-2'>{blogmodels[currentCardIndex].created_at}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getAuthorName(authorId, authors) {
  const author = authors.find((authorItem) => authorItem.id === authorId);
  return author ? author.username : 'Unknown';
}
