import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#38bdf8]'>MUNity Blogs</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>GeoPolitics</li>
        <li className='p-4'>Economics</li>
        <li className='p-4'>StockMarket</li>
        <li className='p-4'>SupplyChain</li>
        <li className='p-4'>LogIn</li>
      </ul>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      
      {/* Mobile Navigation Menu */}
      <ul className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#ffff] border-r border-r-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'} md:hidden`}>
        <h1 className='w-full text-3xl font-bold text-[#38bdf8] m-4'>MUNity Blogs</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>GeoPolitics</li>
        <li className='p-4 border-b border-gray-600'>Economics</li>
        <li className='p-4 border-b border-gray-600'>StockMarket</li>
        <li className='p-4 border-b border-gray-600'>SupplyChain</li>
        <li className='p-4 border-b border-gray-600'>LogIn</li>
      </ul>
    </div>
  );
};

export default Navbar;
