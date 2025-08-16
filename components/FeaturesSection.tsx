import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our products are formulated with the highest quality ingredients to provide unparalleled results for your skin.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Every product is elegantly packaged to reflect the luxurious experience of using luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Expert Formulation',
    description: 'Crafted by top cosmetic scientists, our products combine science and nature for the perfect blend of effectiveness and luxury.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'Committed to sustainability, our eco-friendly practices ensure that luxury LRP cosmetics are kind to both your skin and the planet.',
    icon: <i className="fas fa-recycle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Elegance of luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;