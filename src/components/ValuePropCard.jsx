import { motion } from 'framer-motion';

// Import images
import curatedEditIcon from '../assets/curated-edit-icon.png';
import fabricFirstIcon from '../assets/fabric-first-icon.png';
import fitFocusedIcon from '../assets/fit-focused-icon.png';
import singaporeBasedIcon from '../assets/singapore-flag-icon.png';

export default function ValuePropCard({ title, desc, icon: Icon, index }) {
  const iconMap = {
    'Curated Edit': (
      <img 
        src={curatedEditIcon} 
        alt="Curated Edit" 
        className="w-16 h-16 object-contain"
      />
    ),
    'Fabric First': (
      <img 
        src={fabricFirstIcon} 
        alt="Fabric First" 
        className="w-16 h-16 object-contain"
      />
    ),
    'Fit Focused': (
      <img 
        src={fitFocusedIcon} 
        alt="Fit Focused" 
        className="w-16 h-16 object-contain"
      />
    ),
    'Singapore-Based': (
      <img 
        src={singaporeBasedIcon} 
        alt="Singapore Based" 
        className="w-16 h-16 object-contain"
      />
    )
  };

  return (
    <motion.div 
      className="p-8 rounded-2xl group flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: 'linear-gradient(145deg, #6a11cb 0%, #2575fc 50%, #50e3c2 100%)',
        boxShadow: '0 15px 35px -5px rgba(37, 117, 252, 0.4), 0 5px 15px -5px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="w-20 h-20 mb-6">
        {iconMap[title] || (
          <div className="w-full h-full flex items-center justify-center">
            {title[0]}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-[#FFF9C4] mb-3 drop-shadow-md">{title}</h3>
      <p className="text-white/90 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
