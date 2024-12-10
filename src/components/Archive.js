import React from 'react';
import img from '../assets/images/archive.png';
import backgroundImage from '../assets/images/BGimg.png';

function Archive() {
  return (
    <section
      className="bg-gray-50 py-8 md:py-16 animated-background"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-black">Your Archive of Progress</h2>
        <p className="mb-4 md:mb-8 text-black md:text-lg">Organize, filter, and archive your projects.</p>
        <div className="flex justify-center">
          <img src={img} alt="Archive" className="w-full md:w-auto   mx-auto" /> // max-w-xs md:max-w-md
        </div>
      </div>
    </section>
  );
}

export default Archive;
