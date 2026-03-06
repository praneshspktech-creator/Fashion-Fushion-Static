import { motion } from 'framer-motion';
import ValuePropCard from "../components/ValuePropCard";

const valueProps = [
  {
    title: "Curated Edit",
    desc: "We save you time. Every piece is selected for its design, quality, and place in a modern wardrobe.",
  },
  {
    title: "Fabric First",
    desc: "We prioritize natural, innovative, and sustainable fabrics that feel as good as they look.",
  },
  {
    title: "Fit Focused",
    desc: "From contemporary slim to classic regular fits, we provide detailed guidance to find your perfect match.",
  },
  {
    title: "Singapore-Based",
    desc: "Proudly serving the discerning man of Singapore and beyond.",
  },
];

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

export default function ValuePropsSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            Why FASHION FUSION?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {valueProps.map((item, index) => (
            <ValuePropCard 
              key={index} 
              index={index}
              {...item} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
