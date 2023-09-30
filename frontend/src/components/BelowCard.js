import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function BelowCard() {
  const [blogmodels, setBlogmodels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4, // Display 4 items in the carousel initially
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='text-font_color h5 mx-4'>
      <Carousel responsive={responsive}>
        {blogmodels.map((item) => {
          // Find the category with a matching ID
          const category = categories.find((categoryItem) => categoryItem.id === item.category);
          // Find the author with a matching ID
          const author = authors.find((authorItem) => authorItem.id === item.author);

          return (
            <div key={item.id} className="rounded-b-lg grid justify-items-center">
              <img src={item.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
              <p className='flex text-start justify-center w-96 font-bold'>{item.title}</p>
              <div className='ml-8 py-2 flex font-bold'>
                <p className=''>{author ? author.username : 'Unknown Author'}</p>
                <p className='ml-14'>{item.created_at}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
