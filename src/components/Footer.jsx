import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiYoutube, FiArrowRight, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hover: { 
      x: 5,
      transition: { duration: 0.3 }
    }
  };

  const socialLinks = [
    { icon: <FiInstagram size={20} />, name: 'Instagram', url: 'https://www.instagram.com/fashionfushion10/' },
    { icon: <FiFacebook size={20} />, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585416537651' },
    { icon: <FiMessageSquare size={20} />, name: 'WhatsApp', url: 'https://wa.me/6589791370' },
  ];

  const quickLinks = [
    { 
      name: 'New Arrivals',
      description: 'Discover the latest trends at Fashion Fushion.',
      path: '/new-arrivals'
    },
    { 
      name: 'Tailoring Services',
      description: 'Perfect fit guaranteed with our expert tailoring.',
      path: '/tailoring-services'
    },
    { 
      name: 'Size Guide',
      description: 'Find your perfect fit with our detailed guide.',
      path: '/size-guide'
    },
    { 
      name: 'Lookbook',
      description: 'Get inspired by our latest collections.',
      path: '/lookbook'
    },
    { 
      name: 'About Us',
      description: 'Learn more about Fashion Fushion.',
      path: '/about'
    }
  ];

  const customerService = [
    { name: 'Shipping & Returns', url: '/shipping-returns' },
    { name: 'Store Policy', url: '/store-policy' },
    { name: 'Payment Methods', url: '/payment-methods' },
    { name: 'FAQ', url: '/faq' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gray-900 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              FASHION FUSION
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating modern menswear with timeless designs and exceptional quality for the contemporary gentleman.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Blk 30 Kelantan Road #01-85<br />Singapore -200030</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-blue-400" />
                <a href="mailto:hello@fashionfusion.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  fashionfushiondigitalmarketing@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-blue-400" />
                <a href="tel:+6561234567" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  +65 89791370
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover="hover"
                  variants={linkVariants}
                  onHoverStart={() => setIsHovered(`quick-${index}`)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="group"
                >
                  <a 
                    href={link.path} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <FiArrowRight 
                      className={`mr-2 transition-transform ${isHovered === `quick-${index}` ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} w-4`} 
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Customer Service
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover="hover"
                  variants={linkVariants}
                  onHoverStart={() => setIsHovered(`service-${index}`)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="group"
                >
                  <a 
                    href={link.url} 
                    className="flex items-center text-gray-400 group-hover:text-white transition-colors cursor-pointer"
                  >
                    <FiArrowRight 
                      className={`mr-2 transition-transform cursor-pointer ${isHovered === `service-${index}` ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} w-4`} 
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates, exclusive offers, and style inspiration.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-md"
              >
                Thank you for subscribing!
              </motion.div>
            )}
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-4 text-gray-300">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-6"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} FASHION FUSION PTE. LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="/shipping-returns" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              Shipping & Returns
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
