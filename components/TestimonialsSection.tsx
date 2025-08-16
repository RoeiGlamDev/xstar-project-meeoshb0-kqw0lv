import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Emily Johnson',
    review: 'Luxury LRP cosmetics has transformed my skin! The quality of their products is unmatched, and I feel radiant every day.',
    rating: 5,
    photo: '/images/testimonials/emily.jpg',
  },
  {
    name: 'Sophia Williams',
    review: 'The attention to detail in every product is remarkable. I adore the luxurious feel of the creams and the stunning packaging.',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Olivia Brown',
    review: 'I have sensitive skin, and finding the right cosmetics has been a challenge. Luxury LRP cosmetics has been a game changer for me!',
    rating: 5,
    photo: '/images/testimonials/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-500">{testimonial.name}</h3>
              <p className="text-gray-700 italic mb-2">"{testimonial.review}"</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-500">&#9733;</span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300">&#9733;</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;