import Image from 'next/image';

export default function Title() {
  return (
    <span className="flex items-center h-10 lg:mb-9">
      <Image
        src="/favicon.ico"
        alt="favicon"
        className="w-7 h-7 lg:w-10 lg:h-10"
        width={10}
        height={10}
      />
      <div className="ml-2 lg:ml-4 text-base lg:text-lg font-black">
        Happirise
      </div>
    </span>
  );
}
