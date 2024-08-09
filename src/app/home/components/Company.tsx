import Image from 'next/image';
import Container from '../shared/Container';

const CompanyInfo = [
  {
    title: '会社名',
    value: 'Happirise',
  },
  {
    title: '代表',
    value: '安藤 龍之介',
  },
  {
    title: '設立',
    value: '2024年 7月',
  },
  {
    title: '事業内容',
    value: '企業採用支援事業',
  },
];
const ImageContent = () => (
  <Image
    src="/images/home/president.png"
    alt="Vision"
    width={1000}
    height={1000}
    className="lg:w-vw w-full max-w-96 my-1.5 m-auto p-2 bg-gray-200"
  />
);

export default function Company() {
  return (
    <>
      <div className="lg:my-24 my-16 lg:h-[25vw] h-[35vw] w-[calc(96vw-1rem)] bg-home_company bg-cover bg-center bg-no-repeat shadow-home_company brightness-60 ml-auto" />

      <Container id="company" title="会社情報" contentMarginTop="-mt-16">
        <div className="grid lg:grid-cols-12 lg:gap-5 gap-7 lg:mb-12 mb-8">
          <div className="lg:col-span-5">
            <ImageContent />
          </div>
          <div className="lg:col-span-7 text-sm leading-7">
            <div>
              なぜ明日死ぬこともないこの社会が実現しているのにも関わらず、自殺率が先進国の中でもトップレベルに高いのだろう。学生時代にふと考えたことがありました。周りの国と比べて日本は確かに幸せと言えるかもしれませんが、個人に幸せか問いを投げかけると答えはどうでしょうか。
              <br />
              日本の幸福度を上げたい(ハピネスをライズする)という思いで組織を立ち上げました。
            </div>
            <div className="text-right font-semibold lg:p-0 pt-4">
              代表取締役社長 安藤 龍之介
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm leading-7">
          {CompanyInfo.map((info) => (
            <div
              key={info.title}
              className="flex text-left lg:col-span-1 col-span-2 mb-8"
            >
              <h3 className="w-24 pl-1.5 mr-4 border-b-[1px] border-black font-semibold">
                {info.title}
              </h3>
              <p className="w-full pl-1.5 lg:mr-4 border-b-[1px] border-gray-300 text-gray-500">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
