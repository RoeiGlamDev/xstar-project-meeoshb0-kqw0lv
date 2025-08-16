import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="mb-6">
      <label className={block text-white text-lg font-semibold mb-2 transition-all duration-300 ${isFocused ? 'text-orange-500' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={w-full p-4 border-2 rounded-lg transition-all duration-300 
          ${isValid ? 'border-orange-500' : 'border-white'} 
          focus:outline-none focus:border-orange-500 bg-white text-gray-800 shadow-lg
          hover:shadow-xl hover:scale-105}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
      />
      {!isValid && <p className="text-red-500 text-sm mt-1">Please enter a valid value.</p>}
    </div>
  );
};

export default Input;