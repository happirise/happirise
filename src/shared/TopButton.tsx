'use client';

import { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
          className="bg-white shadow-xl rounded-full flex items-center justify-center fixed w-11 h-11 bottom-5 right-5 lg:w-16 lg:h-16 lg:bottom-7 lg:right-7 cursor-pointer"
        >
          <KeyboardDoubleArrowUpIcon
            className="text-black"
            sx={{ width: { md: 30, lg: 35 }, height: { md: 30, lg: 35 } }}
          />
        </button>
      </div>
    )
  );
}
