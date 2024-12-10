import React from 'react';
import testimonialImage1 from '../assets/images/ter/Avatar.png';
import testimonialImage2 from '../assets/images/ter/Avatar (1).png';
import backgroundImage from '../assets/images/BGimg.png';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.",
      author: "Gabriel Valdivia",
      position: "Principal Product Designer, Patreon",
      image: testimonialImage1,
    },
    {
      id: 2,
      text: "Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",
      author: "Buzz Usborne",
      position: "Principal Designer, Buildkite",
      image: testimonialImage2,
    }
  ];

  return (
    <section 
      className="testimonials py-16 px-4 sm:px-6 md:px-8 animated-background" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base">{testimonial.text}</p>
              </div>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-sm sm:text-base">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
