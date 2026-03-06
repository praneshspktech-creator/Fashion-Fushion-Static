import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top with 1 second delay
  const scrollToTop = () => {
    // Add loading state
    const button = document.querySelector('[aria-label="Scroll to top"]');
    if (button) {
      button.disabled = true;
      button.classList.add('opacity-75');
    }

    // Wait for 1 second before starting scroll
    setTimeout(() => {
      const startPosition = window.scrollY;
      const distance = -startPosition;
      const duration = 1000; // 1 second scroll duration
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        window.scrollTo(0, startPosition + distance * percentage);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else if (button) {
          button.disabled = false;
          button.classList.remove('opacity-75');
        }
      }

      window.requestAnimationFrame(step);
    }, 1000); // 1 second delay before starting scroll
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
    </>
  );
}
