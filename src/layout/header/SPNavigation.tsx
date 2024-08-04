'use client';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import NavigationItem from './NavigationItem';

export default function SPNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={`${
          isOpen ? 'hidden' : 'flex'
        } lg:hidden fixed top-0 right-0 mt-6 mr-3.5 w-7 h-5 items-end justify-between flex-col`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="border border-black w-full" />
        <div className="border border-black w-4/5" />
        <div className="border border-black w-3/5" />
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-screen h-screen z-50 bg-white/95`}
      >
        <button className="absolute top-0 right-0 m-4 mr-3">
          <CloseIcon
            className="text-right"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
        <nav className="flex flex-col text-center h-64 font-bold justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <NavigationItem onClick={() => setIsOpen(!isOpen)} />
        </nav>
      </div>
    </>
  );
}
