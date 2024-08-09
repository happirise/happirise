import Container from '../shared/Container';

type TitleProps = Readonly<{
  titleNumber: number;
  titleString: string;
}>;

type ContentProps = Readonly<{
  children: React.ReactNode;
}>;

const Title = ({ titleNumber, titleString }: TitleProps) => (
  <div className="relative h-16 lg:h-16 mb-4 lg:mb-8">
    <p className="absolute left-0 top-0 font-semibold text-xl">{titleNumber}</p>
    <div className="absolute lg:-left-7 lg:-top-3 -left-4 border-solid border-r border-black lg:w-14 lg:h-14 w-10 h-10 rotate-45" />
    <p className="absolute lg:left-7 lg:top-8 left-5 top-9 font-semibold text-2xl">
      {titleString}
    </p>
  </div>
);

const Content = ({ children }: ContentProps) => (
  <p className="mb-4 lg:mb-8 text-sm lg:leading-9 leading-7">{children}</p>
);

export default function Work() {
  return (
    <>
      <div className="lg:my-24 my-16 lg:h-[25vw] h-[35vw] lg:w-[calc(96vw-0.8rem)] w-[calc(97vw-2.1rem)] bg-home_work bg-cover bg-center bg-no-repeat shadow-home_work brightness-60" />

      <Container id="work" title="私たちの仕事" contentMarginTop="-mt-16">
        <div>
          <Title titleNumber={1} titleString={'企業の採用支援事業'} />
          <Content>
            主に
            <span className="font-bold">地方企業の採用に関する支援を全般</span>
            行います。
            <br className="hidden lg:block" />
            企業のPRコンテンツの作成・運営現代に必要とされるあらゆるデジタルコンテンツから
            <span className="font-bold">
              採用戦略や採用代行まで幅広くサポート
            </span>
            致します。
          </Content>
        </div>
        <div className="pt-3 lg:pt-5">
          <Title titleNumber={2} titleString={'キャリアの育成事業'} />
          <Content>
            若者に対してのキャリア事業を通じ、
            <span className="font-bold">
              人生における選択肢の幅を増やす機会提供
            </span>
            と、
            <span className="font-bold">
              企業と学生の接点を創出し採用に繋がる
            </span>
            事業を運営致します。
          </Content>
        </div>
      </Container>
    </>
  );
}
