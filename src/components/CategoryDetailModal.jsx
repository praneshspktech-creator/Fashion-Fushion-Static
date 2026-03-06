import { motion } from 'framer-motion';

export default function CategoryDetailModal({ category, isOpen, onClose }) {
  if (!isOpen) return null;

  const categoryDetails = {
    "Tailored Essentials": {
      description: "The foundation of a great wardrobe. Our tailored essentials combine timeless design with modern comfort, featuring premium fabrics and impeccable craftsmanship.",
      features: [
        "Premium cotton and linen blends",
        "Moisture-wicking technology",
        "Anti-wrinkle treatments",
        "Perfect fit guarantee"
      ],
      products: ["Oxford Shirts", "Premium T-Shirts", "Knitwear", "Casual Blazers"],
      priceRange: "S$89 - S$349"
    },
    "The Modern Suit": {
      description: "Architectural cuts meet contemporary design. Our modern suits are engineered for the discerning gentleman who values both style and comfort.",
      features: [
        "Premium wool and wool-blend fabrics",
        "Tech-linen options for tropical climate",
        "Custom tailoring available",
        "Modern slim and regular fits"
      ],
      products: ["Business Suits", "Wedding Suits", "Dinner Jackets", "Blazers"],
      priceRange: "S$599 - S$1,299"
    },
    "Outerwear & Layers": {
      description: "Statement pieces designed for form and function. Our outerwear collection combines protection from the elements with sophisticated style.",
      features: [
        "Water-resistant treatments",
        "Breathable technical fabrics",
        "Lightweight construction",
        "Versatile layering options"
      ],
      products: ["Trench Coats", "Bomber Jackets", "Technical Jackets", "Lightweight Coats"],
      priceRange: "S$199 - S$799"
    },
    "Trousers & Denim": {
      description: "Engineered for the perfect fit and finish. From business-ready chinos to premium denim, each piece is crafted for comfort and style.",
      features: [
        "Stretch technology for comfort",
        "Premium denim and cotton fabrics",
        "Multiple fit options",
        "Durable construction"
      ],
      products: ["Chinos", "Dress Trousers", "Premium Denim", "Casual Trousers"],
      priceRange: "S$129 - S$399"
    },
    "Accessories": {
      description: "The defining details that complete your look. Our curated selection of accessories adds sophistication to any outfit.",
      features: [
        "Genuine leather goods",
        "Premium materials",
        "Timeless designs",
        "Functional elegance"
      ],
      products: ["Leather Belts", "Ties & Pocket Squares", "Watches", "Leather Bags"],
      priceRange: "S$49 - S$499"
    }
  };

  const details = categoryDetails[category] || {
    description: "Discover our premium collection of menswear essentials.",
    features: ["Premium quality", "Modern design", "Perfect fit", "Timeless style"],
    products: ["Coming Soon"],
    priceRange: "S$89 - S$1,299"
  };

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
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{details.description}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Price Range</p>
                <p className="text-lg font-semibold text-gray-900">{details.priceRange}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Products in This Category</h3>
              <div className="space-y-3">
                {details.products.map((product, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{product}</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                  View Full Collection
                </button>
                <button className="flex-1 border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors cursor-pointer">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
