import React, { useState } from 'react';
import img from '../assets/images/team.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <img src={img} alt="Logo" className="rotate w-10 h-auto" />
        <div className="text-2xl font-bold">Cloudhub</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <a href="#home" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Product</a>
          <a href="#features" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Team</a>
          <a href="#pricing" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Shop</a>
          <a href="#contact" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Pages</a>
          <a href="#contact" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Integrations</a>
          <a href="#contact" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-700">Developers</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Start for free</button>
          <button className="text-gray-700">Login</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-1">
          <button className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded-md">Start for free</button>
          <button className="block w-full text-left text-gray-700 px-4 py-2">Login</button>
        </div>
      )}
    </header>
  );
}

export default Header;
