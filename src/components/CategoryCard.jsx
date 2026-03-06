import { useState } from 'react';
import CategoryDetailModal from './CategoryDetailModal';

export default function CategoryCard({ title, desc, img, cta = 'EXPLORE' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
        <div className="relative overflow-hidden h-64">
          {img ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
          )}
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-700 mb-5 line-clamp-3 flex-1">{desc}</p>
          
          <button 
            onClick={handleExploreClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-300 group/button w-full cursor-pointer"
            aria-label={`Explore ${title}`}
          >
            {cta}
            <svg 
              className="w-4 h-4 transition-transform group-hover/button:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>

      <CategoryDetailModal 
        category={title}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
