import React from 'react';
import { motion } from 'framer-motion';

const TailoringServices = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tailoring Services</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <p className="text-lg leading-relaxed mb-6">
          At Fashion Fushion, we believe the perfect fit makes all the difference. Our tailoring services ensure your outfits are customized to suit your body and style. From minor alterations to complete fitting adjustments, our skilled tailors help you achieve a flawless look with comfort and confidence.
        </p>
      </motion.div>
    </div>
  );
};

export default TailoringServices;
