import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
  const backgroundImageUrl = 'url(" ")';

  return (
    <div className='text-black' style={{ backgroundImage: backgroundImageUrl }}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['SHARE YOUR KNOWLEDGE', ' WITH', 'THE WORLD', 'AND', 'ENGAGE IN EXCITING DISCUSSIONS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='bg-[#38bdf8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> write your own blog </button>
      </div>
    </div>
  );
};

export default Hero;
