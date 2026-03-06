import React from 'react';
import { motion } from 'framer-motion';

const SizeGuide = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <p className="text-lg leading-relaxed mb-6">
          Finding the right fit has never been easier. Our detailed size guide helps you choose the perfect size for men's and women's wear. With accurate measurements and fitting tips, you can shop confidently and enjoy a comfortable, well-fitted outfit every time.
        </p>
      </motion.div>
    </div>
  );
};

export default SizeGuide;
