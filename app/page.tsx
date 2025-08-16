import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-orange-500 h-screen flex items-center justify-center">
      <motion.div
        className="text-white text-6xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Luxury LRP Cosmetics
      </motion.h1>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-orange-500 text-4xl font-semibold mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Luxurious Offerings
        </motion.h2>
        <div className="flex justify-around">
          <motion.div
            className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-orange-500 text-2xl font-bold">Premium Ingredients</h3>
            <p className="text-gray-700">We use only the finest ingredients for your skin's luxury experience.</p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-orange-500 text-2xl font-bold">Elegant Packaging</h3>
            <p className="text-gray-700">Our products come in beautifully designed packaging that exudes luxury.</p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-orange-500 text-2xl font-bold">Exclusive Collections</h3>
            <p className="text-gray-700">Explore our exclusive collections tailored for the discerning customer.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmetics;