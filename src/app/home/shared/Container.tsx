type Props = Readonly<{
  id: string;
  title?: string;
  children: React.ReactNode;
  contentMarginTop?: string;
}>;

export default function Container({
  id,
  title = '',
  children,
  contentMarginTop = '',
}: Props) {
  return (
    <div id={id} className="lg:mx-12 mr-9 lg:my-24 mt-10 mb-16">
      <div className={`lg:w-[750px] w-vw lg:mx-auto ml-5`}>
        <h2
          className={`font-semibold text-lg py-2 w-8 pr-8 lg:pr-9 flex items-center text-wrap ${
            title ? 'border-r-2 border-black' : ''
          }`}
        >
          <span className="leading-5">{title}</span>
        </h2>
      </div>
      <div
        className={`lg:w-[600px] w-vw lg:mx-auto ml-[calc(17vw)] mr-3.5 ${contentMarginTop} lg:p-0 text-sm leading-9 lg:text-base lg:leading-10`}
      >
        {children}
      </div>
    </div>
  );
}
