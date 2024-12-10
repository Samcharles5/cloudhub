import React from 'react';
import feedbackImage from '../assets/images/feedback.png';
import backgroundImage from '../assets/images/BGimg.png';

function Feedback() {
  return (
    <section
      className="feedback py-8 md:py-16 bg-white animated-background"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="left-content bounce">
            <img src={feedbackImage} alt="Feedback" className="w-full h-auto object-cover" />
          </div>
          
          <div className="right-content">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 typing">Better feedback at the right time.</h2>
            <p className="text-black mb-4 md:mb-8">
              Complete this mission: Instantly keep designers aware of each other’s work within the project using Canvas, Google Drive, and Dropbox. Complete this mission: Instantly keep designers aware of each other’s work within the project using Canvas, Google Drive, and Dropbox.
            </p>
            <div className="text-center md:text-left mb-8">
              <button className="bg-red-500 text-white px-4 md:px-6 py-2 rounded-md bounce">See how it works</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
