import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Luxury Facial Treatment',
    price: '$150',
    features: [
      'Deep cleansing and exfoliation',
      'Personalized skincare consultation',
      'Hydrating mask with premium ingredients',
      'Complimentary luxury skincare sample',
    ],
  },
  {
    title: 'Signature Makeup Application',
    price: '$200',
    features: [
      'Full face makeup application',
      'Customized color palette',
      'Luxury product application',
      'Complimentary touch-up kit',
    ],
  },
  {
    title: 'Exclusive Spa Package',
    price: '$350',
    features: [
      'Luxury facial and body treatment',
      'Personalized aromatherapy experience',
      'Full access to spa amenities',
      'Complimentary skincare gift set',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                  {tier.title}
                </h3>
                <p className="text-xl font-bold text-black mb-4">{tier.price}</p>
                <ul className="text-left mb-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 mb-2">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;