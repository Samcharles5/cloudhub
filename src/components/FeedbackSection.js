import React from 'react';
import img1 from '../assets/images/FBsession/Frame (2).png';
import img2 from '../assets/images/FBsession/Frame (3).png';
import img3 from '../assets/images/FBsession/Frame (4).png';
import img4 from '../assets/images/FBsession/Frame (1).png';
import backgroundImage from '../assets/images/BGimg.png';

function FeedbackSection() {
  return (
    <section
      className="feedback-section py-8 md:py-16 bg-orange-500 animated-background"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-black">Better feedback at the right time.</h2>
          <p className="text-black text-sm md:text-base">Best time here</p>
        </div>
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={img4} alt="Cloudhub" className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-4" />
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">Cloudhub</h3>
                <p className="text-gray-400 text-xs md:text-sm">2m ago in Brand</p>
              </div>
            </div>
            <button className="bg-red-500 text-white text-xs md:text-base px-3 md:px-4 py-2 rounded-md">View post</button>
          </div>
          <div className="p-4 md:p-6 border-t border-gray-700">
            <div className="flex items-center">
              <img src={img2} alt="User 2" className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-1 md:mr-2" />
              <img src={img3} alt="User 3" className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-1 md:mr-2" />
              <img src={img1} alt="User 1" className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-1 md:mr-2" />
              <p className="text-white text-xs md:text-sm">3 people are looking for feedback this week</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bounce">
          <div className="bg-black p-4 md:p-6 rounded-lg text-center">
            <h4 className="text-white font-semibold text-base md:text-lg">@ Mentions</h4>
            <p className="text-gray-400 text-xs md:text-sm">Mention anyone on your team to include them in a post.</p>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-lg text-center">
            <h4 className="text-white font-semibold text-base md:text-lg">Polls</h4>
            <p className="text-gray-400 text-xs md:text-sm">Get a quick gut check from the team on design options.</p>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-lg text-center">
            <h4 className="text-white font-semibold text-base md:text-lg">Resolve comments</h4>
            <p className="text-gray-400 text-xs md:text-sm">Mark comments as resolved to keep the conversation focused.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
