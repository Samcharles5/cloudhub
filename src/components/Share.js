import React from 'react';
import img from '../assets/images/share.png';

function Share() {
  return (
    <section className="share py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="left-content">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 typing">
              Share anything you’re working on.
            </h2>
            <p className="text-black mb-8">
              Complete this mission: Instantly keep designers aware of each other’s work within the project using Canvas, Google Drive, and Dropbox. Complete this mission: Instantly keep designers aware of each other’s work within the project using Canvas, Google Drive, and Dropbox.
            </p>
            <div className="text-center mb-8">
              <button className="bg-red-500 text-black px-6 py-2 rounded-md bounce">
                See how it works
              </button>
            </div>
          </div>
          
          <div className="right-content">
            <img src={img} alt="New Content" className="w-full h-auto object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Share;
