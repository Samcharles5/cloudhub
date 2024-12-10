import React from 'react';
import '../styles/custom.css'; // Ensure this imports your custom CSS
import image1 from '../assets/images/hero/hero1.png';
import image2 from '../assets/images/hero/hero2.png';
import image3 from '../assets/images/hero/hero3.png';
import image4 from '../assets/images/hero/hero4.png';
import image5 from '../assets/images/hero/hero5.png';
import image6 from '../assets/images/hero/hero5.png';
import backgroundImage from '../assets/images/BGimg.png';

function Hero() {

  const mar = {
    marginTop: '-20%'
  };

  return (
    <section
      className="hero min-h-screen flex items-center justify-center bg-gray-100 animated-background" 
      style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}
    >
      <div className="container mx-auto p-8">
        <div className="text-center mb-12" style={mar}>
          <h1 className="text-3xl font-bold text-gray-800 typing md:text-4xl sm:text-2xl">Create, inspect, and apply synthetic surveillance broadly.</h1>
          <p className="text-gray-600 mt-4 sm:text-lg text-base">Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md sm:px-4 sm:py-2">Start for free</button>
        </div>

        <div className="relative heroimg flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center md:items-start md:absolute left-0 top-1/2 transform md:-translate-y-1/2 space-y-2 pulse">
            <div className="relative mb-4 md:mb-0">
              <img src={image4} alt="Image 1" className="w-24 sm:w-20"/>
            </div>
            <div className="relative mb-4 md:mb-0 transform md:translate-x-40">
              <img src={image2} alt="Image 2" className="w-24 sm:w-20"/>
            </div>
            <div className="relative">
              <img src={image6} alt="Image 3" className="w-24 sm:w-20"/>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end md:absolute right-0 top-1/2 transform md:-translate-y-1/2 space-y-2 pulse">
            <div className="relative mb-4 md:mb-0">
              <img src={image1} alt="Image 4" className="w-24 sm:w-20"/>
            </div>
            <div className="relative mb-4 md:mb-0 transform md:-translate-x-40">
              <img src={image5} alt="Image 5" className="w-24 sm:w-20"/>
            </div>
            <div className="relative">
              <img src={image2} alt="Image 6" className="w-24 sm:w-20"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
