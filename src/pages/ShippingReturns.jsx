import React from 'react';
import { motion } from 'framer-motion';

const ShippingReturns = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Returns</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
        <p className="text-lg leading-relaxed mb-6">
          We offer reliable shipping services across Singapore. Standard delivery takes 3-5 business days, while express delivery is available within 1-2 business days.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Return Policy</h2>
        <p className="text-lg leading-relaxed mb-6">
          Items can be returned within 14 days of purchase in their original condition. Please contact our customer service team to initiate a return.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Exchange Policy</h2>
        <p className="text-lg leading-relaxed">
          Exchanges are welcome within 14 days of purchase. Size exchanges are subject to availability.
        </p>
      </motion.div>
    </div>
  );
};

export default ShippingReturns;
