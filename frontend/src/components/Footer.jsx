import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-neutral-800 dark:bg-text-neutral-800 dark:text-white lg:grid-cols-3 md:grid-cols-2'>
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#38bdf8]'>MUNity Blogs</h1>
          <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
          </p>
        </div>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} className='mr-2' />
          <FaInstagram size={30} className='mr-2' />
          <FaTwitterSquare size={30} className='mr-2' />
          <FaGithubSquare size={30} className='mr-2' />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <h6 className='font-medium text-black'>Support</h6>
          <ul className='py-2'>
            <li className='text-sm'>Terms Of Use</li>
            <li className='text-sm'>Privacy Policy</li>
            <li className='text-sm'>Creators Term</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <h6 className='font-medium text-black'>Subscribe to read blogs</h6>
          <div className='flex mt-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='py-2 px-4 rounded-md border border-text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] dark:bg-gray dark:text-white'
            />
            <button className='bg-[#38bdf8] py-2 px-4 ml-2 rounded-md text-white'>
              Subscribe
            </button>
          </div>
        </div>
        <p className='text-sm text-neutral-500 dark:text-neutral-400 mt-4'>
          © 2023 MUNity. All Rights Reserved by MUNity Solutions
        </p>
      </div>
    </div>
  );
};

export default Footer;
