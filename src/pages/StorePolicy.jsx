import React from 'react';
import { motion } from 'framer-motion';

const StorePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Store Policy</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="text-lg leading-relaxed mb-6">
          By shopping with Fashion Fushion, you agree to our terms of service. We are committed to providing quality products and excellent customer service.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Privacy Policy</h2>
        <p className="text-lg leading-relaxed mb-6">
          We respect your privacy and protect your personal information. Your data is never shared with third parties without your consent.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Product Authenticity</h2>
        <p className="text-lg leading-relaxed">
          All products sold at Fashion Fushion are guaranteed authentic and sourced from reputable suppliers.
        </p>
      </motion.div>
    </div>
  );
};

export default StorePolicy;
