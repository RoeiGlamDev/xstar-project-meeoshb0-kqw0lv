import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20" 
        animate={{ scale: 1.1 }} 
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="bg-[url('/path/to/your/3d-background-image.jpg')] bg-cover h-full w-full"></div>
      </motion.div>
      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600">
          luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-800">
          Experience the epitome of elegance with our exclusive range of high-end cosmetics, crafted for the discerning individual.
        </p>
        <div className="mt-6">
          <a 
            href="#shop" 
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {Shop Now}
          </a>
          <a 
            href="#about" 
            className="ml-4 inline-block bg-transparent border border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          >
            {Learn More}
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-600">
          <p>Your beauty deserves the best, trust in luxury LRP cosmetics.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;