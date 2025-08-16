import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.div position={position}
      animate={{ y: [0, 0.2, 0], opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  const elements = [
    [-1, 0, -2],
    [1, 0, -2],
    [0, 0, -2],
    [-1.5, 0, -2.5],
    [1.5, 0, -2.5],
  ];

  return (
    <>
      {elements.map((position, index) => (
        <FloatingElement key={index} position={position as [number, number, number]} />
      ))}
    </>
  );
};

const FloatingElementsComponent: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      <h1 className="text-5xl font-bold text-orange-500 text-center pt-10">Welcome to luxury LRP cosmetics</h1>
      <p className="text-xl text-gray-700 text-center mt-4">Indulge in the elegance of our premium cosmetic line.</p>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <FloatingElements />
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-400 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FloatingElementsComponent;