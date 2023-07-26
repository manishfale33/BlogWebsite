import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import Typed from 'react-typed';

const Litebet = () => {
  const carouselItems = [
    './images/imageCar5.jpg',
    './images/imageCar2.jpg',
    './images/imageCar3.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselItems.length]);

  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-screen">
      <Carousel
        className="carousel"
        slideIndex={currentSlide}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className="carousel-control relative"
            onClick={previousSlide}
          >
            <span className="arrow-icon">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
              &#10094;
            </span>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="carousel-control relative" onClick={nextSlide}>
            <span className="arrow-icon">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
              &#10095;
            </span>
          </button>
        )}
        slideWidth="100%"
        wrapAround={true}
        swiping={true}
        renderBottomCenterControls={null}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-screen relative"
          >
            <img
              src={item}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Typed Component */}
              <div className="mb-8 text-center">
                <p className="text-3xl font-bold pb-4 text-black"></p>
                <Typed
                  className="text-2xl font-bold"
                  strings={[
                    'SHARE YOUR KNOWLEDGE',
                    'WITH',
                    'THE WORLD',
                    'AND',
                    'ENGAGE IN EXCITING DISCUSSIONS',
                  ]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </div>

              {/* Write Blog button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
                Write Your Own Blog
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Litebet;
