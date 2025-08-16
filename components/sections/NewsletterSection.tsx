import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(email);
    setSuccessMessage('Thank you for subscribing to luxury LRP cosmetics!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-6 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the luxury LRP cosmetics Community
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay updated with our latest luxury products and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-l-md border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <motion.div
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 text-white p-3 rounded-r-md hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </form>
        
        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;