import React from 'react';
import img from '../assets/images/team.png';
import backgroundImage from '../assets/images/BGimg.png';

const Footer = () => {
  return (
    <footer
      className='animated-background py-8 px-4 md:px-20 bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex flex-col items-center'>
        <div>
          <img src={img} alt='Logo' className='w-12 h-auto rotate' />
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12'>
          <div>
            <h4 className='font-bold mb-4'>Product</h4>
            <ul className='list-none p-0'>
              <li className='mb-2'><a href='#features' className='text-gray-800 hover:underline'>Features</a></li>
              <li className='mb-2'><a href='#pricing' className='text-gray-800 hover:underline'>Pricing</a></li>
              <li className='mb-2'><a href='#changelog' className='text-gray-800 hover:underline'>Changelog</a></li>
              <li className='mb-2'><a href='#support' className='text-gray-800 hover:underline'>Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-4'>Legal</h4>
            <ul className='list-none p-0'>
              <li className='mb-2'><a href='#terms-of-privacy' className='text-gray-800 hover:underline'>Terms of Privacy</a></li>
              <li className='mb-2'><a href='#privacy-policy' className='text-gray-800 hover:underline'>Privacy Policy</a></li>
              <li className='mb-2'><a href='#security' className='text-gray-800 hover:underline'>Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-4'>Company</h4>
            <ul className='list-none p-0'>
              <li className='mb-2'><a href='#blog' className='text-gray-800 hover:underline'>Blog</a></li>
              <li className='mb-2'><a href='#contact' className='text-gray-800 hover:underline'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-4'>Social</h4>
            <ul className='list-none p-0'>
              <li className='mb-2'><a href='#dribbble' className='text-gray-800 hover:underline'>Dribbble</a></li>
              <li className='mb-2'><a href='#behance' className='text-gray-800 hover:underline'>Behance</a></li>
              <li className='mb-2'><a href='#discord' className='text-gray-800 hover:underline'>Discord</a></li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-gray-600'>All rights reserved. © 2024 ThinkMetal</p>
          <p className='text-black'> <b>Created By </b><a className='text-blue' href="https://www.linkedin.com/feed/" ><b><u>Sam--charles--</u></b></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
