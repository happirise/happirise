import Container from '../shared/Container';

const values = [
  {
    title: 'ご縁',
    descriptions: ['出会い', '気づき'],
  },
  {
    title: 'ブランディング',
    descriptions: ['知る', '魅せる'],
  },
  {
    title: '挑戦機会',
    descriptions: ['課題発見', '成功体験'],
  },
];

export default function Values() {
  return (
    <div className="-mt-16 -mb-28">
      <Container id="value">
        <div>
          <h2 className="mb-10 text-center font-semibold text-2xl underline underline-offset-3">
            &nbsp;3 Value&nbsp;
          </h2>
          <p className="text-sm lg:leading-9 leading-7">
            日々の活動の基盤となる、3つの価値観はHappiriseがどんな事業をする上でも重要視している価値観です。人が幸福を感じる要素には様々な人との出会い、自分がどんな人間であるかを把握し魅せることができる。自ら目標に対し挑戦をし自分から新しい成長の機会は取りに行く。これらの要素が自己好力感を高め、幸福度を高める事に繋がると考えます。
          </p>
        </div>
        <div className="h-60 lg:h-auto flex lg:flex-row flex-col justify-between items-center text-center mt-8">
          {values.map(({ title, descriptions }) => (
            <div
              key={title}
              className="bg-gray-200 w-full lg:w-48 py-2 lg:rounded-3xl rounded-full flex flex-col items-center justify-center"
            >
              <h3 className="lg:text-lg text-base font-semibold mb-1">
                {title}
              </h3>
              <div className="lg:text-sm text-xs font-light">
                {descriptions[0]}, {descriptions[1]}
              </div>
            </div>
          ))}
        </div>
      </Container>
      ;
    </div>
  );
}
