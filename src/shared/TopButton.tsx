'use client';

import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
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
          className="bg-white shadow-xl rounded-full fixed w-11 h-11 bottom-5 right-5 lg:w-16 lg:h-16 lg:bottom-7 lg:right-7 cursor-pointer"
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
