type Props = Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
  mt: string;
}>;

export default function Container({ id, title, children, mt }: Props) {
  return (
    <div id={id} className="lg:mx-12 mr-9 lg:my-24 mt-10 mb-16">
      <div className={`lg:w-[750px] lg:mx-auto ml-5`}>
        <h2 className="font-bold text-lg lg:text-xl py-2 w-8 pr-8 lg:pr-9 flex items-center text-wrap border-r-2 border-black">
          <span className="leading-5 lg:leading-6">{title}</span>
        </h2>
      </div>
      <div
        className={`lg:w-[560px] lg:mx-auto ml-16 mr-5 ${mt} lg:p-0 pl-2 text-sm leading-9 lg:text-base lg:leading-10`}
      >
        {children}
      </div>
    </div>
  );
}
