import React from 'react';
import dashboardImage from '../assets/images/loop.png'; 
import './Loop.css'; 
import backgroundImage from '../assets/images/BGimg.png';

const Loop = () => {
  return (
    <div>
      {/* Header Section */}
      <div 
        className="header animated-background text-center py-12 px-4 md:px-12" 
        style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Keep everyone in the loop</h1>
        <p className="text-lg sm:text-xl text-black mb-6">All good things start with a homepage. Get inspired without breaking your wallet.</p>
        <button className="bg-red-500 text-black py-2 px-6 rounded-md text-sm sm:text-base">Start for free</button>
      </div>

      {/* Dashboard Image Section */}
      <div className="dashboard-image-container py-8 px-4">
        <img 
          src={dashboardImage} 
          alt="Project Management Dashboard" 
          className="dashboard-image mx-auto max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Loop;
