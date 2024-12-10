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
    <div className='animated-background' style={{ textAlign: 'center', padding: '20px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="loved-by-title">Loved By Designers At</h2> {/* Added CSS class */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {companies.map((company, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <img src={company.logo} alt={`${company.name} logo`} style={{ maxWidth: '100px', maxHeight: '50px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedByDesigners;
