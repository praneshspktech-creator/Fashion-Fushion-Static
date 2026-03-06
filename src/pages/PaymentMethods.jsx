import React from 'react';
import { motion } from 'framer-motion';

const PaymentMethods = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Methods</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4">Accepted Payment Methods</h2>
        <p className="text-lg leading-relaxed mb-6">
          We accept various payment methods to make your shopping experience convenient and secure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Credit & Debit Cards</h3>
            <p className="text-gray-600">Visa, Mastercard, American Express</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Digital Wallets</h3>
            <p className="text-gray-600">PayPal, Apple Pay, Google Pay</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Bank Transfer</h3>
            <p className="text-gray-600">Direct bank transfers available</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Buy Now, Pay Later</h3>
            <p className="text-gray-600">Available installment options</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Security</h2>
        <p className="text-lg leading-relaxed">
          All payment transactions are encrypted and secure. We use industry-standard security measures to protect your financial information.
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentMethods;
