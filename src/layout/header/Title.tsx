import Image from 'next/image';

export default function Title() {
  return (
    <span className="flex items-center h-10 lg:mb-9">
      <Image
        src="/icons/happirise_icon.png"
        alt="favicon"
        className="w-7 h-7 lg:w-10 lg:h-10"
        width={10}
        height={10}
      />
      <a
        href={'/'}
        className="ml-2 lg:ml-2 text-base lg:text-lg font-black cursor-pointor"
      >
        Happirise
      </a>
    </span>
  );
}
