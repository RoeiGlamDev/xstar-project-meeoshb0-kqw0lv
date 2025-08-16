import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg text-gray-700 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We would love to hear from you! Please fill out the form below to get in touch with us.
      </motion.p>
      <form className="w-full max-w-lg bg-orange-50 p-8 rounded-lg shadow-lg">
        <label className="block mb-2 text-sm font-semibold text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your Name"
          required
        />
        <label className="block mb-2 text-sm font-semibold text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your Email"
          required
        />
        <label className="block mb-2 text-sm font-semibold text-gray-800" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          className="w-full p-2 text-white bg-orange-600 rounded hover:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-orange-600">Our Location</h2>
        <p className="text-lg text-gray-700">Visit us at:</p>
        <p className="text-gray-600">123 Luxury Lane</p>
        <p className="text-gray-600">Cosmetics City, CA 90210</p>
        <p className="mt-4 text-lg text-gray-700">Business Hours:</p>
        <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
        <p className="text-gray-600">Sat: 10 AM - 4 PM</p>
        <p className="text-gray-600">Sun: Closed</p>
      </div>
    </div>
  );
};

export default Contact;