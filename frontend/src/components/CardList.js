import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import BelowCard from './BelowCard';

export default function CardList({ image }) {
  const [blogmodels, setBlogmodels] = useState([]);
  const [authors, setAuthors] = useState([]);
  const blogmodelsUrl = 'http://127.0.0.1:8000/blogmodels/';
  const userrsUrl = 'http://127.0.0.1:8000/users/';

  useEffect(() => {
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
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div className="">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="w-full"
        itemClass="p-2"
      >
        {blogmodels?.map((blog, i) => (
          <div key={i} className="">
            <BelowCard image={image[i]} blog={blog} authors={authors} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
