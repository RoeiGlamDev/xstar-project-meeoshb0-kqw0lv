import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg border border-orange-300 overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-orange-600 text-2xl font-bold mb-2">
                    {title}
                </h2>
                <p className="text-gray-700">{description}</p>
                <p className="text-orange-600 mt-3 font-semibold">
                    Discover the luxury of {title} by luxury LRP cosmetics.
                </p>
            </div>
        </motion.div>
    );
};

export default Card;