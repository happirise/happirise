import Image from 'next/image';

export default function Vision() {
  return (
    <div id="vision" className="lg:mx-12 mr-9 lg:py-24 pt-10 pb-16">
      <div className="w-[800px] lg:m-auto ml-8">
        <h2 className="font-semibold text-xl h-[90px] w-8 pr-9 flex items-center leading-5 text-wrap border-r-2 border-black">
          ビジョン
        </h2>
      </div>
      <div className="lg:w-[600px] lg:pr-0 lg:m-auto ml-24 -mt-4 lg:p-0 pl-2 pr-9">
        <p className="font-bold text-2xl mb-6">
          自己好力感で満ちていく社会の創造
        </p>
        <p className="leading-9 text-sm mb-12">
          自分で自分の人生の選択をする為には、
          時にリスクを伴うチャレンジをする事もあるでしょう。
          その不安に打ち勝つには自分を信じる熱い信念が重要です。
          <br />
          【私にはできる】✖️【そんな私が好き】=自己好(効)力感
          <br />
          こそが人生を豊かにする為の源泉になると考えています。
          自分を信じ自分を愛せる人を増やし、その気持ちが伝染する
          社会を作ることがM i s s ionの実現に繋がります。
        </p>
        <Image
          src="/image/vision.png"
          alt="Vision"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
