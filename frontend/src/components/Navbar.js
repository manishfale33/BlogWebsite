import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (event) => {
    // Add your search logic here
    console.log('Search Value:', event.target.value);
  };

  return (
    <div className='flex justify-between items-center h-12 mx-auto px-4 text-font_color bg-patch_color'>
      <h1 className='w-full text-3xl font-bold text-[#38bdf8]'>MUNity Blogs</h1>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
       {/* Mobile Navigation Menu */}
       <ul className={`${nav ? 'fixed left-0 top-0 w-[60%] h-11/12 bg-[#ffff] border-r border-r-gray-900 ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%]'} md:hidden`}>
        <h1 className='w-full text-3xl font-bold text-[#38bdf8] m-4'>MUNity Blogs</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>GeoPolitics</li>
        <li className='p-4 border-b border-gray-600'>Economics</li>
        <li className='p-4 border-b border-gray-600'>StockMarket</li>
        <li className='p-4 border-b border-gray-600'>SupplyChain</li>
        <li className='p-4 border-b border-gray-600'>LogIn</li>
      </ul>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-4'>
        <li className='p-4'>Home</li>
        <li className='p-4'>GeoPolitics</li>
        <li className='p-4'>Economics</li>
        <li className='p-4'>StockMarket</li>
        <li className='p-4'>SupplyChain</li>
        <li className='p-4'>LogIn</li>
      </ul>

      {/* Search Bar Icon */}
      <div className='relative flex items-center'>
        <FaSearch
          size={20}
          className={`cursor-pointer ${showSearch ? 'mr-2' : 'mr-0'}`}
          onClick={handleSearchIconClick}
        />
        {showSearch && ( // Show input when showSearch is true
          <input
            type='text'
            placeholder='Search...'
            onChange={handleSearchChange}
            className='w-40 md:w-60 px-4 py-2 border rounded-md outline-none transition-all duration-300 ease-in-out'
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
