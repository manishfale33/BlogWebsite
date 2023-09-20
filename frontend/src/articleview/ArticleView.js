import { Link } from "react-router-dom";
import images from '../images';
import Navbar from '../components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Heading() {
  const [blogmodels, setData] = useState([]);
  const Url = 'http://127.0.0.1:8000/blogmodels/';
  
  useEffect(() => {
    axios.get(Url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='text-font_color'>
      <Navbar />
      {blogmodels.map((item) => (
        <div className='' key={item.id}>
          <p className='mt-6 ml-1 md:ml-24 lg:ml-[320px] sm:pt-12 sm:tracking-tight text-black'>Category &gt; {item.category}</p>
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
            <h2>By {item.author}</h2>
            <h2>{item.like_post} likes</h2>
          </div>
        </div>
      ))}
      <Link to="/">home</Link>
    </div>
  )
}
