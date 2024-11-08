
import React from 'react';
import { useEffect } from 'react';

const testimonials = [
  {
    name: "John Doe",
    position: " Managing Director",
    // image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial: "The culinary program transformed my skills and opened doors I never thought possible. The hands-on experience was invaluable!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Director operations",
    // image: "https://randomuser.me/api/portraits/women/1.jpg",
    testimonial: "I learned so much about pastry arts. The instructors were amazing and truly passionate about teaching.",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    position: "Marketing Head",
    // image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial: "This program provided me with the skills I needed to excel in the catering industry. Highly recommend!",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09L5.236 12.97l-6.236-5.454L7.618 8.09 10 0l2.382 8.09L20 7.516l-6.236 5.454L15.878 18z" />
        </svg>
      ))}
    </div>
  );
};

const ClientTestimonial = () => {
  useEffect(() => {
    const handleScroll = () => {
      const testimonialsContainer = document.getElementById('testimonials');
      if (window.scrollY > testimonialsContainer.offsetTop - window.innerHeight + 100) {
        testimonialsContainer.classList.add('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
        <div id="testimonials" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-opacity duration-500 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border border-gray-300"
              />
              <h3 className="text-lg font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-500 text-center mb-2">{testimonial.position}</p>
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 mt-4">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        #testimonials.fade-in {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonial;