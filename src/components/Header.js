import React from 'react';
import img from '../assets/images/team.png'

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src={img} className='rotate'></img>
        <div className="text-2xl font-bold">Cloudhub</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-700">Product</a>
          <a href="#features" className="hover:text-gray-700">Team</a>
          <a href="#pricing" className="hover:text-gray-700">Shop</a>
          <a href="#contact" className="hover:text-gray-700">Pages</a>
          <a href="#contact" className="hover:text-gray-700">Integrations</a>
          <a href="#contact" className="hover:text-gray-700">Developers</a>
        </nav>
        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Start for free</button>
          <button className="ml-4 text-gray-700">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
