import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpAnimation}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white rounded-lg shadow-lg p-6 my-4"
    >
      <h2 className="text-3xl font-bold text-orange-500 tracking-tight">
        luxury LRP cosmetics
      </h2>
      <p className="text-gray-700 mt-2">
        Discover the elegance and luxury of our premium cosmetics line designed for the discerning individual.
      </p>
      <div className="mt-4">
        {React.Children.map(children, (child) => (
          <div className="group transition-transform duration-300 hover:scale-105">
            {child}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SlideUp;