import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="bg-white text-orange-600 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">{companyName}</h2>
          <p className="text-lg mt-2">Elevate your beauty with our luxurious cosmetics.</p>
        </motion.div>
        <div className="flex justify-center space-x-6 mb-6">
          <motion.div
            href="/about"
            className="hover:underline transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="/products"
            className="hover:underline transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="/contact"
            className="hover:underline transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <motion.div
            href="https://www.instagram.com/luxuryLRPcosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Instagram
          </motion.a>
          <motion.div
            href="https://www.facebook.com/luxuryLRPcosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Facebook
          </motion.a>
        </div>
        <div className="text-sm text-gray-500 text-center">
          <p>&copy; {year} {companyName}. All rights reserved.</p>
          <p>Crafted with care for your beauty needs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;