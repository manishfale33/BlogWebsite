import 'react-multi-carousel/lib/styles.css';
import './App.css';
import HomeHeading from './components/HomeHeading';
import Carousel_1 from './components/Carousel_1';
import BelowCard from './components/BelowCard';
import Carousel_middle from './components/Carousel_midde';
import HomeMobile from './components/HomeMobile';
import Carousel_middle_tablet from './components/Carousel_middle_tablet';
import MostRead_tablet from './components/MostRead_tablet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useState, useEffect } from "react";
import Header from './components/Header';


function App() {

  const [darkmode, setdarkmode] = useState(false)

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className={`${darkmode && 'dark-mode'}  bg-patch_color`}>
      <div className='min-h-[100vh]'>
        {/* navbar */}
        <Navbar/>
        {/* Hero */}
        <Hero/>
        {/* home heading for all screens */}
        <HomeHeading />
        <div className='flex'>
          {/* left side for big screens*/}
          <div className="  ">
            <div className=''>
              <Carousel_1 />
            </div>
            <div className=''>
             
            </div>
          </div>
          {/* middle part big screens*/}
          <div className='mt-10 hidden lg:flex'>
            
          </div>
          {/* lower side big screens*/}
          <div className="px-6 hidden lg:flex flex-col">
            <div className='mt-10'>
             
            </div>
            <div className='mt-6'>
              
            </div>
          </div>
        </div>
      </div>
      {/* carousel for big screens */}
      <div className='hidden lg:block mx-20 mt-4 '>
      
          <div className ='full-w'> <BelowCard/></div>
        
      </div>
      {/* most read for big screens */}
      <div className='  dark:text-white'>
        <h2 className='ml-24 my-12 font-bold text-font_color text-2xl hidden lg:block h5'>Most read</h2>
        <div className='hidden lg:block mx-12 mt-4'>
          
            <div><BelowCard/></div>
         
        </div>
      </div>

      {/* home screen for mobile */}
      <div className='flex flex-col sm:hidden'>
        <HomeMobile />
      </div>
      {/* home screen for tablet */}
      <div className="hidden md:flex lg:hidden">
        <div className='flex flex-col'>
          <Carousel_middle_tablet />  
        </div>
      </div>
      {/* most read for phone view */}
      <div className='bg-patch_color'>
        <h2 className='font-bold text-xl ml-4 my-6 md:hidden'>Most read</h2>
        <div className='flex flex-col sm:hidden'>
          <HomeMobile/>
        </div>
      </div>
      {/* most read for tablet view */}
      <div className='bg-patch_color '>
        <h2 className='font-bold text-xl ml-8 my-6 hidden md:flex lg:hidden'>Most read</h2>
        <div className="hidden md:flex lg:hidden">
          <div>
            <MostRead_tablet  />
          </div>
          <div>
          </div>
        </div>
      </div>
      <Header handleToggleDarkMode={setdarkmode} />
      <Footer />
        
      

    </div >
  );

}

export default App;