import { motion } from 'framer-motion';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="p-8">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.isNew && (
              <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                New Arrival
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600">{product.category}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">{product.price}</div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.name} represents the perfect fusion of contemporary design and timeless craftsmanship. 
                Engineered for the modern Singapore lifestyle, this piece combines premium materials with 
                innovative technology to deliver exceptional comfort and style.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium fabric construction
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Moisture-wicking technology
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Anti-wrinkle treatment
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Perfect fit guarantee
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Size & Fit</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600">Model wears size M. True to size.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Instructions</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">Machine wash cold, tumble dry low. Iron on medium heat if needed.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors cursor-pointer">
                Try In Store
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
