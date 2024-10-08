import Image from 'next/image';
import Container from '../shared/Container';

const Title = () => (
  <p className="font-semibold text-2xl mb-4 lg:mb-8">
    自己好力感で
    <br className="block lg:hidden" />
    満ちていく社会の創造
  </p>
);

const Content = () => (
  <p className="mb-4 lg:mb-8 text-sm lg:leading-9 leading-7">
    自分で自分の人生の選択をする為には、時にリスクを伴うチャレンジをする事もあるでしょう。その不安に打ち勝つには自分を信じる熱い信念が重要です。
    <br />
    <span className="font-bold underline lg:leading-[5] text-balance">
      【私にはできる】✖️【そんな私が好き】= 自己好(効)力感
    </span>
    <br />
    こそが人生を豊かにする為の源泉になると考えています。自分を信じ自分を愛せる人を増やし、その気持ちが伝染する社会を作ることが
    Mission の実現に繋がります。
  </p>
);

const ImageContent = () => (
  <Image
    src="/images/home/vision.png"
    alt="Vision"
    width={1000}
    height={1000}
    className="brightness-90"
  />
);

export default function Vision() {
  return (
    <Container id="vision" title="ビジョン" contentMarginTop="-mt-16 lg:-mt-9">
      <Title />
      <Content />
      <ImageContent />
    </Container>
  );
}
