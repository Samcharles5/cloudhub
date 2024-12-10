import React from 'react';
import img from '../assets/images/team.png';
import backgroundImage from '../assets/images/BGimg.png';

const Team = () => {
  return (
    <div 
      className="animated-background text-center py-12 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="mb-8">
        <img 
          src={img} 
          alt="Logo" 
          className="mx-auto rotate w-32 md:w-48 pulse"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 typing">
        Increase your team’s visibility and alignment
      </h1>
      <p className="text-black mb-6 text-black">
        Start for free, flexible for all teams.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          className="px-6 py-3  text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Request a demo
        </button>
        <button 
          className="px-6 py-3 bg-red-500 text-white border-none rounded-md hover:bg-red-400 transition duration-300"
        >
          Start for free
        </button>
      </div>
    </div>
  );
};

export default Team;
