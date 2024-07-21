'use client';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

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
        } fixed top-0 left-0 w-screen h-screen z-50 bg-white/75`}
      >
        <button className="absolute top-0 right-0 m-4 mr-3">
          <CloseIcon
            className="text-gray-500 text-right"
            // sx={{ width: 30, height: 50 }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
        <nav className="flex flex-col text-center h-64 font-semibold justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* ビジョン → View More で Value */}
          <a
            className="cursor-pointer"
            href="#message"
            onClick={() => setIsOpen(!isOpen)}
          >
            ご挨拶
          </a>
          {/* 我々ができること */}
          <a
            className="cursor-pointer"
            href="#work"
            onClick={() => setIsOpen(!isOpen)}
          >
            私たちの仕事
          </a>
          {/* お知らせ */}
          <a
            className="cursor-pointer"
            href="#info"
            onClick={() => setIsOpen(!isOpen)}
          >
            お知らせ
          </a>
          {/* 代表メッセージ, 会社情報 → View More で 事業概要 */}
          <a
            className="cursor-pointer"
            href="#company"
            onClick={() => setIsOpen(!isOpen)}
          >
            会社情報
          </a>
          {/* お問い合わせ */}
          <a
            className="cursor-pointer"
            href="#contact"
            onClick={() => setIsOpen(!isOpen)}
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </>
  );
}
