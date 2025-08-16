import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Glam',
    price: '$49',
    description: 'Perfect for everyday makeup with a natural glow.',
  },
  {
    title: 'Luxury Glow',
    price: '$99',
    description: 'Experience a luxurious look with high-end products.',
  },
  {
    title: 'Ultimate Transformation',
    price: '$149',
    description: 'Complete makeover with personalized consultation.',
  },
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We exclusively use high-end, luxury cosmetics tailored to your skin type.',
  },
  {
    question: 'Do you offer consultations?',
    answer: 'Yes, we provide a personalized consultation to help you choose the right products.',
  },
  {
    question: 'Are your services suitable for all skin types?',
    answer: 'Absolutely! We cater to all skin types and concerns.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing for luxury LRP cosmetics
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold">{option.title}</h2>
            <p className="text-xl font-bold">{option.price}</p>
            <p className="text-gray-700">{option.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;