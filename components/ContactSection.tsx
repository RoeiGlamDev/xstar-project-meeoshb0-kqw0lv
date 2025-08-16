import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
    reason: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormProps>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<ContactFormProps> = {};
    
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    if (!formData.reason) errors.reason = 'Please select a contact reason';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Submit form data (add your submission logic here)
  };

  return (
    <section className="bg-white py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-4xl font-bold text-center text-orange-600" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Contact Luxury LRP Cosmetics
        </motion.h2>
        <p className="text-center text-gray-600 mt-4">
          We’re here to assist you with any inquiries or information about our luxurious products.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 ${formErrors.name ? 'border-red-500' : ''}}
              required
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 ${formErrors.email ? 'border-red-500' : ''}}
              required
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Reason
            </label>
            <select 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange} 
              className={mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 ${formErrors.reason ? 'border-red-500' : ''}}
              required
            >
              <option value="">Select a reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Support">Order Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership">Partnership</option>
            </select>
            {formErrors.reason && <p className="text-red-500 text-sm">{formErrors.reason}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows={4} 
              className={mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 ${formErrors.message ? 'border-red-500' : ''}}
              required
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md transition transform duration-300 hover:bg-orange-500 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-orange-600">Luxury LRP Cosmetics</h3>
          <p className="text-gray-600">123 Beauty Ave, Glamour City, CA 90210</p>
          <p className="text-gray-600">Business Hours: Mon-Fri 9am - 6pm</p>
          <p className="text-gray-600">Email: contact@luxurylrpcosmetics.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;