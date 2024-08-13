'use client';

import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsAtBottom(isScrolledToBottom);

      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div className="fixed z-50">
        <button
          onClick={scrollToTop}
          className={`bg-white shadow-xl rounded-full fixed bottom-4 right-4 w-16 h-16 lg:bottom-7 lg:right-7 cursor-pointer ${
            isAtBottom ? 'hidden' : 'block'
          }`}
        >
          <div className="flex flex-col items-center -mt-1.5">
            <KeyboardArrowUpIcon className="text-black" />
            <span className="text-xs lg:text-sm">Top</span>
          </div>
        </button>
      </div>
    )
  );
}
