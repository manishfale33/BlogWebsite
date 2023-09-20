import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-12 mx-auto  px-4 text-font_color'>
      <h1 className='w-full text-3xl font-bold text-[#38bdf8]'>MUNity Blogs</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        <li className='p-4 h5'>Home</li>
        <li className='p-4 h5'>GeoPolitics</li>
        <li className='p-4 h5'>Economics</li>
        <li className='p-4 h5'>StockMarket</li>
        <li className='p-4 h5'>SupplyChain</li>
        <li className='p-4 h5'>LogIn</li>
      </ul>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
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
    </div>
  );
};

export default Navbar;