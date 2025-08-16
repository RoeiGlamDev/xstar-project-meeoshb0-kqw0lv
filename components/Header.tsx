import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4">
        <motion.div
          className="text-orange-500 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo} alt="luxury LRP cosmetics logo" className="h-10" />
          luxury LRP cosmetics
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#home"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>

        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <motion.nav
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 py-4">
              <motion.div
                href="#home"
                className="text-gray-800 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Home
              </motion.a>
              <motion.div
                href="#products"
                className="text-gray-800 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Products
              </motion.a>
              <motion.div
                href="#about"
                className="text-gray-800 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.a>
              <motion.div
                href="#contact"
                className="text-gray-800 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.nav>
        </div>
      )}
    </header>
  );
};

export default Header;