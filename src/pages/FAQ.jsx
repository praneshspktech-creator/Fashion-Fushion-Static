import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What sizes do you offer?",
      answer: "We offer sizes from XS to XXL for most of our products. Please check our size guide for detailed measurements."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this to track your package on our website."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within Singapore only. We're working on expanding our shipping options internationally."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can reach us via email at fashionfushiondigitalmarketing@gmail.com or through our contact form on the website."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer complimentary gift wrapping for all orders. You can select this option at checkout."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-700">
          Still have questions? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</a> and we'll be happy to help!
        </p>
      </motion.div>
    </div>
  );
};

export default FAQ;
