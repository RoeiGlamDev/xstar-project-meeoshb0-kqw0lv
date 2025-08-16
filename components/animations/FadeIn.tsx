import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="transition-opacity duration-300 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;