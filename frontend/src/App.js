import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import HomeHeading from './components/HomeHeading';
import Carousel_1 from './components/Carousel_1';
import BelowCard from './components/BelowCard';
import Carousel_midde from './components/Carousel_midde';
import Images from './images/index.js';
import HomeMobile from './components/HomeMobile';
import Carousel_middle_tablet from './components/Carousel_middle_tablet';
import Tablet_view_cards from './components/Tablet_view_cards';
import MostRead_tablet from './components/MostRead_tablet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnotherHome from './components/AnotherHome';

function App() {
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
    <div>

      <div>
        {/* navbar */}
        <Navbar />
        {/*hero secation with carousel */}
        <Hero/>
        {/* home heading for all screens */}
        <HomeHeading />
        <div className='flex'>
          {/* left side for big screens*/}
          <div className=" hidden lg:flex flex-col px-6 ml-4">
            <div className='mt-10'>
              <Carousel_1 text="Algorithmic trading for multiple commodities markets, like Forex, Metals, Energy, etc." image={Images.img4} />
            </div>
            <div className='mt-6'>
              <Carousel_1 text="Trading Bot for FOREX" image={Images.img3} />
            </div>
          </div>
          {/* middle part big screens*/}
          <div className='mt-10 hidden lg:flex'>
            <Carousel_midde text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
          </div>
          {/* lower side big screens*/}
          <div className="px-6 hidden lg:flex flex-col">
            <div className='mt-10'>
              <Carousel_1 text="Python model for the analysis of sector-specific stock ETFs for investment purposes" image={Images.img1} />
            </div>
            <div className='mt-6'>
              <Carousel_1 text="Medical Classification" image={Images.img2} />
            </div>
          </div>
        </div>
      </div>
      {/* carousel for big screens */}
      <div className='hidden lg:block mx-20 mt-4'>
        <Carousel responsive={responsive}>
          <div > <BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} /></div>
          <div><BelowCard text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} /></div>
          <div ><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
          <div ><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
        </Carousel>
      </div>
      {/* most read for big screens */}
      <div className=' bg-patch_color'>
        <h2 className='ml-24 my-12 font-bold text-font_color text-2xl hidden lg:block'>Most read</h2>
        <div className='hidden lg:block mx-12 mt-4'>
          <Carousel responsive={responsive}>
            <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} /></div>
            <div><BelowCard text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} /></div>
            <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
            <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
          </Carousel>
        </div>
      </div>

      {/* home screen for mobile */}
      <div className='flex flex-col sm:hidden'>
        <HomeMobile text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
        <HomeMobile text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} />
        <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} />
        <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img4} />
      </div>
      {/* home screen for tablet */}
      <div className="hidden md:flex lg:hidden">
        <div className='flex flex-col'>
          <Carousel_middle_tablet text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
          <Tablet_view_cards text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
          <Tablet_view_cards text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
          <Tablet_view_cards text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
        </div>
      </div>
      {/* most read for phone view */}
      <div className='bg-patch_color'>
        <h2 className='font-bold text-xl ml-4 my-6 md:hidden'>Most read</h2>
        <div className='flex flex-col sm:hidden'>
          <HomeMobile text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
          <HomeMobile text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} />
          <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} />
          <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img4} />
        </div>
      </div>
      {/* most read for tablet view */}
      <div className='bg-patch_color'>
        <h2 className='font-bold text-xl ml-8 my-6 hidden md:flex lg:hidden'>Most read</h2>
        <div className="hidden md:flex lg:hidden">
          <div>
            <MostRead_tablet text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
            <MostRead_tablet text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
          </div>
          <div>
            <MostRead_tablet text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
            <MostRead_tablet text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
          </div>
        </div>
      </div>
      <Footer />

    </div >
  );

}

export default App;
