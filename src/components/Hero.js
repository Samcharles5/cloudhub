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
      className="hero min-h-screen flex items-center justify-center bg-gray-100 animated-background " style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <div className="container mx-auto p-8">
        <div className="text-center mb-12" style={mar}>
          <h1 className="text-4xl font-bold text-gray-800 typing">Create, inspect, and apply synthetic surveillance broadly.</h1>
          <p className="text-gray-600 mt-4">Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md">Start for free</button>
        </div>

       
        <div className="relative heroimg ">
          
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-2 pulse" >
            <div className="image1 relative ">
              <img src={image4} alt="Image 1" />
            </div>
            <div className="image2 relative  transform translate-x-40">
              <img src={image2} alt="Image 2" />
            </div>
            <div className="image3 relative ">
              <img src={image6} alt="Image 3" />
            </div>
          </div>


          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-2 pulse" >
            <div className="image4 relative ">
              <img src={image1} alt="Image 4" />
            </div>
            <div className="image5 relative transform -translate-x-40">
              <img src={image5} alt="Image 5" />
            </div>
            <div className="image6 relative">
              <img src={image2} alt="Image 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
