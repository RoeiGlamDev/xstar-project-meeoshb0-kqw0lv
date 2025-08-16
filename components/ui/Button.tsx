import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const buttonVariants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
    return (
        <motion.div
            className={`rounded-lg py-2 px-4 transition-all duration-300 ease-in-out ${buttonVariants[variant]`} ${className}}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={Button for luxury LRP cosmetics - ${children}}
        >
            {children}
        </motion.button>
    );
};

export default Button;