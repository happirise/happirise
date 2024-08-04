import { Pacifico } from 'next/font/google';

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
        className={`font-black lg:text-7xl text-3xl text-white ${pacifico.className} bg-black bg-opacity-30 w-full h-full flex items-center`}
      >
        <span className="m-auto text-center">
          Corporate recruitment
          <br className="lg:hidden" />
          support company
        </span>
      </div>
    </div>
  );
}
