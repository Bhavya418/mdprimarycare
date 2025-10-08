'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const toggleVisibility = () => {
      // Clear previous timeout
      clearTimeout(timeoutId);

      // Throttle the scroll event
      timeoutId = setTimeout(() => {
        if (window.pageYOffset > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 100); // 100ms throttle
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-32 z-[1000] transform cursor-pointer rounded-lg bg-teal-500 p-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-teal-600 hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'} `}
      aria-label='Back to top'
    >
      <ArrowUp className='h-5 w-5' />
    </button>
  );
};

export default BackToTopButton;
