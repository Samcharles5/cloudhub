import React from 'react';
import img1 from '../assets/images/lovebycustomer/Logo=i1.png';
import img2 from '../assets/images/lovebycustomer/Logo=i2.png';
import img3 from '../assets/images/lovebycustomer/Logo=i3.png';
import img4 from '../assets/images/lovebycustomer/Logo=i4.png';
import img5 from '../assets/images/lovebycustomer/Logo=i5.png';
import img6 from '../assets/images/lovebycustomer/Logo=i6.png';
import img7 from '../assets/images/lovebycustomer/Logo=i7.png';
import img8 from '../assets/images/lovebycustomer/Logo=i8.png';
import backgroundImage from '../assets/images/BGimg.png';
import '../styles/custom.css'; 

const LovedByDesigners = () => {
  const companies = [
    { name: 'CrowdStrike', logo: img1 },
    { name: 'Airbus', logo: img2 },
    { name: 'Hays', logo: img3 },
    { name: 'Autodesk', logo: img4 },
    { name: 'Sentry', logo: img5 },
    { name: 'Medwing', logo: img6 },
    { name: 'Cathay Pacific', logo: img7 },
    { name: 'Liquid Web', logo: img8 },
  ];

  return (
    <div 
      className="animated-background py-12 px-4 md:px-12" 
      style={{ textAlign: 'center', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 loved-by-title typing">
        Loved By Designers At
      </h2>
      <div className="flex flex-wrap justify-center">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className="m-4 p-4 border border-gray-300 rounded-lg flex justify-center items-center" 
            style={{ maxWidth: '120px' }}
          >
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="max-w-full max-h-12 pulse" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedByDesigners;
