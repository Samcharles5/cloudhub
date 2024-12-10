import React from 'react';
import dashboardImage from '../assets/images/loop.png'; 
import './Loop.css'; 
import backgroundImage from '../assets/images/BGimg.png';

const Loop = () => {
  return (
    <div >
      <div className="header animated-background" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
        <h1>Keep everyone in the loop</h1>
        <p>All good things start with a homepage. Get inspired without breaking your wallet.</p>
        <button>Start for free</button>
      </div>
      <div className="dashboard-image-container">
        <img src={dashboardImage} alt="Project Management Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Loop;
