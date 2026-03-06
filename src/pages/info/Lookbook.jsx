import React from 'react';
import { motion } from 'framer-motion';

const Lookbook = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Lookbook</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <p className="text-lg leading-relaxed mb-6">
          Get inspired by the latest fashion stories from Fashion Fushion. Our Lookbook showcases curated styles, seasonal collections, and trend highlights to help you create the perfect outfit for every occasion. Explore looks that define modern fashion.
        </p>
      </motion.div>
    </div>
  );
};

export default Lookbook;
