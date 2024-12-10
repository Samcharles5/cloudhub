import React from 'react';
import img1 from '../assets/images/clients/Frame (1).png';
import img2 from '../assets/images/clients/Frame (2).png';
import img3 from '../assets/images/clients/Frame (3).png';
import img4 from '../assets/images/clients/Frame (4).png';
import img5 from '../assets/images/clients/Frame (5).png';
import img6 from '../assets/images/clients/Frame (6).png';
import img7 from '../assets/images/clients/Frame (7).png';
import backgroundImage from '../assets/images/BGimg.png';

function Clients() {
  return (
    <section
      className="bg-white py-16 animated-background"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Loved By Designers At</h2>
        <div className="flex flex-wrap justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-1/2 md:w-auto">
            <img src={img1} alt="Client 1" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img2} alt="Client 2" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img3} alt="Client 3" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img4} alt="Client 4" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img5} alt="Client 5" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img6} alt="Client 6" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto">
            <img src={img7} alt="Client 7" className="max-h-8 md:max-h-12 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
