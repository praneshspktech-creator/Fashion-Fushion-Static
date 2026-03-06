import { motion } from 'framer-motion';
import { useScroll, useTransform, useSpring } from 'framer-motion';

export default function About() {
  const { scrollYProgress } = useScroll();
  
  // 3D rotation values based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]));

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Header Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 45, scale: 0.8 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ perspective: 1000 }}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ 
            rotateX: useTransform(scrollYProgress, [0, 1], [0, 10]),
            textShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          About Fashion Fushion
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-blue-600 mx-auto mb-6"
          style={{ 
            rotateY: useTransform(scrollYProgress, [0, 1], [0, 180]),
            transformStyle: "preserve-3d"
          }}
        />
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ perspective: 500 }}
        >
          Where contemporary design meets timeless elegance, creating perfect fusion for modern gentleman.
        </motion.p>
      </motion.div>

      {/* 3D Main Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" style={{ perspective: 2000 }}>
        {/* 3D Our Story Card */}
        <motion.div
          initial={{ opacity: 0, rotateY: -45, x: -100, z: -200 }}
          animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ 
            rotateY: 15,
            rotateX: -5,
            scale: 1.05,
            z: 50,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4"
              whileHover={{ rotateZ: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-xl font-bold">📖</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              style={{ 
                textShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transform: "translateZ(20px)"
              }}
            >
              Our Story
            </motion.h2>
          </motion.div>
          <div className="space-y-4 text-justify">
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Founded in the heart of Singapore, Fashion Fushion emerged from a simple yet powerful vision: to redefine modern menswear by blending contemporary design with timeless craftsmanship.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We believe that clothing is more than just fabric and thread—it's a form of self-expression, a confidence booster, and a foundation for personal success.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              From our flagship store on Kelantan Road to our growing online presence, Fashion Fushion has become synonymous with quality and sophistication.
            </motion.p>
          </div>
        </motion.div>

        {/* 3D Our Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, rotateY: 45, x: 100, z: -200 }}
          animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ 
            rotateY: -15,
            rotateX: -5,
            scale: 1.05,
            z: 50,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4"
              whileHover={{ rotateZ: -360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-xl font-bold">💡</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              style={{ 
                textShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transform: "translateZ(20px)"
              }}
            >
              Our Philosophy
            </motion.h2>
          </motion.div>
          <div className="space-y-4 text-justify">
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              At Fashion Fushion, we operate on three core principles that guide everything we do: Quality, Versatility, and Innovation.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We understand that the modern man's lifestyle demands clothing that adapts to multiple contexts—from boardroom meetings to casual weekend outings.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Sustainability isn't an afterthought; it's woven into our DNA. We partner with ethical manufacturers and source premium materials responsibly.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* 3D Values Cards Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 30, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ perspective: 1500 }}
        className="mb-16"
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          style={{ 
            textShadow: "0 5px 20px rgba(0,0,0,0.1)",
            transform: "translateZ(30px)"
          }}
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 2000 }}>
          <motion.div
            initial={{ opacity: 0, rotateY: -30, scale: 0.8, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              rotateY: 15,
              rotateX: -10,
              scale: 1.1,
              z: 50,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center group"
          >
            <motion.div 
              initial={{ rotateZ: 0, scale: 0.8 }}
              animate={{ rotateZ: 0, scale: 1 }}
              whileHover={{ 
                rotateZ: 360, 
                scale: 1.3,
                y: -10
              }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-3xl font-bold">Q</span>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-3"
              style={{ transform: "translateZ(15px)" }}
            >
              Quality First
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              style={{ transform: "translateZ(10px)" }}
            >
              Premium materials, expert craftsmanship, and attention to detail in every stitch we create.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, rotateY: 30, scale: 0.8, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              rotateY: -15,
              rotateX: -10,
              scale: 1.1,
              z: 50,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center group"
          >
            <motion.div 
              initial={{ rotateZ: 0, scale: 0.8 }}
              animate={{ rotateZ: 0, scale: 1 }}
              whileHover={{ 
                rotateZ: -360, 
                scale: 1.3,
                y: -10
              }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-3xl font-bold">V</span>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-3"
              style={{ transform: "translateZ(15px)" }}
            >
              Versatility
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              style={{ transform: "translateZ(10px)" }}
            >
              Pieces that transition seamlessly from professional to casual, day to night, work to play.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, rotateY: -30, scale: 0.8, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ 
              rotateY: 15,
              rotateX: -10,
              scale: 1.1,
              z: 50,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center group"
          >
            <motion.div 
              initial={{ rotateZ: 0, scale: 0.8 }}
              animate={{ rotateZ: 0, scale: 1 }}
              whileHover={{ 
                rotateZ: 360, 
                scale: 1.3,
                y: -10
              }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-3xl font-bold">I</span>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-3"
              style={{ transform: "translateZ(15px)" }}
            >
              Innovation
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              style={{ transform: "translateZ(10px)" }}
            >
              Contemporary designs that push boundaries while respecting timeless traditions and craftsmanship.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Expertise Cards Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 20, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ perspective: 1500 }}
        className="mb-16"
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          style={{ 
            textShadow: "0 5px 20px rgba(0,0,0,0.1)",
            transform: "translateZ(30px)"
          }}
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 2000 }}>
          {[
            { icon: "👔", title: "Tailored Essentials", desc: "Impeccable shirts, premium knitwear, and elevated basics crafted for comfort and longevity." },
            { icon: "🤵", title: "Modern Suits", desc: "Architectural cuts, premium wool blends, and contemporary silhouettes for decisive moments." },
            { icon: "🧥", title: "Outerwear & Layers", desc: "Statement coats, technical jackets, and versatile blazers for form and function." },
            { icon: "🎩", title: "Accessories", desc: "Curated leather goods, ties, belts, and hosiery to complete your sophisticated look." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                rotateY: index % 2 === 0 ? -30 : 30, 
                scale: 0.8, 
                z: -100,
                y: 50
              }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                rotateY: index % 2 === 0 ? 15 : -15,
                rotateX: -10,
                scale: 1.1,
                z: 50,
                y: -8,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group"
            >
              <motion.div 
                initial={{ scale: 0.8, rotateZ: 0 }}
                animate={{ scale: 1, rotateZ: 0 }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, -5, 0],
                  y: -10
                }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-4 text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {item.icon}
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-3 text-center"
                style={{ transform: "translateZ(15px)" }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed text-center"
                style={{ transform: "translateZ(10px)" }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3D Singapore Connection Card */}
      <motion.div
        initial={{ opacity: 0, rotateX: 20, scale: 0.9, z: -100 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1, z: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        whileHover={{ 
          rotateY: 5,
          rotateX: -5,
          scale: 1.02,
          z: 30,
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
        }}
        style={{ 
          perspective: 1500,
          transformStyle: "preserve-3d"
        }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-xl border border-blue-100 mb-16"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0, rotateZ: 0, z: -50 }}
            animate={{ scale: 1, rotateZ: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ 
              scale: 1.1, 
              rotateZ: 360,
              y: -10,
              z: 20
            }}
            className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-white text-4xl">🇸🇬</span>
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ 
              textShadow: "0 5px 20px rgba(0,0,0,0.1)",
              transform: "translateZ(20px)"
            }}
          >
            Rooted in Singapore
          </motion.h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0, z: -30 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-lg leading-relaxed text-gray-700"
            style={{ transform: "translateZ(10px)" }}
          >
            As a Singapore-based brand, we understand the unique challenges and opportunities of dressing in a tropical climate while maintaining global style standards.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, z: -30 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-lg leading-relaxed text-gray-700"
            style={{ transform: "translateZ(10px)" }}
          >
            Our flagship store at Blk 30 Kelantan Road serves as more than just a retail space—it's a destination where style enthusiasts can experience our vision firsthand.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, z: -30 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="text-lg leading-relaxed text-gray-700"
            style={{ transform: "translateZ(10px)" }}
          >
            We're proud to contribute to Singapore's growing reputation as a fashion hub in Asia, bringing international quality to our home market.
          </motion.p>
        </div>
      </motion.div>

      {/* 3D Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        style={{ perspective: 1500 }}
        className="text-center"
      >
        <motion.h2 
          initial={{ scale: 0.8, z: -50 }}
          animate={{ scale: 1, z: 0 }}
          whileHover={{ scale: 1.05, z: 20 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-3xl font-bold text-gray-900 mb-6"
          style={{ 
            textShadow: "0 5px 20px rgba(0,0,0,0.1)",
            transform: "translateZ(30px)"
          }}
        >
          Join Our Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, z: -30 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          style={{ transform: "translateZ(15px)" }}
        >
          Discover the Fashion Fushion difference and elevate your wardrobe with pieces that truly represent who you are.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/collection"
            initial={{ opacity: 0, rotateY: -30, x: -20, z: -50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            whileHover={{ 
              scale: 1.08,
              rotateY: 10,
              z: 20,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Explore Collection
          </motion.a>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, rotateY: 30, x: 20, z: -50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            whileHover={{ 
              scale: 1.08,
              rotateY: -10,
              z: 20,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
