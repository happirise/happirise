import { Noto_Serif, Pacifico } from 'next/font/google';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['900'],
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Top() {
  return (
    <div
      className={`h-[calc(100vh-3rem)] lg:mx-12 mr-9 overflow-hidden bg-home_main bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`text-white bg-black bg-opacity-30 w-full h-full flex items-center`}
      >
        <span className="m-auto text-center">
          <p className={`lg:text-7xl text-3xl ${notoSerif.className}`}>
            Happirise
          </p>
          <p
            className={`lg:text-4xl text-lg lg:mt-10 mt-4 ${pacifico.className}`}
          >
            Corporate recruitment support company
          </p>
        </span>
      </div>
    </div>
  );
}
