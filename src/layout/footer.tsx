import { Noto_Serif } from 'next/font/google';
import Image from 'next/image';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['900'],
});

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-200 mt-12 lg:py-7 lg:px-0 p-5">
      <div className="max-w-[730px] m-auto h-full flex flex-col lg:gap-10 gap-5 justify-between items-center">
        <div className={`${notoSerif.className} w-full text-lg`}>Happirise</div>
        <div className="w-full font-light text-sm flex justify-between">
          <div>Copyright © 2024 Happirise</div>
          <div className="flex justify-end gap-6">
            <a href="https://www.instagram.com/andoupan525" target="_blank">
              <Image
                src="/icons/instagram-white-icon.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="https://www.threads.net/@andoupan525" target="_blank">
              <Image
                src="/icons/threads-white-icon.svg"
                alt="threads"
                width={19}
                height={19}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
