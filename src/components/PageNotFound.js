import React from 'react';
import backgroundImage from '../assets/images/BGimg.png';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center animated-background" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <img
        src="/path/to/your/page-not-found-image.png"
        alt="Page not found"
        className="w-1/2 mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for isn't available. Try to search again or use the go back button below.
      </p>
      <button className="bg-red-500 text-white px-6 py-2 rounded-md">
        Start for free
      </button>
    </div>
  );
}

export default PageNotFound;
