import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Top() {
  return (
    <div
      className={`h-[calc(100vh-3rem)] lg:mx-12 mr-9 overflow-hidden bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxjb2xsZWN0aW9ufDU5fDE0MDUzNzN8fHx8fDJ8fDE2MzM5MjU4Nzg&ixlib=rb-1.2.1')] bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`font-black lg:text-7xl text-3xl text-white ${pacifico.className} bg-black bg-opacity-30 w-full h-full flex items-center`}
      >
        <span className="m-auto">
          Corporate recruitment
          <br className="lg:hidden" />
          support company
        </span>
      </div>
    </div>
  );
}
