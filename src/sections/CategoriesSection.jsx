import CategoryCard from "../components/CategoryCard";

// Import category images
import tailoredEssentials from '../assets/categories/tailored-essentials.jpg';
import modernSuit from '../assets/categories/modern-suit.jpg';
import outerwearLayers from '../assets/categories/outerwear-layers.jpg';
import trousersDenim from '../assets/categories/trousers-denim.jpg';
import accessories from '../assets/categories/accessories.jpg';

const categories = [
  {
    title: "Tailored Essentials",
    desc: "The foundation of a great wardrobe. Impeccable shirts, premium knitwear, and elevated basics crafted for comfort and longevity.",
    img: tailoredEssentials,
    cta: "EXPLORE"
  },
  {
    title: "The Modern Suit",
    desc: "Architectural cuts, premium wool blends, and contemporary silhouettes. For the decisive moments that define you.",
    img: modernSuit,
    cta: "EXPLORE"
  },
  {
    title: "Outerwear & Layers",
    desc: "Statement coats, technical jackets, and versatile blazers designed for form and function in every climate.",
    img: outerwearLayers,
    cta: "EXPLORE"
  },
  {
    title: "Trousers & Denim",
    desc: "From impeccably cut chinos and trousers to selvedge denim, each pair is engineered for the perfect fit and finish.",
    img: trousersDenim,
    cta: "EXPLORE"
  },
  {
    title: "Accessories",
    desc: "The defining details. Curated leather goods, ties, belts, and hosiery to complete your look.",
    img: accessories,
    cta: "EXPLORE"
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop By Category
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Discover our carefully curated selection of premium menswear essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
              title={category.title}
              desc={category.desc}
              img={category.img}
              cta={category.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
