import Image from 'next/image';
import Container from '../shared/Container';

const services = [
  {
    title: '採用支援',
    description: 'ビジョン制作、採用内容見直し',
    image: '/images/services/recruit.png',
  },
  {
    title: 'PRツール制作',
    description: 'HP作成、各種SNS運用、SEO対策',
    image: '/images/services/pr_tool.png',
  },
  {
    title: 'キャリア教育事業',
    description: '中高大へキャリア授業を実施',
    image: '/images/services/career.png',
  },
  {
    title: 'イベント運営',
    description: '大学生、同業、同職、異職、交流イベント',
    image: '/images/services/event.png',
  },
];

export default function Services() {
  return (
    <div className="-mt-16">
      <Container id="services">
        <h2 className="mb-10 text-center font-semibold text-2xl underline underline-offset-3">
          &nbsp;提供サービス&nbsp;
        </h2>
        <div className="flex flex-col lg:items-center lg:m-auto">
          {services.map(({ title, image, description }, index) => (
            <div
              key={title}
              className={`flex items-center lg:w-[390px] ${
                index === services.length - 1 ? '' : 'mb-8'
              }`}
            >
              <div className="flex items-center lg:mr-10 mr-5 lg:w-1/5">
                <Image
                  src={image}
                  alt={title}
                  width={60}
                  height={60}
                  className="w-20 mr-auto"
                />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-sm font-light text-balance">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
