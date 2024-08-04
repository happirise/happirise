const MARGIN_X_SIZE = 5;
const MARGIN_LEFT = `ml-${MARGIN_X_SIZE}`;
const MARGIN_RIGHT = `mr-${MARGIN_X_SIZE}`;

type Props = Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
  mt: string;
}>;

export default function Container({ id, title, children, mt }: Props) {
  return (
    <div id={id} className="lg:mx-12 mr-9 lg:my-24 mt-10 mb-16">
      <div className={`lg:w-[750px] lg:m-auto ${MARGIN_LEFT}`}>
        <h2 className="font-bold text-lg lg:text-xl py-2 w-8 pr-8 lg:pr-9 flex items-center text-wrap border-r-2 border-black">
          <span className="leading-5 lg:leading-6">{title}</span>
        </h2>
      </div>
      <div
        className={`lg:w-[560px] lg:pr-0 lg:m-auto ml-16 ${mt} lg:p-0 pl-2 ${MARGIN_RIGHT} text-sm leading-9 lg:text-base lg:leading-10`}
      >
        {children}
      </div>
    </div>
  );
}
