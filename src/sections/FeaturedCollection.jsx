import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductDetailModal from '../components/ProductDetailModal';

// Import images
import featured1 from '../assets/featured/featured-1.jpg';
import featured2 from '../assets/featured/featured-2.jpg';
import featured3 from '../assets/featured/featured-3.jpg';
import featured4 from '../assets/featured/featured-4.jpg';

const products = [
  {
    id: 1,
    name: 'Tech-Linen Blazer',
    price: 'S$349',
    image: featured1,
    category: 'Outerwear'
  },
  {
    id: 2,
    name: 'Moisture-Wicking Polo',
    price: 'S$89',
    image: featured2,
    category: 'Tops',
    isNew: true
  },
  {
    id: 3,
    name: 'Lightweight Trousers',
    price: 'S$129',
    image: featured3,
    category: 'Bottoms'
  },
  {
    id: 4,
    name: 'Breathable Shirt',
    price: 'S$109',
    image: featured4,
    category: 'Tops',
    isNew: true
  }
];

const ProductCard = ({ product, index, onProductClick }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl border border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/60 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' }}
      onClick={() => onProductClick(product)}
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-900">
            New Arrival
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Engineered for Urban Sophistication
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A dedicated collection built for the pace and climate of modern Singapore.
            Featuring breathable tech-linen blazers, moisture-wicking polos, and
            lightweight trousers that offer style without compromise.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onProductClick={handleProductClick}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.4 }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            DISCOVER THE COLLECTION
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </motion.div>
      </div>
      
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
