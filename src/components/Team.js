import React from 'react';
import img from '../assets/images/team.png';
import backgroundImage from '../assets/images/BGimg.png';

const Team = () => {
  return (
    <div className='animated-background' style={{ textAlign: 'center', padding: '50px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img 
          src={img} 
          alt="Logo" 
          style={{ display: 'block', margin: '0 auto' }} 
          className='rotate'
        />
      </div>
      <h1>Increase your team’s visibility and alignment</h1>
      <p>Start for free, flexible for all teams.</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{ 
            marginRight: '10px', 
            padding: '10px 20px', 
            backgroundColor: 'white', 
            border: '1px solid #ccc', 
            cursor: 'pointer' 
          }}
        >
          Request a demo
        </button>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#ff5722', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          Start for free
        </button>
      </div>
    </div>
  );
};

export default Team;
