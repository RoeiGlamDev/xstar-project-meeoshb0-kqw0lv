import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto relative transition-transform transform-gpu"
            initial={{ scale: 0.7, opacity: 0}}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-orange-500 hover:text-orange-700 transition-colors"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {title}
            </h2>
            <p className="text-gray-700">
              {content}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="bg-orange-500 text-white hover:bg-orange-600 transition-colors py-2 px-4 rounded-full shadow-md"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;