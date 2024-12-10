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
    //   logo:'../assets/images/ter/Logomark.png' // Replace with actual logo
    },
    {
      id: 2,
      text: "Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",
      author: "Buzz Usborne",
      position: "Principal Designer, Buildkite",
      image: testimonialImage2,
    //   logo: "'../assets/images/ter/Logomark.png'" // Replace with actual logo
    }
  ];

  return (
    <section className="testimonials py-16 animated-background" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {/* <img src={testimonial.logo} alt="Logo" className="w-10 h-10 rounded-full mr-4" /> */}
                <div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h4 className="text-gray-900 font-bold">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.position}</p>
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
