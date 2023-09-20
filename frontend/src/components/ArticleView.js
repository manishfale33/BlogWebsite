import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ArticleView() {
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
    <div className='text-font_color'>
      <Navbar />
      {blogmodels.map((item) => {
        // Find the category with a matching ID
        const category = categories.find((category) => category.id === item.category);
        // Find the author with a matching ID
        const author = authors.find((author) => author.id === item.author);

        return (
          <div className='' key={item.id}>
            <p className='mt-6 ml-1 md:ml-24 lg:ml-[320px] sm:pt-12 sm:tracking-tight text-black'>Category &gt; {category ? category.name : 'Unknown'}</p>
            <h1 className='mt-4 ml-1 md:ml-24 lg:ml-[320px] sm:pt-8 sm:tracking-wider font-bold sm:text-3xl text-font_color md:w-[580px]'>{item.title}<br />
              {item.slug}</h1>
            <p className='mt-4 ml-1 md:ml-24 lg:ml-[320px] sm:mt-8 tracking-tight'>{item.created_at}</p>
            <div className='md:ml-24  lg:flex lg:justify-center'>
              <img src={item.image} alt="" className='mt-4 mx-1 w-11/12 lg:h-[400px] sm:mt-12 lg:w-7/12 sm:flex lg:justify-center lg:align-center lg:mr-[120px] rounded-lg' />
            </div>
            <div className='flex justify-center'>
              {/* Use dangerouslySetInnerHTML to display HTML content */}
              <p dangerouslySetInnerHTML={{ __html: item.content }} className='tracking-tight mx-1 sm:mt-12 sm:tracking-normal md:w-[650px] lg:w-[800px] md:ml-8'></p>
            </div>

            <div className='mx-1 mt-4 flex justify-between sm:mx-24 lg:mx-[330px] sm:mt-12'>
              <h2>By {author ? author.username : 'Unknown'}</h2> {/* Display author name */}
              <h2>{item.like_post} likes</h2>
            </div>
          </div>
        );
      })}
      <Link to="/">home</Link>
    </div>
  );
}
